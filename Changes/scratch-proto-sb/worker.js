// Worker runtime (same as Blockly variant). Handles 'init' and 'run' messages
// Global runtime state so it can be modified before/during run
let __VARS__ = {};
let __LISTS__ = {};
let __RECEIVE_SCRIPTS__ = {};
let __PROCS__ = {};
const __BROADCAST_QUEUE__ = [];
let __BROADCAST_PROCESSING__ = false;

// helpers (available even before run)
function __SET_VAR__(name, value){ __VARS__[name] = value; postMessage({type:'var-update', name: name, value: value}); }
function __DELETE_VAR__(name){ delete __VARS__[name]; postMessage({type:'var-delete', name}); }
function __CHANGE_VAR__(name, delta){ const cur = Number(__VARS__[name] || 0); const nv = cur + Number(delta || 0); __SET_VAR__(name, nv); }
function __GET_VAR__(name){ return __VARS__[name] || 0; }

function __CREATE_LIST__(name){ __LISTS__[name] = __LISTS__[name] || []; postMessage({type:'list-update', name: name, items: __LISTS__[name]}); }
function __DELETE_LIST__(name){ delete __LISTS__[name]; postMessage({type:'list-delete', name}); }
function __LIST_ADD__(name, item){ __LISTS__[name] = __LISTS__[name] || []; __LISTS__[name].push(item); postMessage({type:'list-update', name: name, items: __LISTS__[name]}); }
function __LIST_DELETE__(name, idx){ __LISTS__[name] = __LISTS__[name] || []; const i = Number(idx)-1; if (i>=0 && i<__LISTS__[name].length) __LISTS__[name].splice(i,1); postMessage({type:'list-update', name: name, items: __LISTS__[name]}); }
function __LIST_GET__(name, idx){ __LISTS__[name] = __LISTS__[name] || []; const i = Number(idx)-1; return (i>=0 && i<__LISTS__[name].length)? __LISTS__[name][i] : null; }
function __LIST_LENGTH__(name){ __LISTS__[name] = __LISTS__[name] || []; return __LISTS__[name].length; }

function __BROADCAST__(msg){
  return new Promise((resolve) => {
    __BROADCAST_QUEUE__.push({msg, resolve});
    if (__BROADCAST_PROCESSING__) return;
    __BROADCAST_PROCESSING__ = true;
    (async function processQueue(){
      while(__BROADCAST_QUEUE__.length){
        const item = __BROADCAST_QUEUE__.shift();
        const arr = __RECEIVE_SCRIPTS__[item.msg] || [];
        const promises = arr.map(async f => { try { await f(); } catch(e){ postMessage({type:'log', text:'Error in receive: '+e.message}); } });
        await Promise.all(promises);
        postMessage({type:'log', text:`Broadcast '${item.msg}' processed`});
        item.resolve();
      }
      __BROADCAST_PROCESSING__ = false;
    })();
  });
}

async function __CALL_PROC__(name, args){ const f = __PROCS__[name]; if (!f) { postMessage({type:'log', text:`Procedure '${name}' not found`}); return; } try{ if (!Array.isArray(args)) args = []; await f.apply(null, args); } catch(e){ postMessage({type:'log', text:'Error in proc: '+e.message}); } }

// message handling
self.onmessage = async (ev) => {
  const msg = ev.data;
  if (!msg || !msg.type) return;
  if (msg.type === 'init') {
    // merge provided vars/lists into global state
    const v = msg.vars || {};
    const l = msg.lists || {};
    for (const k of Object.keys(v)) { __VARS__[k] = v[k]; postMessage({type:'var-update', name:k, value:__VARS__[k]}); }
    for (const k of Object.keys(l)) { __LISTS__[k] = Array.isArray(l[k])? l[k].slice() : []; postMessage({type:'list-update', name:k, items: __LISTS__[k]}); }
    postMessage({type:'log', text:'Worker initialized with UI state.'});
    return;
  }

  // live control messages
  if (msg.type === 'set-var') { __SET_VAR__(msg.name, msg.value); return; }
  if (msg.type === 'del-var') { __DELETE_VAR__(msg.name); return; }
  if (msg.type === 'create-list') { __CREATE_LIST__(msg.name); return; }
  if (msg.type === 'delete-list') { __DELETE_LIST__(msg.name); return; }

  if (msg.type === 'run') {
    try {
      const waitResolvers = new Map();
      self.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'wait-done' && e.data._rid) {
          const r = waitResolvers.get(e.data._rid);
          if (r) { r(); waitResolvers.delete(e.data._rid); }
        }
      });
      self.wait = (duration) => new Promise(resolve => {
        const rid = Math.random();
        waitResolvers.set(rid, resolve);
        postMessage({type:'wait', duration: duration, _rid: rid});
      });

      // make sure global vars/lists are announced
      for (const k of Object.keys(__VARS__)) postMessage({type:'var-update', name:k, value:__VARS__[k]});
      for (const k of Object.keys(__LISTS__)) postMessage({type:'list-update', name:k, items:__LISTS__[k]});

      // create function with access to helpers
      const fn = new Function('postMessage','wait','__SET_VAR__','__CHANGE_VAR__','__GET_VAR__','__BROADCAST__','__RECEIVE_SCRIPTS__','__CREATE_LIST__','__LIST_ADD__','__LIST_DELETE__','__LIST_GET__','__LIST_LENGTH__','__PROCS__','__CALL_PROC__', msg.code);
      await fn(postMessage, self.wait, __SET_VAR__, __CHANGE_VAR__, __GET_VAR__, __BROADCAST__, __RECEIVE_SCRIPTS__, __CREATE_LIST__, __LIST_ADD__, __LIST_DELETE__, __LIST_GET__, __LIST_LENGTH__, __PROCS__, __CALL_PROC__);
      postMessage({type:'log', text:'Program finished.'});
    } catch (e) {
      postMessage({type:'log', text: 'Runtime error: '+e.message});
    }
  }
};
