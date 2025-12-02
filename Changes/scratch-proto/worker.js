// Worker runtime: executes generated JS safely-ish and communicates with main thread
self.onmessage = async (ev) => {
  const msg = ev.data;
  if (!msg || !msg.type) return;
  if (msg.type === 'run') {
    try {
      // Expose postMessage as-is (worker -> main)
      // Provide a minimal API: postMessage is global in worker
      // The user code may `await` by posting a 'wait' message and waiting for 'wait-done'

      // small helper: enable awaiting wait responses
      const waitResolvers = new Map();
      self.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'wait-done' && e.data._rid) {
          const r = waitResolvers.get(e.data._rid);
          if (r) { r(); waitResolvers.delete(e.data._rid); }
        }
      });

      // define a global awaitable wait helper used by generated code
      self.wait = (duration) => new Promise(resolve => {
        const rid = Math.random();
        waitResolvers.set(rid, resolve);
        postMessage({type:'wait', duration: duration, _rid: rid});
      });

      // expose a small helper moveSprite for compatibility (optional)
      // but generated code posts directly as `postMessage({type:'move', steps:...})`

      // Run the code
      const fn = new Function('postMessage','wait', msg.code);
      // call with postMessage and wait so user code can call await wait(...)
      await fn(postMessage, self.wait);
      postMessage({type:'log', text:'Program finished.'});
    } catch (e) {
      postMessage({type:'log', text: 'Runtime error: '+e.message});
    }
  }
};
