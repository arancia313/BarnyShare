        (function(BarnyWarp) {
             // Creates the Commands if you're an Admin.
                const Activated = ["1","2"];
                   const Admin = Activated[Math.floor(Math.random() * Activated.length)];
                   console.log("Verifying if you're an Admin or not.");
                          if (Admin === "2") {
                             console.log("Creating commands...");
            const Commands = [
            ";guestBuster", ";shutdown",
            ";showGlobal", ";guest",
            ";unshowGlobal", ";strangerMode"
            
        ];
        alert("You have access to BarnyWarp's Commands.");
        fetch("./admin/commands.json") // "fetch"? That's good.
        if (typeof BarnyWarp === 'object' && BarnyWarp !== null) {
            BarnyWarp.commands = Commands;
        }
    } else {
        console.log("Unable to make commands: You're not an Admin.");
    }
})(typeof BarnyWarp !== 'undefined' ? BarnyWarp : {});
// This will run as soon as you're on BarnyWarp's Homepage.