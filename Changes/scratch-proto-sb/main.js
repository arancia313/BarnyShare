// Minimal prototype using scratch-blocks (API similar to Blockly). This file mirrors the Blockly version
// but uses scratch-blocks custom block names to avoid collisions.

// `scratchBlocks` exposes an API compatible with Blockly in many builds; we try to use global Blockly if present.
const BlocksAPI = window.Blockly || window.scratchBlocks || null;
if (!BlocksAPI) {
  document.body.innerHTML = '<div style="padding:20px">Errore: `scratch-blocks` non caricato. Vedi README in `scratch-proto-sb` per istruzioni.</div>';
  throw new Error('scratch-blocks not loaded');
}

const toolbox = document.getElementById('toolbox');
const blocklyDiv = document.getElementById('blocklyDiv');
const workspace = BlocksAPI.inject(blocklyDiv, {
  toolbox: toolbox,
  grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
  trashcan: true
});

// Define blocks with `_s` suffix to avoid interfering with other workspaces
BlocksAPI.Blocks['when_flag_clicked_s'] = {
  init: function() {
    this.appendDummyInput().appendField("when flag clicked");
    this.setColour(65);
    this.setNextStatement(true);
    this.setTooltip('Start block');
    this.contextMenu = false;
  }
};

BlocksAPI.Blocks['move_steps_s'] = {
  init: function() {
    this.appendValueInput('STEPS').setCheck('Number').appendField('move');
    this.appendDummyInput().appendField('steps');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
  }
};

BlocksAPI.Blocks['controls_wait_s'] = {
  init: function() {
    this.appendValueInput('DURATION').setCheck('Number').appendField('wait');
    this.appendDummyInput().appendField('seconds');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

// --- Variables & Broadcast blocks ---
BlocksAPI.Blocks['when_receive_s'] = {
  init: function() {
    this.appendDummyInput().appendField('when I receive').appendField(new BlocksAPI.FieldTextInput('message1'), 'MSG');
    this.setNextStatement(true);
    this.setColour(65);
  }
};

BlocksAPI.Blocks['broadcast_s'] = {
  init: function() {
    this.appendDummyInput().appendField('broadcast').appendField(new BlocksAPI.FieldTextInput('message1'), 'MSG');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

BlocksAPI.Blocks['set_var_s'] = {
  init: function() {
    this.appendDummyInput().appendField('set').appendField(new BlocksAPI.FieldTextInput('myVar'), 'VAR');
    this.appendValueInput('VALUE').setCheck(null).appendField('to');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
  }
};

BlocksAPI.Blocks['change_var_s'] = {
  init: function() {
    this.appendDummyInput().appendField('change').appendField(new BlocksAPI.FieldTextInput('myVar'), 'VAR').appendField('by');
    this.appendValueInput('DELTA').setCheck('Number');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
  }
};

// --- List blocks ---
BlocksAPI.Blocks['list_length_s'] = {
  init: function() {
    this.appendDummyInput().appendField('length of').appendField(new BlocksAPI.FieldTextInput('myList'), 'LIST');
    this.setOutput(true, 'Number');
    this.setColour(260);
  }
};
BlocksAPI.Blocks['list_add_s'] = {
  init: function() {
    this.appendValueInput('ITEM').appendField('add').appendField(new BlocksAPI.FieldTextInput('myList'), 'LIST').appendField('to');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  }
};
BlocksAPI.Blocks['list_delete_s'] = {
  init: function() {
    this.appendValueInput('INDEX').setCheck('Number').appendField('delete').appendField(new BlocksAPI.FieldTextInput('myList'), 'LIST').appendField('item');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  }
};
BlocksAPI.Blocks['list_get_s'] = {
  init: function() {
    this.appendValueInput('INDEX').setCheck('Number').appendField('item').appendField(new BlocksAPI.FieldTextInput('myList'), 'LIST').appendField('of');
    this.setOutput(true);
    this.setColour(260);
  }
};

// --- Procedure (simple) blocks ---
BlocksAPI.Blocks['proc_def_s'] = {
  init: function() {
    this.appendDummyInput().appendField('define').appendField(new BlocksAPI.FieldTextInput('myProc'), 'NAME').appendField('args').appendField(new BlocksAPI.FieldTextInput('', ''), 'ARGS');
    this.appendStatementInput('STACK');
    this.setColour(120);
    this.setDeletable(true);
    this.setMovable(true);
  }
};
BlocksAPI.Blocks['proc_call_s'] = {
  init: function() {
    this.appendDummyInput().appendField('call').appendField(new BlocksAPI.FieldTextInput('myProc'), 'NAME').appendField('with').appendField(new BlocksAPI.FieldTextInput('', ''), 'ARGS');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
  }
};


// Generators: scratch-blocks usually reuses Blockly generators
const Generator = BlocksAPI.JavaScript;
Generator['when_flag_clicked_s'] = function(block) {
  const statements = Generator.statementToCode(block, '');
  return `__WHEN_SCRIPTS__.push(async function(){\n${statements}\n});\n`;
};
Generator['move_steps_s'] = function(block) {
  const val = Generator.valueToCode(block, 'STEPS', Generator.ORDER_ATOMIC) || '0';
  return `postMessage({type:'move', steps: ${val}});\n`;
};
Generator['controls_wait_s'] = function(block) {
  const dur = Generator.valueToCode(block, 'DURATION', Generator.ORDER_ATOMIC) || '0';
  return `await new Promise(resolve => postMessage({type:'wait', duration:${dur} , _rid: Math.random(), _cb: resolve}));\n`;
};

Generator['when_receive_s'] = function(block) {
  const msg = block.getFieldValue('MSG') || 'message1';
  const statements = Generator.statementToCode(block, '');
  // push a handler into receive scripts mapping
  return `(__RECEIVE_SCRIPTS__['${msg}'] = __RECEIVE_SCRIPTS__['${msg}'] || []).push(async function(){\n${statements}\n});\n`;
};

Generator['broadcast_s'] = function(block) {
  const msg = block.getFieldValue('MSG') || 'message1';
  return `await __BROADCAST__('${msg}');\\n`;
};

Generator['set_var_s'] = function(block) {
  const name = block.getFieldValue('VAR');
  const val = Generator.valueToCode(block, 'VALUE', Generator.ORDER_ATOMIC) || '0';
  return `__SET_VAR__('${name}', ${val});\n`;
};

Generator['change_var_s'] = function(block) {
  const name = block.getFieldValue('VAR');
  const delta = Generator.valueToCode(block, 'DELTA', Generator.ORDER_ATOMIC) || '0';
  return `__CHANGE_VAR__('${name}', ${delta});\n`;
};

// List generators
Generator['list_length_s'] = function(block){
  const name = block.getFieldValue('LIST');
  return [`__LIST_LENGTH__('${name}')`, Generator.ORDER_FUNCTION_CALL];
};
Generator['list_add_s'] = function(block){
  const name = block.getFieldValue('LIST');
  const item = Generator.valueToCode(block, 'ITEM', Generator.ORDER_ATOMIC) || "''";
  return `__LIST_ADD__('${name}', ${item});\\n`;
};
Generator['list_delete_s'] = function(block){
  const name = block.getFieldValue('LIST');
  const idx = Generator.valueToCode(block, 'INDEX', Generator.ORDER_ATOMIC) || '1';
  return `__LIST_DELETE__('${name}', ${idx});\\n`;
};
Generator['list_get_s'] = function(block){
  const name = block.getFieldValue('LIST');
  const idx = Generator.valueToCode(block, 'INDEX', Generator.ORDER_ATOMIC) || '1';
  return [`__LIST_GET__('${name}', ${idx})`, Generator.ORDER_FUNCTION_CALL];
};

// Procedure generators
Generator['proc_def_s'] = function(block){
  const name = block.getFieldValue('NAME') || 'myProc';
  const argsRaw = block.getFieldValue('ARGS') || '';
  // argsRaw expected like "a,b,c" -> use directly as parameter list
  const params = argsRaw.split(',').map(s=>s.trim()).filter(Boolean).join(',');
  const body = Generator.statementToCode(block, 'STACK');
  return `__PROCS__['${name}'] = async function(${params}){\n${body}\n};\n`;
};
Generator['proc_call_s'] = function(block){
  const name = block.getFieldValue('NAME') || 'myProc';
  const argsRaw = block.getFieldValue('ARGS') || '';
  // argsRaw should be a comma-separated list of JS expressions; wrap into array
  const argsArrayCode = argsRaw.trim() ? `[${argsRaw}]` : '[]';
  return `await __CALL_PROC__('${name}', ${argsArrayCode});\\n`;
};



// Worker management (reuse approach from Blockly example)
let worker = null;
function createWorker() {
  if (worker) worker.terminate();
  worker = new Worker('worker.js');
  worker.onmessage = (ev) => handleWorkerMessage(ev.data);
}
createWorker();
function stopWorker() { if (worker) { worker.terminate(); worker = null; } }

// Stage
const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');
const sprite = { x: 60, y: 60, color: '#FF8C42' };
function drawStage() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#fff'; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.beginPath(); ctx.fillStyle = sprite.color; ctx.arc(sprite.x, sprite.y, 20, 0, Math.PI*2); ctx.fill();
}

drawStage();

const logEl = document.getElementById('log');
function log(msg) { const p = document.createElement('div'); p.textContent = msg; logEl.appendChild(p); logEl.scrollTop = logEl.scrollHeight; }

function handleWorkerMessage(msg) {
  if (!msg || !msg.type) return;
  if (msg.type === 'move') { sprite.x += Number(msg.steps || 0); drawStage(); }
  else if (msg.type === 'log') { log(msg.text); }
  else if (msg.type === 'wait') {
    const ms = (Number(msg.duration) || 0) * 1000;
    setTimeout(() => { worker.postMessage({type:'wait-done', _rid: msg._rid}); }, ms);
  }
  else if (msg.type === 'var-update') {
    // update variables panel
    updateVar(msg.name, msg.value);
  }
  else if (msg.type === 'list-update') {
    updateList(msg.name, msg.items || []);
  }
  else if (msg.type === 'var-delete') {
    if (msg.name) { delete vars[msg.name]; renderVars(); }
  }
  else if (msg.type === 'list-delete') {
    if (msg.name) { delete lists[msg.name]; renderLists(); }
  }
}

// Run/Save/Load
document.getElementById('runBtn').addEventListener('click', () => {
  const userCode = Generator.workspaceToCode(workspace);
  const wrapped = `\nvar __WHEN_SCRIPTS__ = [];\n${userCode}\n(async function(){ for (const s of __WHEN_SCRIPTS__) { try { await s(); } catch(e){ postMessage({type:'log', text:'Error: '+e.message}); } } })();\n`;
  createWorker();
  // send initial UI state (variables, lists) to worker so runtime is pre-populated
  try { worker.postMessage({ type: 'init', vars: vars, lists: lists }); } catch(e) { console.warn('init send failed', e); }
  worker.postMessage({type:'run', code: wrapped});
  log('Program started');
});

document.getElementById('stopBtn').addEventListener('click', () => { stopWorker(); createWorker(); log('Program stopped'); });

document.getElementById('saveBtn').addEventListener('click', () => {
  const xmlDom = BlocksAPI.Xml.workspaceToDom(workspace);
  const xmlText = BlocksAPI.Xml.domToPrettyText(xmlDom);
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([xmlText], {type:'text/xml'})); a.download = 'project.xml'; a.click();
});

const fileLoader = document.getElementById('fileLoader');
fileLoader.addEventListener('change', (ev) => {
  const f = ev.target.files[0]; if (!f) return; const reader = new FileReader();
  reader.onload = () => { try { const xml = BlocksAPI.Xml.textToDom(reader.result); BlocksAPI.Xml.clearWorkspaceAndLoadFromXml(xml, workspace); log('Project loaded'); } catch(e) { log('Load error: '+e); } };
  reader.readAsText(f);
});

document.getElementById('loadBtn').addEventListener('click', () => fileLoader.click());

function onResize() { blocklyDiv.style.width = '100%'; blocklyDiv.style.height = '600px'; BlocksAPI.svgResize(workspace); }
window.addEventListener('resize', onResize); onResize();

// Variables UI handling
const vars = {};
const varsList = document.getElementById('varsList');
function renderVars() {
  const keys = Object.keys(vars);
  if (!keys.length) { varsList.innerHTML = '<small>(none)</small>'; return; }
  varsList.innerHTML = keys.map(k => `
    <div class="var-row" data-var="${k}">
      <div>
        <span class="var-name">${k}</span>
        <span class="var-val">${String(vars[k])}</span>
      </div>
      <div class="var-actions"><button class="del-var" data-var="${k}" title="Delete">✕</button></div>
    </div>
  `).join('');
  // attach delete handlers
  Array.from(varsList.querySelectorAll('.del-var')).forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.currentTarget.dataset.var;
      deleteVar(name);
    });
  });
}
function updateVar(name, value) { vars[name] = value; renderVars(); }

// Add / delete variable functions from UI
const addVarBtn = document.getElementById('addVarBtn');
const varNameInput = document.getElementById('varNameInput');
addVarBtn.addEventListener('click', () => {
  const name = (varNameInput.value || '').trim();
  if (!name) return;
  if (vars.hasOwnProperty(name)) { log(`Variable '${name}' already exists`); return; }
  vars[name] = 0;
  renderVars();
  varNameInput.value = '';
  // notify worker of new var if running
  try { if (worker) worker.postMessage({type:'set-var', name: name, value: 0}); } catch(e){}
});

// notify worker on delete
function deleteVar(name){ if (!name) return; delete vars[name]; renderVars(); try { if (worker) worker.postMessage({type:'del-var', name}); } catch(e){} }

// Lists UI
const lists = {};
const listsList = document.getElementById('listsList');
const addListBtn = document.getElementById('addListBtn');
const listNameInput = document.getElementById('listNameInput');
addListBtn.addEventListener('click', () => {
  const name = (listNameInput.value || '').trim();
  if (!name) return;
  if (lists.hasOwnProperty(name)) { log(`List '${name}' already exists`); return; }
  lists[name] = [];
  renderLists();
  listNameInput.value = '';
  try { if (worker) worker.postMessage({type:'create-list', name}); } catch(e){}
});

function renderLists(){
  const keys = Object.keys(lists);
  if (!keys.length){ listsList.innerHTML = '<small>(none)</small>'; return; }
  listsList.innerHTML = keys.map(k => `\n    <div class="list-row" data-list="${k}">\n      <div>\n        <div><strong>${k}</strong></div>\n        <div class="list-items">${lists[k].map(it => `<span>${String(it)}</span>`).join(', ')}</div>\n      </div>\n      <div class="list-actions"><button class="del-list" data-list="${k}">Delete</button></div>\n    </div>\n  `).join('');
  Array.from(listsList.querySelectorAll('.del-list')).forEach(btn => btn.addEventListener('click', (e)=>{ const name=e.currentTarget.dataset.list; deleteList(name); }));
}
function updateList(name, items){ lists[name] = items; renderLists(); }
// notify worker on delete
function deleteList(name){ delete lists[name]; renderLists(); try { if (worker) worker.postMessage({type:'delete-list', name}); } catch(e){} }

// Procedures UI
const procs = {};
const procsListEl = document.getElementById('procsList');
function renderProcs(){ const keys = Object.keys(procs); if(!keys.length){ procsListEl.innerHTML='<small>(none)</small>'; return;} procsListEl.innerHTML = keys.map(k=>`<div class="proc-row"><span class="proc-name">${k}</span></div>`).join(''); }


