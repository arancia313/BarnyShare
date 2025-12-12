const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// Persistence files for users and sessions
const USERS_FILE = path.join(__dirname, 'users.json');
const SESSIONS_FILE = path.join(__dirname, 'sessions.json');

function readJsonSafe(filePath) {
  try {
    if (!fs.existsSync(filePath)) return {};
    const raw = fs.readFileSync(filePath, 'utf8');
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to read JSON', filePath, e);
    return {};
  }
}

function writeJsonSafe(filePath, obj) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(obj, null, 2), 'utf8');
  } catch (e) {
    console.error('Failed to write JSON', filePath, e);
  }
}

// Ensure files exist
if (!fs.existsSync(USERS_FILE)) writeJsonSafe(USERS_FILE, {});
if (!fs.existsSync(SESSIONS_FILE)) writeJsonSafe(SESSIONS_FILE, {});

// Session TTL (milliseconds) — 1 day
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

function cleanupExpiredSessions() {
  const sessions = readJsonSafe(SESSIONS_FILE);
  let changed = false;
  const now = Date.now();
  for (const [token, s] of Object.entries(sessions)) {
    if (s.expiresAt && Date.parse(s.expiresAt) <= now) {
      delete sessions[token];
      changed = true;
    }
  }
  if (changed) writeJsonSafe(SESSIONS_FILE, sessions);
}

// Mappa MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
};

// Helper: parse JSON body
function parseJsonBody(req, callback) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
    if (body.length > 1e6) {
      req.connection.destroy();
    }
  });
  req.on('end', () => {
    try {
      const data = body ? JSON.parse(body) : {};
      callback(null, data);
    } catch (err) {
      callback(err);
    }
  });
}

function parseCookies(req) {
  const header = req.headers.cookie;
  const result = {};
  if (!header) return result;
  header.split(';').forEach(pair => {
    const [k, v] = pair.split('=').map(s => s && s.trim());
    if (k && v) result[k] = decodeURIComponent(v);
  });
  return result;
}

// Server HTTP
const server = http.createServer((req, res) => {
  // Simple API: /api/signup, /api/login, /api/me
  if (req.url === '/api/signup' && req.method === 'POST') {
    parseJsonBody(req, (err, body) => {
      if (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
        return;
      }
      const { email, password, displayName } = body || {};
      if (!email || !password || typeof password !== 'string' || password.length < 6) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid email or password (min 6 chars)' }));
        return;
      }

      const users = readJsonSafe(USERS_FILE);
      const exists = Object.values(users).find(u => u.email === email.toLowerCase());
      if (exists) {
        res.writeHead(409, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Email already registered' }));
        return;
      }

      const id = crypto.randomUUID();
      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(password, salt);

      const user = {
        id,
        email: email.toLowerCase(),
        displayName: displayName || email.split('@')[0],
        passwordHash,
        createdAt: new Date().toISOString(),
        verified: false
      };
      users[id] = user;
      writeJsonSafe(USERS_FILE, users);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ id: user.id, email: user.email, displayName: user.displayName }));
    });
    return;
  }

  if (req.url === '/api/login' && req.method === 'POST') {
    parseJsonBody(req, (err, body) => {
      if (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
        return;
      }
      const { email, password } = body || {};
      if (!email || !password) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing email or password' }));
        return;
      }

      const users = readJsonSafe(USERS_FILE);
      const user = Object.values(users).find(u => u.email === email.toLowerCase());
      if (!user) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid credentials' }));
        return;
      }

      const ok = bcrypt.compareSync(password, user.passwordHash);
      if (!ok) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid credentials' }));
        return;
      }

      // Create session with expiration
      cleanupExpiredSessions();
      const sessions = readJsonSafe(SESSIONS_FILE);
      const token = crypto.randomUUID();
      const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();
      sessions[token] = { userId: user.id, createdAt: new Date().toISOString(), expiresAt };
      writeJsonSafe(SESSIONS_FILE, sessions);

      // Set cookie with Max-Age
      const maxAgeSec = Math.floor(SESSION_TTL_MS / 1000);
      res.setHeader('Set-Cookie', `session=${token}; HttpOnly; Path=/; Max-Age=${maxAgeSec}; SameSite=Lax`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ id: user.id, email: user.email, displayName: user.displayName }));
    });
    return;
  }

  // Logout: delete the session token and clear cookie
  if (req.url === '/api/logout' && req.method === 'POST') {
    const cookies = parseCookies(req);
    const token = cookies.session;
    if (!token) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No session' }));
      return;
    }
    const sessions = readJsonSafe(SESSIONS_FILE);
    if (sessions[token]) {
      delete sessions[token];
      writeJsonSafe(SESSIONS_FILE, sessions);
    }
    // Clear cookie
    res.setHeader('Set-Cookie', 'session=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax');
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/api/me' && req.method === 'GET') {
    // Cleanup expired sessions before checking
    cleanupExpiredSessions();
    const cookies = parseCookies(req);
    const token = cookies.session;
    if (!token) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not authenticated' }));
      return;
    }
    const sessions = readJsonSafe(SESSIONS_FILE);
    const session = sessions[token];
    if (!session) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid or expired session' }));
      return;
    }
    // Optionally refresh session expiry on activity (sliding expiration)
    session.expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();
    sessions[token] = session;
    writeJsonSafe(SESSIONS_FILE, sessions);

    const users = readJsonSafe(USERS_FILE);
    const user = users[session.userId];
    if (!user) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid session user' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ id: user.id, email: user.email, displayName: user.displayName }));
    return;
  }

  // Fallthrough: serve static files
  let filePath = '.' + req.url;
  if (filePath === './') filePath = './index.html';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }
    
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    // Inietta lo script di auto-reload nei file HTML
    if (ext === '.html') {
      let html = data.toString();
      const injectScript = `
<script>
(function() {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const ws = new WebSocket(protocol + "//" + window.location.host);
  ws.onmessage = (event) => {
    if (event.data === "reload") {
      console.log("One file is modified! Reloading...");
      window.location.reload();
    }
  };
  ws.onerror = () => {
    console.log("Lost websocket connection. Trying again...");
    setTimeout(() => window.location.reload(), 2000);
  };
})();
</script>

<script>
(async function(){
  const headerId = 'barny-auth-header';
  function makeHeader(html){
    const existing = document.getElementById(headerId);
    if(existing){ existing.innerHTML = html; return; }
    const div = document.createElement('div');
    div.id = headerId;
    div.style.cssText = 'background:#fff;border-bottom:1px solid #eee;padding:.5rem 1rem;display:flex;justify-content:space-between;align-items:center;font-family:system-ui,Segoe UI,Roboto,Arial;z-index:9999;';
    div.innerHTML = html;
    document.body.insertBefore(div, document.body.firstChild);
  }
  async function render(){
    try{
      const res = await fetch('/api/me', { credentials: 'include' });
      if(res.ok){
        const user = await res.json();
        makeHeader('<div style="font-weight:600">Benvenuto, ' + (user.displayName||user.email) + '</div><div><button id="barny-logout" style="background:#e53e3e;color:#fff;border:none;padding:.4rem .6rem;border-radius:6px;cursor:pointer">Logout</button></div>');
        const btn = document.getElementById('barny-logout');
        if(btn) btn.addEventListener('click', async function(){
          try{ await fetch('/api/logout', { method:'POST', credentials:'include' }); }catch(e){}
          window.location.reload();
        });
      } else {
        makeHeader('<div></div><div><a href="/login.html">Accedi</a> · <a href="/signup.html">Registrati</a></div>');
      }
    }catch(e){
      /* ignore network errors */
    }
  }
  render();
})();
</script>
`;
      html = html.replace('</body>', injectScript + '</body>');
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(html);
      return;
    }
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

// WebSocket per auto-reload
const wss = new WebSocket.Server({ server });

// Monitora i file per cambiamenti
const watchedDirs = ['.'];
watchedDirs.forEach(dir => {
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (filename && !filename.includes('node_modules') && !filename.includes('.git')) {
      console.log(`File modificato: ${filename}`);
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send('reload');
        }
      });
    }
  });
});

server.listen(3000, () => console.log('Server su http://localhost:3000 con auto-reload'));