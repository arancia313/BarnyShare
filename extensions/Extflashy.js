/*
   Copy and paste the code to add it to your project.
*/
(async function(Scratch) {
    const variables = {};
    const blocks = [];
    const menus = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    function doSound(ab, cd, runtime) {
        const audioEngine = runtime.audioEngine;

        const fetchAsArrayBufferWithTimeout = (url) =>
            new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                let timeout = setTimeout(() => {
                    xhr.abort();
                    reject(new Error("Timed out"));
                }, 5000);
                xhr.onload = () => {
                    clearTimeout(timeout);
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(new Error(`HTTP error ${xhr.status} while fetching ${url}`));
                    }
                };
                xhr.onerror = () => {
                    clearTimeout(timeout);
                    reject(new Error(`Failed to request ${url}`));
                };
                xhr.responseType = "arraybuffer";
                xhr.open("GET", url);
                xhr.send();
            });

        const soundPlayerCache = new Map();

        const decodeSoundPlayer = async (url) => {
            const cached = soundPlayerCache.get(url);
            if (cached) {
                if (cached.sound) {
                    return cached.sound;
                }
                throw cached.error;
            }

            try {
                const arrayBuffer = await fetchAsArrayBufferWithTimeout(url);
                const soundPlayer = await audioEngine.decodeSoundPlayer({
                    data: {
                        buffer: arrayBuffer,
                    },
                });
                soundPlayerCache.set(url, {
                    sound: soundPlayer,
                    error: null,
                });
                return soundPlayer;
            } catch (e) {
                soundPlayerCache.set(url, {
                    sound: null,
                    error: e,
                });
                throw e;
            }
        };

        const playWithAudioEngine = async (url, target) => {
            const soundBank = target.sprite.soundBank;

            let soundPlayer;
            try {
                const originalSoundPlayer = await decodeSoundPlayer(url);
                soundPlayer = originalSoundPlayer.take();
            } catch (e) {
                console.warn(
                    "Could not fetch audio; falling back to primitive approach",
                    e
                );
                return false;
            }

            soundBank.addSoundPlayer(soundPlayer);
            await soundBank.playSound(target, soundPlayer.id);

            delete soundBank.soundPlayers[soundPlayer.id];
            soundBank.playerTargets.delete(soundPlayer.id);
            soundBank.soundEffects.delete(soundPlayer.id);

            return true;
        };

        const playWithAudioElement = (url, target) =>
            new Promise((resolve, reject) => {
                const mediaElement = new Audio(url);

                mediaElement.volume = target.volume / 100;

                mediaElement.onended = () => {
                    resolve();
                };
                mediaElement
                    .play()
                    .then(() => {
                        // Wait for onended
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });

        const playSound = async (url, target) => {
            try {
                if (!(await Scratch.canFetch(url))) {
                    throw new Error(`Permission to fetch ${url} denied`);
                }

                const success = await playWithAudioEngine(url, target);
                if (!success) {
                    return await playWithAudioElement(url, target);
                }
            } catch (e) {
                console.warn(`All attempts to play ${url} failed`, e);
            }
        };

        playSound(ab, cd)
    }
    class Extension {
        getInfo() {
            return {
                "blockIconURI": "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MC43IiBoZWlnaHQ9IjU3LjEiIHZpZXdCb3g9IjAsMCw2MC43LDU3LjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjQxLjIiIHkxPSIxNTEiIHgyPSIyNDEuMiIgeTI9IjIwNy42IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJhMmEyYSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyNDAuMjgzMzMiIHkxPSIxNjQuMjc5NzgiIHgyPSIyNDAuMjgzMzMiIHkyPSIxODguMzkxMDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMmEyYTJhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAwMDAwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMC44NSwtMTUwLjc1KSI+PGcgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTIxMS4xLDIwNy42di01Ni42aDYwLjJ2NTYuNnoiIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjE4LjIzMzYyLDE2MS4zMzc5M2MwLjE0NDk0LC0xLjA3NzUyIDAuNjgzNjQsLTEuODMxMjEgMS42MTYwOCwtMi4yNjExaDUuOTc4NzhjMi4xMDE2MywxLjMwNjQxIDMuMTc0MTksNC4yNjI2IDUuNDc4NzUsNS4xNzU0MWw3LjYxNjYxLDAuMDMzNWMyLjQ1Njc0LC0wLjcxMTgzIDMuMTc0MTksLTQuMDE5NzQgNS43NTQxMiwtNS4yMDg5MWgxNS4xMTcyN2MxLjA5MTg4LDAuMzQwNTYgMS43NDg5NSwxLjExMTAxIDEuOTcxMTksMi4zMTEzNXYyNi40MDQ2NmMtMC4xOTMyNiwxLjM5MDE2IC0wLjg2NDgxLDIuMjcyMjcgLTIuMDE0NjcsMi42NDYzM2gtMzkuNDY3MjNjLTEuMDc3MzksLTAuMTczMDcgLTEuNzYxMDIsLTAuOTAxNjUgLTIuMDUwOTEsLTIuMTg1NzN6IiBmaWxsPSIjZmY3NjAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIzMC45ODcxLDE5My4wNjk3NGw4LjU0NjU3LDAuMDE1MDRjNC44MTMwMywwLjYyNjg3IDQuNjcyOTYsNy4yNDE2MiAwLDcuODI1ODZsLTguNTQ2NTcsMC4wMTI1NGMtNC4zOTI4MywtMC4zMTg0NSAtNS4wMzc2MiwtNy4xODM5NCAwLC03Ljg1MzQ0eiIgZmlsbD0iI2ZmNzYwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMjIuMzQ5LDE2Ni4wMTgxMWMwLjExOTQyLC0wLjgyODQgMC41NjMyOCwtMS40MDc4MyAxLjMzMTU2LC0xLjczODMzaDQuOTI2MTljMS43MzE2MywxLjAwNDM3IDIuNjE1MzYsMy4yNzcwOCA0LjUxNDE5LDMuOTc4ODVsNi4yNzU2NywwLjAyNTc1YzIuMDI0MjIsLTAuNTQ3MjUgMi42MTUzNiwtMy4wOTAzNyA0Ljc0MTA4LC00LjAwNDZoMTIuNDU1ODFjMC44OTk2NSwwLjI2MTgyIDEuNDQxMDQsMC44NTQxNCAxLjYyNDE1LDEuNzc2OTZ2MjAuMjk5ODZjLTAuMTU5MjQsMS4wNjg3NSAtMC43MTI1NiwxLjc0NjkyIC0xLjY1OTk4LDIuMDM0NDloLTMyLjUxODg2Yy0wLjg4NzcxLC0wLjEzMzA2IC0xLjQ1MDk4LC0wLjY5MzE5IC0xLjY4OTg0LC0xLjY4MDM5eiIgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNDkuMjY5MTQsMTgxLjkyODIzYzAsMCAtMi4zMzc4LDIuMzU1NTYgLTQuNjQ2MjYsMi42NzAwOGMtMy4yNTQyOCwwLjQ0MzM4IC0xMi4xMjY0NywtMC4wMzM3MiAtMTIuMTI2NDcsLTAuMDMzNzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwOWFmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIzNy4zODYzNiwxNzUuNzk1NDVjMCwyLjE3MTQ4IC0wLjgzNDM4LDMuOTMxODIgLTEuODYzNjQsMy45MzE4MmMtMS4wMjkyNiwwIC0xLjg2MzY0LC0xLjc2MDMzIC0xLjg2MzY0LC0zLjkzMTgyYzAsLTIuMTcxNDggMC44MzQzOCwtMy45MzE4MiAxLjg2MzY0LC0zLjkzMTgyYzEuMDI5MjYsMCAxLjg2MzY0LDEuNzYwMzMgMS44NjM2NCwzLjkzMTgyeiIgZmlsbD0iIzAwOWFmZiIgc3Ryb2tlPSIjMDA5YWZmIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNDcuMTU5MDksMTc1Ljg4NjM2YzAsMi4xNzE0OCAtMC44MzQzOCwzLjkzMTgyIC0xLjg2MzY0LDMuOTMxODJjLTEuMDI5MjYsMCAtMS44NjM2NCwtMS43NjAzMyAtMS44NjM2NCwtMy45MzE4MmMwLC0yLjE3MTQ4IDAuODM0MzgsLTMuOTMxODIgMS44NjM2NCwtMy45MzE4MmMxLjAyOTI2LDAgMS44NjM2NCwxLjc2MDM0IDEuODYzNjQsMy45MzE4MnoiIGZpbGw9IiMwMDlhZmYiIHN0cm9rZT0iIzAwOWFmZiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoyOS4xNTAwMDAwMDAwMDAwMDY6MjkuMjUtLT4=",
                "id": "extflashy",
                "name": "ExtFlashy",
                "color1": "#3b3b3b",
                "color2": "#454545",
                "tbShow": true,
                "blocks": blocks,
                "menus": menus
            }
        }
    }
    blocks.push({
        opcode: "transmitting",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "Is Transmitting?",
        arguments: {},
        disableMonitor: true,
        isEdgeActivated: false
    });
    Extension.prototype["transmitting"] = async (args, util) => {
        if (Boolean(('RAR' == 1))) {
            return 'true'

        } else {
            return 'false'

        };
    };

    blocks.push({
        opcode: "activate",
        blockType: Scratch.BlockType.COMMAND,
        text: "Activate Register",
        arguments: {},
        disableMonitor: true,
        isEdgeActivated: false
    });
    Extension.prototype["activate"] = async (args, util) => { // Wild.
        variables['Register'] = 1
        if (Boolean(('Register' == 1))) {
            console.log('ExtFlashy is now Serving.');

        } else {
            return 'No.'

        };
    };

    blocks.push({
        opcode: "log",
        blockType: Scratch.BlockType.COMMAND,
        text: "Log",
        arguments: {
            "log": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'RAR',
            },
        },
        disableMonitor: true,
        isEdgeActivated: false
    });
    Extension.prototype["log"] = async (args, util) => {
        console.log(args["log"]);
    };

    setInterval(async () => {
        console.log('Served.');
    }, (120 * 1000));

    blocks.push({
        opcode: "disable",
        blockType: Scratch.BlockType.COMMAND,
        text: "Disable Register",
        arguments: {},
        disableMonitor: true,
        isEdgeActivated: false
    });
    Extension.prototype["disable"] = async (args, util) => {
        variables['Register'] = 0
        if (Boolean(('Register' == 0))) {
            console.log('ExtFlashy is not Serving anymore.');

        } else {
            return 'No.'

        };
    };

    blocks.push({
        opcode: "set register",
        blockType: Scratch.BlockType.COMMAND,
        text: "Set register to",
        arguments: {},
        disableMonitor: true,
        isEdgeActivated: false
    });
    Extension.prototype["set register"] = async (args, util) => {};

    blocks.push({
        opcode: "current year bro",
        blockType: Scratch.BlockType.REPORTER,
        text: "current year",
        arguments: {},
        disableMonitor: true,
        isEdgeActivated: false
    });
    Extension.prototype["current year bro"] = async (args, util) => {
        return (new Date(Date.now()).getFullYear())
    };

    Scratch.extensions.register(new Extension());
})(Scratch);