(function(BarnyWarp) {
  'use strict';
  /*
   Improved admin flow:
   - Do NOT store an admin passcode in a publicly fetchable JSON file.
   - Load commands list (public) from commands.json using import.meta.url
   - Request server-side verification of the passcode via a POST to a
     verification endpoint (e.g. ./admin/verify). If verification succeeds
     assign the commands to `BarnyWarp.commands`.
  */
  async function loadCommands() {
    try {
      const url = new URL('commands.json', import.meta.url);
      const res = await fetch(url.href);
      if (!res.ok) throw new Error('Failed to load commands.json');
      const data = await res.json();
      if (Array.isArray(data.commands)) return data.commands;
      return null;
    } catch (err) {
      console.error('Error loading commands.json:', err);
      return null;
    }
  }

  async function verifyPasscode(passcode) {
    try {
      /*
      This endpoint should verify the passcode server-side and must NOT
      return the passcode itself. It should return { authorized: true }
      when the passcode is valid. Implement the server endpoint separately.
      */
      const verifyUrl = new URL('verify', import.meta.url).href;
      const res = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });
      if (!res.ok) {
        console.warn('Passcode verification endpoint returned', res.status);
        return false;
      }
      const json = await res.json();
      return !!json && !!json.authorized;
    } catch (err) {
      // If verification fails (endpoint absent/unreachable), do NOT grant admin.
      console.warn('Verify endpoint not available or failed:', err);
      return false;
    }
  }

  async function init() {
    console.log('Initializing admin module...');
    const fetchedCommands = await loadCommands();
    const defaultCommands = [
      ";guestBuster", ";shutdown",
      ";showGlobal", ";guest",
      ";unshowGlobal", ";strangerMode",
      ";barny_Start", ";unstrangerMode",
      ";recoverUsername",
    ];
    const Commands = fetchedCommands || defaultCommands;
    /*
     Prompt for passcode and verify it server-side. We intentionally do NOT
     rely on any passcode shipped inside commands.json.
    */
    const entered = prompt('Admin passcode?');
    if (entered === null) {
      console.log(
        '%cFATAL ERROR!!! %cAdmin prompt cancelled by user.',
        "color:white",
        "color:red"
      );
      return;
    }

    const authorized = await verifyPasscode(entered);
    if (authorized) {
      alert("You have access to BarnyWarp's Commands.");
      console.log('Creating commands...', Commands);
      if (typeof BarnyWarp === 'object' && BarnyWarp !== null) {
        BarnyWarp.commands = Commands;
      }
    } else {
      alert("WHOOPS! Passcode non valida o verifica server-side non disponibile.");
    }
  }

  // Run only in browser environments.
  if (typeof window !== 'undefined') {
    init();
  } else {
    console.log('Admin module not started: not running in a browser.');
  }

})(typeof window !== 'undefined' ? window.BarnyWarp : (typeof globalThis !== 'undefined' ? globalThis.BarnyWarp : undefined));
