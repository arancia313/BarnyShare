Scratch-like prototype

Files created in `Changes/scratch-proto/`:
- `index.html` — main UI (includes Blockly via CDN)
- `main.js` — injects Blockly, defines blocks, communicates with `worker.js`
- `worker.js` — runtime worker that executes generated code and posts commands to the UI
- `styles.css` — minimal layout

How to run
1. Start a simple local HTTP server (required for Worker to load):

```bash
cd Changes/scratch-proto
python3 -m http.server 8000
```

2. Open `http://localhost:8000` in your browser.
3. Use the toolbox to create a small script, press "Play" to run.

Notes & next steps
- This is a minimal prototype: security is limited (the worker executes generated JS). For production, sandbox carefully.
- Next improvements: add `broadcast`, variables, sprite costumes, stop/pause control, step debugger, and persist project list.
- If you'd like, I can switch to `scratch-blocks` for a more Scratch-like UI, or integrate asset management for sprites.
