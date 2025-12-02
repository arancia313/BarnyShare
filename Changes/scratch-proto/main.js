// Minimal Scratch-like prototype using Blockly and a Worker runtime
const toolbox = document.getElementById('toolbox');
const blocklyDiv = document.getElementById('blocklyDiv');
const workspace = Blockly.inject(blocklyDiv, {
  toolbox: toolbox,
  grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
  trashcan: true
});

// --- Define custom blocks ---
Blockly.Blocks['when_flag_clicked'] = {
  init: function() {
    this.appendDummyInput().appendField("when flag clicked");
    this.setColour(65);
    this.setNextStatement(true);
    this.setTooltip('Start block');
    this.contextMenu = false;
  }
};

Blockly.Blocks['move_steps'] = {
  init: function() {
    this.appendValueInput('STEPS').setCheck('Number').appendField('move');
    this.appendDummyInput().appendField('steps');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
  }
};

Blockly.Blocks['controls_wait'] = {
  init: function() {
    this.appendValueInput('DURATION').setCheck('Number').appendField('wait');
    this.appendDummyInput().appendField('seconds');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

// --- JavaScript generators ---
Blockly.JavaScript['when_flag_clicked'] = function(block) {
  // Marker: convert stacks starting from this block into an async function
  const statements = Blockly.JavaScript.statementToCode(block, '');
  // We return code that registers a runnable function in `__WHEN_SCRIPTS__` array
  return `__WHEN_SCRIPTS__.push(async function(){\n${statements}\n});\n`;
};

Blockly.JavaScript['move_steps'] = function(block) {
  const val = Blockly.JavaScript.valueToCode(block, 'STEPS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `postMessage({type:'move', steps: ${val}});\n`;
};

Blockly.JavaScript['controls_wait'] = function(block) {
  const dur = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // yield to runtime: post wait request and await response
  return `await new Promise(resolve => postMessage({type:'wait', duration:${dur} , _rid: Math.random(), _cb: resolve}));\n`;
};

// Small helper to download text file
function downloadText(filename, text) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], {type:'text/plain'}));
  a.download = filename;
  a.click();
}

// --- Worker management ---
let worker = null;
function createWorker() {
  if (worker) worker.terminate();
  worker = new Worker('worker.js');
  worker.onmessage = (ev) => handleWorkerMessage(ev.data);
}
createWorker();

function stopWorker() {
  if (worker) {
    worker.terminate();
    worker = null;
  }
}

// --- Stage/Sprite simple implementation ---
const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');
const sprite = { x: 60, y: 60, color: '#FF8C42' };
function drawStage() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // grid
  ctx.fillStyle = '#fff';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  // sprite
  ctx.beginPath();
  ctx.fillStyle = sprite.color;
  ctx.arc(sprite.x, sprite.y, 20, 0, Math.PI*2);
  ctx.fill();
}

drawStage();

const logEl = document.getElementById('log');
function log(msg) {
  const p = document.createElement('div');
  p.textContent = msg;
  logEl.appendChild(p);
  logEl.scrollTop = logEl.scrollHeight;
}

// When worker posts instructions, handle them
function handleWorkerMessage(msg) {
  if (!msg || !msg.type) return;
  if (msg.type === 'move') {
    // simple move to right by steps
    sprite.x += Number(msg.steps || 0);
    drawStage();
  } else if (msg.type === 'log') {
    log(msg.text);
  } else if (msg.type === 'wait') {
    // worker requested a wait: simulate waiting then notify back
    const ms = (Number(msg.duration) || 0) * 1000;
    setTimeout(() => {
      // reply to worker to resume; worker used a unique _rid to identify
      worker.postMessage({type:'wait-done', _rid: msg._rid});
    }, ms);
  }
}

// Run button: generate code and send to worker
document.getElementById('runBtn').addEventListener('click', () => {
  // Prepare wrapper code with array for when scripts
  const userCode = Blockly.JavaScript.workspaceToCode(workspace);
  const wrapped = `\nvar __WHEN_SCRIPTS__ = [];\n${userCode}\n(async function(){ for (const s of __WHEN_SCRIPTS__) { try { await s(); } catch(e){ postMessage({type:'log', text:'Error: '+e.message}); } } })();\n`;
  createWorker();
  worker.postMessage({type:'run', code: wrapped});
  log('Program started');
});

document.getElementById('stopBtn').addEventListener('click', () => {
  stopWorker();
  createWorker();
  log('Program stopped');
});

// Save / Load
document.getElementById('saveBtn').addEventListener('click', () => {
  const xmlDom = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  downloadText('project.xml', xmlText);
});

const fileLoader = document.getElementById('fileLoader');
fileLoader.addEventListener('change', (ev) => {
  const f = ev.target.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const xml = Blockly.Xml.textToDom(reader.result);
      Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
      log('Project loaded');
    } catch(e) { log('Load error: '+e); }
  };
  reader.readAsText(f);
});

document.getElementById('loadBtn').addEventListener('click', () => fileLoader.click());

// Resize workspace to fit container
function onResize() {
  const element = blocklyDiv;
  const x = 0, y = 0;
  element.style.width = '100%';
  element.style.height = '600px';
  Blockly.svgResize(workspace);
}
window.addEventListener('resize', onResize);
onResize();
