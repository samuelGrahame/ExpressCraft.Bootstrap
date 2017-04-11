/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("ExpressCraft.Bootstrap", function ($asm, globals) {
    "use strict";

    Bridge.define("ExpressCraft.Bootstrap.BootstrapDiv", {
        inherits: [ExpressCraft.Control],
        statics: {
            appendTypos$1: function (control, typos) {
                if (typos === void 0) { typos = []; }
                ExpressCraft.Bootstrap.BootstrapDiv.appendTypos(control.content, typos);
            },
            appendTypos: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos != null) {
                    var length = typos.length;
                    for (var i = 0; i < length; i = (i + 1) | 0) {
                        if (Bridge.is(typos[i], String)) {
                            control.appendChild(document.createTextNode(typos[i]));
                        } else {
                            if (Bridge.is(typos[i], ExpressCraft.Control)) {
                                control.appendChild(ExpressCraft.Control.op_Implicit(typos[i]));
                            } else {
                                if (Bridge.is(typos[i], HTMLElement)) {
                                    control.appendChild(typos[i]);
                                }
                            }
                        }
                    }
                }
            }
        },
        $ctor1: function (typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('div'), typos);

        },
        ctor: function (element, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Control.ctor.call(this, element);
            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos$1(this, typos);
        },
        getContextualText: function () {
            return this.getContextual("text-");
        },
        setContextualText: function (value) {
            this.setContextual("text-", value);
        },
        getContextualBackground: function () {
            return this.getContextual("bg-");
        },
        setContextualBackground: function (value) {
            this.setContextual("bg-", value);
        },
        getContextual: function (type) {
            var length = this.getClassList().length;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (System.String.startsWith(this.getClassList()[i], type)) {
                    return this.getClassList()[i];
                }
            }
            return "";
        },
        setContextual: function (type, value) {
            var length = this.getClassList().length;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (System.String.startsWith(this.getClassList()[i], type)) {
                    this.getClassList().remove(this.getClassList()[i]);
                    break;
                }
            }
            if (!System.String.isNullOrWhiteSpace(value) && System.String.startsWith(value, "text-")) {
                this.getClassList().add(value);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapForm", {
        inherits: [ExpressCraft.Form],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Form.ctor.call(this, "");
            this.getBody().className = System.String.concat("container ", this.getBody().className);
            ExpressCraft.Helper.setBounds$1(this.getBody(), 0, 29, "100%", "calc(100% - 29px)");

            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos(this.getBody(), typos);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapTheme", {
        $kind: "enum",
        statics: {
            None: 0,
            Default: 1,
            Primary: 2,
            Success: 3,
            Info: 4,
            Warning: 5,
            Danger: 6,
            Link: 7
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Button", {
        inherits: [ExpressCraft.SimpleButton],
        ctor: function (text, type) {
            if (text === void 0) { text = ""; }
            if (type === void 0) { type = 1; }

            this.$initialize();
            ExpressCraft.SimpleButton.ctor.call(this, "button", false);
            this.getStyle().position = "relative";
            this.content.className = (System.String.concat("btn", ExpressCraft.Bootstrap.Extension.getClassTheme(" btn-", type), System.String.replaceAll(this.content.className, "simplebutton", ""))).trim();
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.setText(text);
            }
            this.setSize(new ExpressCraft.Vector2.$ctor1("", ""));
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Contextual");

    Bridge.define("ExpressCraft.Bootstrap.Contextual.Background", {
        statics: {
            Primary: "bg-primary",
            Success: "bg-success",
            Info: "bg-info",
            Warning: "bg-warning",
            Danger: "bg-danger"
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Contextual.Text", {
        statics: {
            Muted: "text-muted",
            Primary: "text-primary",
            Success: "text-success",
            Info: "text-info",
            Warning: "text-warning",
            Danger: "text-danger"
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Extension", {
        statics: {
            getClassTheme: function (cls, type) {
                if (type === ExpressCraft.Bootstrap.BootstrapTheme.None) {
                    return "";
                }
                return System.String.concat(cls, System.Enum.format(ExpressCraft.Bootstrap.BootstrapTheme, type, "G").toLowerCase());
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Program", {
        $main: function () {
            ExpressCraft.Settings.setIncludeFocusRegion(false);
            ExpressCraft.Application.setApplicationDefinition();

            ExpressCraft.Application.run(new ExpressCraft.Bootstrap.BootstrapForm([new ExpressCraft.Bootstrap.Panel(ExpressCraft.Bootstrap.BootstrapTheme.Default, [new ExpressCraft.Bootstrap.PanelHeading(["Welcome to ExpressCraft-Bootstrap"]), new ExpressCraft.Bootstrap.PanelBody([Bridge.merge(new ExpressCraft.Bootstrap.Button("Hello World", ExpressCraft.Bootstrap.BootstrapTheme.Success), {
                itemClick: $asm.$.ExpressCraft.Bootstrap.Program.f1
            } ), new ExpressCraft.Bootstrap.TextBox("hello World")]), new ExpressCraft.Bootstrap.PanelFooter([new ExpressCraft.Bootstrap.BootstrapDiv.$ctor1([new ExpressCraft.Bootstrap.Heading("h2", ["Heading"]), new ExpressCraft.Bootstrap.Code(["Code"]), "Text"])])])]));
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.Program", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.Program, {
        f1: function (but) {
            Bridge.global.alert("Welcome");
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TextBox", {
        inherits: [ExpressCraft.TextInput],
        ctor: function (text, type) {
            if (text === void 0) { text = ""; }
            if (type === void 0) { type = 19; }

            this.$initialize();
            ExpressCraft.TextInput.ctor.call(this, type, false);
            this.getStyle().position = "relative";
            this.content.className = (System.String.concat("form-control", System.String.replaceAll(this.content.className, "inputcontrol", ""))).trim();
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.setText(text);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Abbr", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("abbr"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Blockquote", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        statics: {
            createBlock: function (paragraph, footer, typos) {
                if (typos === void 0) { typos = []; }
                var a = new (System.Collections.Generic.List$1(Object))();

                a.add(new ExpressCraft.Bootstrap.Paragraph([paragraph]));
                a.add(new ExpressCraft.Bootstrap.Footer([footer]));
                a.addRange(typos);

                return a.toArray();
            }
        },
        ctor: function (paragraph, footer, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("blockquote"), ExpressCraft.Bootstrap.Blockquote.createBlock(paragraph, footer, typos));

        },
        getBlockquoteReverse: function () {
            return this.getClassList().contains("blockquote-reverse");
        },
        setBlockquoteReverse: function (value) {
            if (value === this.getBlockquoteReverse()) {
                return;
            }
            if (value) {
                this.getClassList().add("blockquote-reverse");
            } else {
                this.getClassList().remove("blockquote-reverse");
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapStyleDiv", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (className, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, Bridge.merge(document.createElement('div'), {
                className: className
            } ), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Code", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("code"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.DescriptionDetail", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("dd"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.DescriptionList", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("dl"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.DescriptionTitle", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("dt"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Footer", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("footer"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Heading", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (ht, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement(ht), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Kbd", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("kbd"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Mark", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("mark"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Paragraph", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('p'), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Pre", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("pre"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Small", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("small"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.FormGroup", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "form-group", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Panel", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (type, typos) {
            if (type === void 0) { type = 1; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, System.String.concat("panel", ExpressCraft.Bootstrap.Extension.getClassTheme(" panel-", type)), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelBody", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-body", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelFooter", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-footer", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelGroup", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-group", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelHeading", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-heading", typos);

        }
    });
});
