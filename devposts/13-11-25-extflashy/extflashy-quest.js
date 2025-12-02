(function(BarnyWarp) {
     $.documentQuerySelector("#talk").onclick(function() {
        // Daily quests.
           if (prompt("What can i do for you?")) {
            alert(
                 "%cNo assets were returned. This error is temporary and should not be reported.",
                 "color:red"
            );
           };        
        });
     }); /*
It's basically a system so that you can talk with
Extflashy, BarnyWarp's AI.
*/