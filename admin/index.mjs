    // A script to BarnyWarp's Commands.

             (function(BarnyWarp) {
             // Creates the Commands if you're an Admin.
                const Activated = ["1","2"]
                   const Admin = Activated[Math.floor(Math.random() * Activated.Length)];
                   console.log("Verifying if you're an Admin or not.");
                          if (Admin === 2) {
                             console.log("Creating commands...");
                                  const Commands = [
            ";guestBuster", ";shutdown",
            ";showGlobal", ";guest",
            ";unshowGlobal", ";strangerMode"
            
        ];
        console.log("You have access to BarnyWarp's Commands.")
        if (typeof BarnyWarp === 'object' && BarnyWarp !== null) {
            BarnyWarp.commands = Commands;
        }
    } else {
        console.error("Unable to make commands: You're not an Admin.");
    }
})(typeof BarnyWarp !== 'undefined' ? BarnyWarp : {});