Scratch‑blocks prototype

This folder contains a variant of the Blockly prototype that aims to use `scratch-blocks`.

Files:
- `index.html` — UI (tries to load `scratch-blocks` from CDN)
- `main.js` — workspace setup and generators
- `worker.js` — runtime worker
- `styles.css` — styles

Notes
- `scratch-blocks` is not always available via CDN. If the script in `index.html` fails to load, follow these steps to run locally:

1) Initialize a small project and install scratch-blocks:

```bash
cd Changes/scratch-proto-sb
npm init -y
npm install scratch-blocks
```

2) Serve files with a bundler that exposes the module (or copy `node_modules/scratch-blocks/dist/scratch-blocks.min.js` into this folder and update `index.html` to load it locally).

3) Start a static server:

```bash
python3 -m http.server 8001
# open http://localhost:8001
```

UI improvements in this branch
- Header with brand and icon buttons (play/stop/save/load) for a cleaner toolbar.
- Stage header with a flag icon and rounded panels to resemble Scratch layout.
- CSS variables and panel styling for a softer, playful look.

Limitations & next steps
- This is a compatibility attempt: APIs are similar but not identical. For full parity with Scratch UI (appearance and palette), consider cloning Scratch's `scratch-gui` and `scratch-blocks` combo.
- If you want, I can add a small `package.json` + Vite config to bundle `scratch-blocks` so it always loads correctly, and further refine block visuals and icons.
