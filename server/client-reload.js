// Auto-reload client script
(function() {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const ws = new WebSocket(protocol + '//' + window.location.host);
  
  ws.onmessage = (event) => {
    if (event.data === 'reload') {
      console.log('File updated, reloading...');
      window.location.reload("https://arancia313.github.io/BarnyShare");
    }
  };
  
  ws.onerror = () => {
    console.log('WebSocket connection lost. Reloading...');
    setTimeout(() => window.location.reload(), 2000);
  };
})();
