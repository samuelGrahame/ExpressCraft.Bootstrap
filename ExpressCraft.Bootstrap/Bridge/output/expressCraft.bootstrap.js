/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("ExpressCraft.Bootstrap", function ($asm, globals) {
    "use strict";

    Bridge.define("ExpressCraft.Bootstrap.BootstrapDiv", {
        inherits: [ExpressCraft.Control],
        $ctor1: function (typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('div'), typos);

        },
        ctor: function (element, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Control.ctor.call(this, element);
            if (typos != null) {
                var length = typos.length;
                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (Bridge.is(typos[i], String)) {
                        this.content.appendChild(document.createTextNode(typos[i]));
                    } else {
                        if (Bridge.is(typos[i], ExpressCraft.Control)) {
                            ExpressCraft.Helper.appendChild(this, typos[i]);
                        } else {
                            if (Bridge.is(typos[i], HTMLElement)) {
                                this.content.appendChild(typos[i]);
                            }
                        }
                    }
                }
            }
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
        ctor: function () {
            this.$initialize();
            ExpressCraft.Form.ctor.call(this, "");
            this.getBody().className = System.String.concat("container ", this.getBody().className);
            ExpressCraft.Helper.setBounds$1(this.getBody(), 0, 29, "100%", "calc(100% - 29px)");
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

    Bridge.define("ExpressCraft.Bootstrap.FormGroup", {
        inherits: [ExpressCraft.Control],
        ctor: function () {
            this.$initialize();
            ExpressCraft.Control.$ctor5.call(this, "form-group");
            this.getStyle().position = "relative";
            this.getClassList().remove("control");
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Panel", {
        inherits: [ExpressCraft.Control],
        ctor: function (type) {
            if (type === void 0) { type = 1; }

            this.$initialize();
            ExpressCraft.Control.$ctor5.call(this, System.String.concat("panel", ExpressCraft.Bootstrap.Extension.getClassTheme(" panel-", type)), false);
            this.getStyle().position = "relative";
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Program", {
        $main: function () {
            ExpressCraft.Settings.setIncludeFocusRegion(false);
            ExpressCraft.Application.setApplicationDefinition();

            ExpressCraft.Application.run(new ExpressCraft.Bootstrap.BootstrapForm().appendChild$1(ExpressCraft.Helper.appendChildren(new ExpressCraft.Bootstrap.Panel(ExpressCraft.Bootstrap.BootstrapTheme.Default), [new ExpressCraft.Bootstrap.PanelHeading("Welcome to ExpressCraft-Bootstrap"), ExpressCraft.Helper.appendChildren(new ExpressCraft.Bootstrap.PanelBody(), [Bridge.merge(new ExpressCraft.Bootstrap.Button("Hello World", ExpressCraft.Bootstrap.BootstrapTheme.Success), {
                itemClick: $asm.$.ExpressCraft.Bootstrap.Program.f1
            } ), new ExpressCraft.Bootstrap.TextBox("hello World")]), ExpressCraft.Helper.appendChild(new ExpressCraft.Bootstrap.PanelFooter(), new ExpressCraft.Bootstrap.BootstrapDiv.$ctor1([new ExpressCraft.Bootstrap.Typography.Heading("h2", ["Heading"]), new ExpressCraft.Bootstrap.Typography.Code(["Code"]), "Text"]))])));


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

    Bridge.define("ExpressCraft.Bootstrap.BootstrapStyleDiv", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (className, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('div'), typos);
            this.getClassList().add(className);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelHeading", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (heading) {
            if (heading === void 0) { heading = ""; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.$ctor1.call(this, ["panel-heading", heading]);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelBody", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (body) {
            if (body === void 0) { body = ""; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-body", [body]);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelFooter", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (footer) {
            if (footer === void 0) { footer = ""; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-footer", [footer]);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelGroup", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function () {
            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-group");

        }
    });
});
