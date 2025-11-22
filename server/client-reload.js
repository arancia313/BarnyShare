// Auto-reload client script
(function() {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const ws = new WebSocket(protocol + '//' + window.location.host);
  
  ws.onmessage = (event) => {
    if (event.data === 'reload') {
      console.log('File modificato, ricarico...');
      window.location.reload();
    }
  };
  
  ws.onerror = () => {
    console.log('Connessione WebSocket persa, riprovo...');
    setTimeout(() => window.location.reload(), 2000);
  };
})();
