/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "barnywarp",
                "name": "BarnyWarp",
                "color1": "#ad3d00",
                "blocks": [{
                    "opcode": "block_f39f31df0ae1ce12",
                    "text": "Set register to [7535bdb2cc809cd6]",
                    "blockType": "command",
                    "arguments": {
                        "7535bdb2cc809cd6": {
                            "type": "string",
                            "defaultValue": "Barny"
                        }
                    }
                }, {
                    "opcode": "block_1ca6ad0c23182f66",
                    "text": "Block",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_3b8f3bac4450ce38",
                    "text": "Start Project",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_bb441a0da4b867f2",
                    "text": "Log [d20c3c23dc4c8906]",
                    "blockType": "command",
                    "arguments": {
                        "d20c3c23dc4c8906": {
                            "type": "string",
                            "defaultValue": "Hi!"
                        }
                    }
                }, {
                    "opcode": "block_fb610aa709787af7",
                    "text": "Connected?",
                    "blockType": "Boolean",
                    "arguments": {}
                }, {
                    "opcode": "block_34bb9f79621aace4",
                    "text": "Set BarnyAddress to [6d2a5fc1567486ba] In [4a44a3ad6e4b408b] Seconds",
                    "blockType": "command",
                    "arguments": {
                        "6d2a5fc1567486ba": {
                            "type": "string"
                        },
                        "4a44a3ad6e4b408b": {
                            "type": "number",
                            "defaultValue": 1
                        }
                    }
                }, {
                    "opcode": "block_a5510713d87be5c9",
                    "text": "Set server to [8609b0d8b709447d]",
                    "blockType": "command",
                    "arguments": {
                        "8609b0d8b709447d": {
                            "type": "number",
                            "defaultValue": 7
                        }
                    }
                }, {
                    "opcode": "block_525545e7375e8969",
                    "text": "disconnect",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_849268517172a781",
                    "text": "BarnyAddress",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_2614b653c7b82078",
                    "text": "Connect to current Server",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_1a7222c175309dac",
                    "text": "Register ",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_bcf872324763e138",
                    "text": "send [0b71528ba4783cb3]",
                    "blockType": "command",
                    "arguments": {
                        "0b71528ba4783cb3": {
                            "type": "string",
                            "defaultValue": "Apple"
                        }
                    }
                }, {
                    "opcode": "block_5e7988f55545d077",
                    "text": "BarnyData",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_982039a9389709b6",
                    "text": "eval [86e8a57856b4a67c]",
                    "blockType": "command",
                    "arguments": {
                        "86e8a57856b4a67c": {
                            "type": "string",
                            "defaultValue": "alert(\"Hello!\")"
                        }
                    }
                }, {
                    "opcode": "block_97ce9c3f336ee859",
                    "text": "Login and Set [c477463015bdc8e0] as username",
                    "blockType": "command",
                    "arguments": {
                        "c477463015bdc8e0": {
                            "type": "string",
                            "defaultValue": "A name"
                        }
                    }
                }, {
                    "opcode": "block_4d4fd894ae1afdc1",
                    "text": "logout",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_3f135157a6db6c0f",
                    "text": "My username",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_eac510067ccacc89",
                    "text": "Username synced?",
                    "blockType": "Boolean",
                    "arguments": {}
                }, {
                    "opcode": "block_76b88483815afe44",
                    "text": "phrase",
                    "blockType": "reporter",
                    "arguments": {}
                }]
            }
        }
        async block_f39f31df0ae1ce12(args) {
            ExtForge.Variables.set("Barny", args["7535bdb2cc809cd6"])
        }
        async block_1ca6ad0c23182f66(args) {
            if (((Scratch.vm.runtime.threads.length > 0) == true)) {
                eval(("alert(\"Check the console NOW\")"))
                console.log(("Block executed from https://arancia313.github.io/BarnyWarp"));
            };
        }
        async block_3b8f3bac4450ce38(args) {
            Scratch.vm.greenFlag();
        }
        async block_bb441a0da4b867f2(args) {
            console.log(args["d20c3c23dc4c8906"]);
        }
        async block_fb610aa709787af7(args) {
            if ((ExtForge.Variables.get("Connected?") ==
                    ("1"))) {
                return (("true"))
            } else if ((ExtForge.Variables.get("Connected?") ==
                    ("0"))) {
                return (("false"))
            };
        }
        async block_34bb9f79621aace4(args) {
            await new Promise(resolve => setTimeout(() => resolve(), args["4a44a3ad6e4b408b"] * 1000));
            ExtForge.Variables.set("BarnyAddress", args["6d2a5fc1567486ba"])
            eval(String.prototype.concat(String("console.warn(\""), String.prototype.concat(ExtForge.Variables.get("BarnyAddress"), String.prototype.concat(String.prototype.concat(String(" | "), String("Note: This extension has just logged here your identified BarnyAddress to you.")), String("\")")))))
        }
        async block_a5510713d87be5c9(args) {
            ExtForge.Variables.set("Server", args["8609b0d8b709447d"])
        }
        async block_525545e7375e8969(args) {
            console.log(("Client going away: disconnected."));
            ExtForge.Variables.set("Connected?", Scratch.Cast.toNumber((0)))
            await extension["block_4d4fd894ae1afdc1"]({})
        }
        async block_849268517172a781(args) {
            return (ExtForge.Variables.get("BarnyAddress"))
        }
        async block_2614b653c7b82078(args) {
            console.log(String.prototype.concat(String("You're connected to server "), String(ExtForge.Variables.get("Server"))));
            ExtForge.Variables.set("Connected?", Scratch.Cast.toNumber((1)))
        }
        async block_1a7222c175309dac(args) {
            return (ExtForge.Variables.get("Barny"))
        }
        async block_bcf872324763e138(args) {
            if (await extension["block_fb610aa709787af7"]({})) {
                ExtForge.Variables.set("BarnyData", args["0b71528ba4783cb3"])
            } else {
                return (("Not connected"))
            };
        }
        async block_5e7988f55545d077(args) {
            if (await extension["block_fb610aa709787af7"]({})) {
                return (ExtForge.Variables.get("BarnyData"))
            } else {
                return (("Not connected"))
            };
        }
        async block_982039a9389709b6(args) {
            eval(args["86e8a57856b4a67c"])
        }
        async block_97ce9c3f336ee859(args) {
            if (await extension["block_fb610aa709787af7"]({})) {
                ExtForge.Variables.set("Logged in?", Scratch.Cast.toNumber((1)))
                ExtForge.Variables.set("Username", args["c477463015bdc8e0"])
            } else {
                return (("Not connected"))
            };
        }
        async block_4d4fd894ae1afdc1(args) {
            if (await extension["block_fb610aa709787af7"]({})) {
                ExtForge.Variables.set("Logged in?", Scratch.Cast.toNumber((0)))
                ExtForge.Variables.set("Username", Scratch.Cast.toString(("null")))
                console.log(("Logged out."));
            } else {
                return (("Not connected"))
            };
        }
        async block_3f135157a6db6c0f(args) {
            if (await extension["block_fb610aa709787af7"]({})) {
                if ((ExtForge.Variables.get("Logged in?") ==
                        ("1"))) {
                    return (ExtForge.Variables.get("Username"))
                } else {
                    return (("Not logged in"))
                };
            } else {
                return (("Not connected"))
            };
        }
        async block_eac510067ccacc89(args) {
            if ((ExtForge.Variables.get("Logged in?") ==
                    ("1"))) {
                return (("true"))
            } else {
                return (("false"))
            };
        }
        async block_76b88483815afe44(args) {
            return (("\"The Kuh's bond and lightness crowded\""))
        }
    }

    let extension = new Extension();
    // code compiled from extforge
    Scratch.vm.on('PROJECT_RUN_START', (async () => {
        console.log(("The project Just responded to my Handshake!"));
        ExtForge.Variables.set("Barny", Scratch.Cast.toNumber((1)))
    }));
    Scratch.vm.on('PROJECT_RUN_STOP', (async () => {
        ExtForge.Variables.set("Barny", Scratch.Cast.toNumber((0)))
    }));
    (async () => {
        ExtForge.Variables.set("Connected?", Scratch.Cast.toNumber((0)))
        ExtForge.Variables.set("Barny", Scratch.Cast.toNumber((0)))
        ExtForge.Variables.set("Server", Scratch.Cast.toNumber((0)))
        ExtForge.Variables.set("Username", Scratch.Cast.toNumber((0)))
        ExtForge.Variables.set("Logged in?", Scratch.Cast.toNumber((0)))
        ExtForge.Variables.set("BarnyData", Scratch.Cast.toNumber((0)))
        console.log(("BarnyWarp is ready to use."));
    })();

    Scratch.extensions.register(extension);
})(Scratch);
