(function(BarnyWarp) {
             // Creates the Commands if you're an Admin.
                function getRandomAdmin() {
                  const admins = ["1", "2"];
                  return admins[Math.floor(Math.random() * admins.length)];
                }
                
        const Admin = getRandomAdmin();
            console.log("Verifying if you're an Admin or not.");
                          if (Admin === "2") {
        prompt("Admin Passcode?");
    if (prompt("Admin passcode?") === "78237382764864738") {
        console.log("Creating commands...");
        const Commands = [
            ";guestBuster", ";shutdown",
            ";showGlobal", ";guest",
            ";unshowGlobal", ";strangerMode"
            
        ];
        alert("You have access to BarnyWarp's Commands.");
        fetch("./sys/admin/commands.json")
        if (typeof BarnyWarp === 'object' && BarnyWarp !== null) {
            BarnyWarp.commands = Commands;
        }
    } else {
        console.log("WHOOPS! You've got the passcode wrong...")
    };

    } else {
        console.log("Unable to make commands: You're not an Admin.");
    }
});
/*
      This will run as soon as you're on BarnyWarp's Homepage.
      It will basically decide if you're an Admin or not.
      If the Admin thing returns 1, then you're not an Admin.
      But if it returns 2, then YOU have to type a secret
      Admin passcode. If you get it wrong, i'm sorry, but
      you will not be an Admin. The passcode is complex,
      you know.
*/