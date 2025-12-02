// server.js
const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// public directory (serve index.html, admin/index.mjs, ecc.)
app.use(express.static(path.join(__dirname)));

// ensure uploads directory exists
const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// upload endpoint (POST /upload)
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  res.json({ success: true, filename: req.file.filename, path: `/uploads/${req.file.filename}` });
});

// example verify endpoint (POST /admin/verify) - simple demo only
app.post('/admin/verify', express.json(), (req, res) => {
  const { passcode } = req.body;
  // DEMO: in produzione verifica la passcode sul server in modo sicuro
  const secret = process.env.ADMIN_PASS || 'changeme';
  if (passcode === secret) return res.json({ authorized: true });
  res.status(403).json({ authorized: false });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));