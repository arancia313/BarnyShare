import * as Blockly from 'blockly';

const toolbox = `<xml>
  <category name="Events">
    <block type="controls_start"></block>
  </category>
  <category name="Motion">
    <block type="move_steps"></block>
  </category>
</xml>`;

const workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  grid: { spacing: 20, length: 3, colour: '#ccc', snap: true }
});

// serialize / deserialize
function saveProject() {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToText(xml);
  downloadText('project.xml', xmlText);
}
function loadProject(xmlText) {
  const xml = Blockly.Xml.textToDom(xmlText);
  Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
}

const code = Blockly.JavaScript.workspaceToCode(workspace);
// inviare a worker o iframe per esecuzione sicura
worker.postMessage({type:'run', code});

Blockly.Blocks['move_steps'] = {
  init: function() {
    this.appendValueInput("STEPS")
        .setCheck("Number")
        .appendField("move");
    this.appendDummyInput().appendField("steps");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
  }
};
Blockly.JavaScript['move_steps'] = function(block) {
  const steps = Blockly.JavaScript.valueToCode(block, 'STEPS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `moveSprite(${steps});\n`;
};

class Scheduler {
  constructor() { this.threads = []; }
  tick(dt) {
    for (const t of this.threads) {
      if (t.state === 'running') t.step(dt);
    }
  }
  spawn(generatorFn) { this.threads.push(new Thread(generatorFn())); }
}