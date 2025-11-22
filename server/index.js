const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

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

// Server HTTP
const server = http.createServer((req, res) => {
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
      const reloadScript = '<script>\n(function() {\n  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";\n  const ws = new WebSocket(protocol + "//" + window.location.host);\n  ws.onmessage = (event) => {\n    if (event.data === "reload") {\n      console.log("File modificato, ricarico...");\n      window.location.reload();\n    }\n  };\n  ws.onerror = () => {\n    console.log("Connessione WebSocket persa, riprovo...");\n    setTimeout(() => window.location.reload(), 2000);\n  };\n})();\n</script>';
      html = html.replace('</body>', reloadScript + '</body>');
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