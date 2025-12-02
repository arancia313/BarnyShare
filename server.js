// server.js
const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// parse JSON bodies for login/verify
app.use(express.json());

// session middleware for authentication
app.use(session({
  secret: process.env.SESSION_SECRET || 'change_this_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true }
}));

// public directory (serve index.html, admin/index.mjs, ecc.)
app.use(express.static(path.join(__dirname)));

// ensure uploads directory exists
const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

// multer setup with file size/type limits
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_MIME = [
  'image/png', 'image/jpeg', 'image/gif', 'image/svg+xml',
  'application/pdf', 'text/plain'
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

function fileFilter(req, file, cb) {
  if (ALLOWED_MIME.includes(file.mimetype)) return cb(null, true);
  return cb(new Error('Invalid file type'));
}

const upload = multer({ storage, limits: { fileSize: MAX_FILE_SIZE }, fileFilter });

// rate limiting and CSRF
const rateLimit = require('express-rate-limit');
const csrf = require('csurf');

// apply rate limit to login endpoint
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: { error: 'Too many login attempts, please try again later.' }
});

// CSRF protection using sessions
const csrfProtection = csrf();

// middleware to require authentication
function requireAuth(req, res, next) {
  if (req.session && req.session.authenticated) return next();
  return res.status(401).json({ error: 'Unauthorized' });
}

// upload endpoint (POST /upload) - requires auth
app.post('/upload', requireAuth, csrfProtection, (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      // Multer-specific errors have code property
      if (err.code === 'LIMIT_FILE_SIZE') return res.status(413).json({ error: 'File too large' });
      return res.status(400).json({ error: err.message || 'Upload error' });
    }
    if (!req.file) return res.status(400).json({ error: 'No file' });
    res.json({ success: true, filename: req.file.filename, path: `/uploads/${req.file.filename}` });
  });
});

// example verify endpoint (POST /admin/verify) - simple demo only
// Demo: verify endpoint kept for compatibility (returns authorized boolean)
app.post('/admin/verify', (req, res) => {
  // This endpoint is kept as a compatibility layer but we prefer session login
  const { passcode } = req.body || {};
  const secret = process.env.ADMIN_PASS || 'changeme';
  if (passcode === secret) return res.json({ authorized: true });
  res.status(403).json({ authorized: false });
});

// Login endpoint: sets session.authenticated = true when passcode matches
app.post('/admin/login', loginLimiter, (req, res) => {
  const { passcode } = req.body || {};
  const secret = process.env.ADMIN_PASS || 'changeme';
  if (passcode === secret) {
    req.session.authenticated = true;
    return res.json({ success: true });
  }
  return res.status(403).json({ success: false });
});

// Logout endpoint
app.get('/admin/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

// Status endpoint to check if client is authenticated
app.get('/admin/status', (req, res) => {
  res.json({ authenticated: !!(req.session && req.session.authenticated) });
});

// Provide CSRF token to authenticated clients (for fetch requests)
app.get('/admin/csrf-token', requireAuth, csrfProtection, (req, res) => {
  // create a token for the current session
  const token = req.csrfToken();
  if (!token) return res.status(500).json({ error: 'CSRF unavailable' });
  res.json({ csrfToken: token });
});

// API endpoint to list uploaded files
app.get('/api/files', (req, res) => {
  fs.readdir(UPLOAD_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: 'Cannot read directory' });
    
    const fileList = files.map(filename => {
      const filepath = path.join(UPLOAD_DIR, filename);
      const stats = fs.statSync(filepath);
      return {
        filename,
        name: filename.replace(/^\d+-/, ''), // Remove timestamp prefix for display
        size: stats.size,
        uploadDate: stats.birthtime
      };
    });
    
    res.json(fileList);
  });
});

// API endpoint to delete a file
app.delete('/api/files/:filename', requireAuth, csrfProtection, (req, res) => {
  const filename = req.params.filename;
  // Security: prevent directory traversal
  if (filename.includes('..') || filename.includes('/')) {
    return res.status(400).json({ error: 'Invalid filename' });
  }
  
  const filepath = path.join(UPLOAD_DIR, filename);
  fs.unlink(filepath, (err) => {
    if (err) return res.status(500).json({ error: 'Cannot delete file' });
    res.json({ success: true });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));