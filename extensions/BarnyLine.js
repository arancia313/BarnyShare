/*
   Copy and paste the code to add it to your project.
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
                "id": "barnyline",
                "name": "BarnyLine",
                "color1": "#ff8800",
                "blocks": [{
                    "opcode": "block_cc00692d450b37b6",
                    "text": "[6b912d33eb71f300]",
                    "blockType": "reporter",
                    "arguments": {
                        "6b912d33eb71f300": {
                            "type": "string",
                            "defaultValue": "foo"
                        }
                    }
                }, {
                    "opcode": "block_eb37620732c3661e",
                    "text": "Logs",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_aae1939dca0de894",
                    "text": "Is BarnyWarp cool?",
                    "blockType": "Boolean",
                    "arguments": {}
                }, {
                    "opcode": "block_ba1d92e389b3119b",
                    "text": "Sprite logs",
                    "blockType": "reporter",
                    "arguments": {}
                }]
            }
        }
        async block_cc00692d450b37b6(args) { // Logs everythiing the sprite said.
            ExtForge.Variables.set("Sprite logs", args["6b912d33eb71f300"])
            return (args["6b912d33eb71f300"])
        }
        async block_eb37620732c3661e(args) {
            return (ExtForge.Variables.get("Logs"))
        }
        async block_aae1939dca0de894(args) {
            return (("true"))
        }
        async block_ba1d92e389b3119b(args) {
            return (ExtForge.Variables.get("Sprite logs"))
        }
    }

    let extension = new Extension();
    // code compiled from extforge
    // The sprite would say and log Everything the sprite itself says.
    (async () => {
        console.log(("BarnyLine is ready to use."));
        ExtForge.Variables.set("Logs", Scratch.Cast.toString(("null")))
        ExtForge.Variables.set("Sprite logs", Scratch.Cast.toString(("null")))
    })();

    Scratch.extensions.register(extension);
})(Scratch);