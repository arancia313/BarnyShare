if (confirm('Still continue?') === true) {
    console.log('string');
    // Verifica se Scratch è definito
    if (typeof Scratch !== 'undefined') {
        (function(Scratch) {
            console.log('another string');
            if (!Scratch.logic.activate) {
                console.log('This extension needs to be unsandboxed to run!');
            }
        })(Scratch);
    } else {
        console.log('Scratch is not defined');
    }
    
    // Mostra un messaggio di alert significativo
    alert('Operation completed');
    return;
}