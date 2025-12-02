// Worker runtime (same as Blockly variant). Handles 'init' and 'run' messages
let PRE_VARS = null;
let PRE_LISTS = null;

self.onmessage = async (ev) => {
  const msg = ev.data;
  if (!msg || !msg.type) return;
  if (msg.type === 'init') {
    PRE_VARS = msg.vars || {};
    PRE_LISTS = msg.lists || {};
    // acknowledge
    postMessage({type:'log', text:'Worker initialized with UI state.'});
    return;
  }
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

      // Variables, lists, broadcast and procedure support (broadcast queued and awaited)
      const __VARS__ = {};
      const __RECEIVE_SCRIPTS__ = {};
      // populate from PRE_VARS if provided
      if (PRE_VARS) {
        for (const k of Object.keys(PRE_VARS)) {
          __VARS__[k] = PRE_VARS[k];
          postMessage({type:'var-update', name: k, value: __VARS__[k]});
        }
      }
      function __SET_VAR__(name, value){ __VARS__[name] = value; postMessage({type:'var-update', name: name, value: value}); }
      function __CHANGE_VAR__(name, delta){ const cur = Number(__VARS__[name] || 0); const nv = cur + Number(delta || 0); __SET_VAR__(name, nv); }
      function __GET_VAR__(name){ return __VARS__[name] || 0; }

      // Lists support
      const __LISTS__ = {};
      // populate lists from PRE_LISTS if provided
      if (PRE_LISTS) {
        for (const k of Object.keys(PRE_LISTS)) {
          __LISTS__[k] = Array.isArray(PRE_LISTS[k]) ? PRE_LISTS[k].slice() : [];
          postMessage({type:'list-update', name: k, items: __LISTS__[k]});
        }
      }
      function __CREATE_LIST__(name){ __LISTS__[name] = __LISTS__[name] || []; postMessage({type:'list-update', name: name, items: __LISTS__[name]}); }
      function __LIST_ADD__(name, item){ __LISTS__[name] = __LISTS__[name] || []; __LISTS__[name].push(item); postMessage({type:'list-update', name: name, items: __LISTS__[name]}); }
      function __LIST_DELETE__(name, idx){ __LISTS__[name] = __LISTS__[name] || []; const i = Number(idx)-1; if (i>=0 && i<__LISTS__[name].length) __LISTS__[name].splice(i,1); postMessage({type:'list-update', name: name, items: __LISTS__[name]}); }
      function __LIST_GET__(name, idx){ __LISTS__[name] = __LISTS__[name] || []; const i = Number(idx)-1; return (i>=0 && i<__LISTS__[name].length)? __LISTS__[name][i] : null; }
      function __LIST_LENGTH__(name){ __LISTS__[name] = __LISTS__[name] || []; return __LISTS__[name].length; }

      // Broadcast queue: ensures broadcasts are processed in order and returns a promise
      const __BROADCAST_QUEUE__ = [];
      let __BROADCAST_PROCESSING__ = false;
      function __BROADCAST__(msg){
        return new Promise((resolve) => {
          __BROADCAST_QUEUE__.push({msg, resolve});
          if (__BROADCAST_PROCESSING__) return;
          __BROADCAST_PROCESSING__ = true;
          (async function processQueue(){
            while(__BROADCAST_QUEUE__.length){
              const item = __BROADCAST_QUEUE__.shift();
              const arr = __RECEIVE_SCRIPTS__[item.msg] || [];
              // call handlers and wait for all to complete
              const promises = arr.map(async f => {
                try { await f(); }
                catch(e){ postMessage({type:'log', text:'Error in receive: '+e.message}); }
              });
              await Promise.all(promises);
              postMessage({type:'log', text:`Broadcast '${item.msg}' processed`});
              item.resolve();
            }
            __BROADCAST_PROCESSING__ = false;
          })();
        });
      }

      // Procedures
      const __PROCS__ = {};
      async function __CALL_PROC__(name, args){ const f = __PROCS__[name]; if (!f) { postMessage({type:'log', text:`Procedure '${name}' not found`}); return; } try{ if (!Array.isArray(args)) args = []; await f.apply(null, args); } catch(e){ postMessage({type:'log', text:'Error in proc: '+e.message}); } }

      const fn = new Function('postMessage','wait','__SET_VAR__','__CHANGE_VAR__','__GET_VAR__','__BROADCAST__','__RECEIVE_SCRIPTS__','__CREATE_LIST__','__LIST_ADD__','__LIST_DELETE__','__LIST_GET__','__LIST_LENGTH__','__PROCS__','__CALL_PROC__', msg.code);
      await fn(postMessage, self.wait, __SET_VAR__, __CHANGE_VAR__, __GET_VAR__, __BROADCAST__, __RECEIVE_SCRIPTS__, __CREATE_LIST__, __LIST_ADD__, __LIST_DELETE__, __LIST_GET__, __LIST_LENGTH__, __PROCS__, __CALL_PROC__);
      postMessage({type:'log', text:'Program finished.'});
    } catch (e) {
      postMessage({type:'log', text: 'Runtime error: '+e.message});
    }
  }
};
