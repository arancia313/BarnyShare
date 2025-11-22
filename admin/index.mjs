(function(BarnyWarp) {
  'use strict';
  // Creates the Commands if you're an Admin.
  function getRandomAdmin() {
    const admins = ["1", "2"];
    return admins[Math.floor(Math.random() * admins.length)];
  }

  const Admin = getRandomAdmin();
  console.log("Verifying if you're an Admin or not.");
  if (Admin === "2") {
    // Load expected passcode and optional commands from server-side JSON
    fetch("./admin/commands.json")
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load commands.json');
        return res.json();
      })
      .then((data) => {
        const expectedPasscode = data && typeof data.passcode === 'string' ? data.passcode : null;
        const fetchedCommands = Array.isArray(data && data.commands) ? data.commands : null;
        const entered = prompt("Admin passcode?");
        if (!expectedPasscode) {
          console.error('No passcode configured on server.');
          return;
        }
        if (entered === expectedPasscode) {
          console.log("Creating commands...");
          const Commands = fetchedCommands || [
            ";guestBuster", ";shutdown",
            ";showGlobal", ";guest",
            ";unshowGlobal", ";strangerMode",
            ";barny_Start", ";unstrangerMode",
            ";recoverUsername",
          ];
          alert("You have access to BarnyWarp's Commands.");
          console.log(Commands);
          if (typeof BarnyWarp === "object" && BarnyWarp !== null) {
            BarnyWarp.commands = Commands;
          }
        } else {
          alert("WHOOPS! You've got the passcode wrong...");
        }
      })
      .catch((err) => {
        console.error('Error loading commands:', err);
      });
  } else {
    console.log("Unable to make commands: You're not an Admin.");
  }
})(typeof window !== 'undefined' ? window.BarnyWarp : (typeof globalThis !== 'undefined' ? globalThis.BarnyWarp : undefined)); /*
      This will run as soon as you're on BarnyWarp's Homepage.
      It will basically decide if you're an Admin or not.
      If the Admin thing returns 1, then you're not an Admin.
      But if it returns 2, then YOU have to type a secret
      Admin passcode. If you get it wrong, i'm sorry, but
      you will not be an Admin. The passcode is complex,
      you know.
*/