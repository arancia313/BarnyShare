(function(BarnyWarp) {
             // Creates the Commands if you're an Admin.
                function getRandomAdmin() {
                  const admins = ["1", "2"];
                  return admins[Math.floor(Math.random() * admins.length)];
                }
                
        const Admin = getRandomAdmin();
            console.log("Verifying if you're an Admin or not.");
                          if (Admin === "2") {
                             console.log("Creating commands...");
            const Commands = [
            ";guestBuster", ";shutdown",
            ";showGlobal", ";guest",
            ";unshowGlobal", ";strangerMode"
            
        ];
        alert("You have access to BarnyWarp's Commands.");
        fetch("./admin/commands.json") // "fetch"? That's good. But... 
        // is it good if it's a literal string? //
        if (typeof BarnyWarp === 'object' && BarnyWarp !== null) {
            BarnyWarp.commands = Commands;
        }
    } else {
        console.log("Unable to make commands: You're not an Admin.");
    }
})(typeof BarnyWarp !== 'undefined' ? BarnyWarp : {});
// This will run as soon as you're on BarnyWarp's Homepage.