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
            },
            getInline: function (control, type) {
                return control.getClassList().contains(System.String.concat(type, "-inline"));
            },
            setInline: function (control, type, value) {
                if (ExpressCraft.Bootstrap.BootstrapDiv.getInline(control, type) !== value) {
                    if (value) {
                        ExpressCraft.Helper.exchangeClass$1(control, type, System.String.concat(type, "-inline"));
                    } else {
                        ExpressCraft.Helper.exchangeClass$1(control, System.String.concat(type, "-inline"), type);
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
        getClassTrue: function (classStr) {
            return this.getClassList().contains(classStr);
        },
        setClassTrue: function (classStr, value) {
            if (value === this.getClassTrue(classStr)) {
                return;
            }
            if (value) {
                this.getClassList().add(classStr);
            } else {
                this.getClassList().remove(classStr);
            }
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
            if (!System.String.isNullOrWhiteSpace(value) && System.String.startsWith(value, type)) {
                this.getClassList().add(value);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.bootstrapForm", {
        $kind: "enum",
        statics: {
            None: 0,
            Inline: 1,
            Horizontal: 2
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapForm", {
        inherits: [ExpressCraft.Control],
        ctor: function (formType, typos) {
            if (formType === void 0) { formType = 0; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Control.ctor.call(this, document.createElement('form'));
            if (formType !== ExpressCraft.Bootstrap.bootstrapForm.None) {
                this.content.className = System.String.concat("form-", System.Enum.format(ExpressCraft.Bootstrap.bootstrapForm, formType, "G").toLowerCase());
            }
            ExpressCraft.Bootstrap.FormGroup.appendGroupList(this, typos);
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

    Bridge.define("ExpressCraft.Bootstrap.BootstrapWindow", {
        inherits: [ExpressCraft.Form],
        statics: {
            hasSetupMetaTags: false,
            setupMetaTags: function () {
                if (ExpressCraft.Bootstrap.BootstrapWindow.hasSetupMetaTags) {
                    return;
                }

                ExpressCraft.Bootstrap.BootstrapWindow.hasSetupMetaTags = true;
                document.head.appendChild(Bridge.merge(document.createElement('meta'), {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                } ));
                //<meta name="viewport" content="width=device-width, initial-scale=1">

            }
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Form.ctor.call(this, "");
            var x = Bridge.cast((new ExpressCraft.Bootstrap.BootstrapStyleDiv("container")).content, HTMLDivElement);

            this.setBackColor(ExpressCraft.Color.op_Implicit$1(ExpressCraft.Color.getWhite().$clone()));
            this.getBody().appendChild(x);
            this.getBodyStyle().overflowY = "auto";

            this.setBody(x);
            this.getBodyStyle().padding = "0";
            this.setCalcSize();

            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos(this.getBody(), typos);
        },
        setCalcSize: function () {
            ExpressCraft.Helper.setSize$1(this.getBody(), "calc(100% - 28px)", this.getBody().style.height);
        },
        calcSizeOnChange: function () {
            var x = this.content.getBoundingClientRect();
            if (x.width - 2 < 1170) {
                this.setCalcSize();
            } else {
                ExpressCraft.Helper.setSize$1(this.getBody(), "", this.getBody().style.height);
            }
        },
        onShowed: function () {
            ExpressCraft.Form.prototype.onShowed.call(this);

            this.calcSizeOnChange();
        },
        onResizing: function () {
            ExpressCraft.Form.prototype.onResizing.call(this);

            this.calcSizeOnChange();
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Button", {
        inherits: [ExpressCraft.Control],
        $ctor1: function (text, type, buttonType) {
            if (text === void 0) { text = ""; }
            if (type === void 0) { type = 1; }
            if (buttonType === void 0) { buttonType = 2; }

            this.$initialize();
            ExpressCraft.Control.ctor.call(this, Bridge.merge(document.createElement('button'), {
                type: buttonType,
                className: System.String.concat("btn", ExpressCraft.Bootstrap.Extension.getClassTheme(" btn-", type))
            } ));
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.content.innerHTML = text;
            }
            this.setSize(new ExpressCraft.Vector2.$ctor1("", ""));
        },
        ctor: function (text, buttonType) {
            if (text === void 0) { text = ""; }
            if (buttonType === void 0) { buttonType = 2; }

            ExpressCraft.Bootstrap.Button.$ctor1.call(this, text, ExpressCraft.Bootstrap.BootstrapTheme.Default, buttonType);

        },
        getOnClick: function () {
            return this.content.onclick;
        },
        setOnClick: function (value) {
            this.content.onclick = value;
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.ColClass", {
        statics: {
            XS1: null,
            XS2: null,
            XS3: null,
            XS4: null,
            XS5: null,
            XS6: null,
            XS7: null,
            XS8: null,
            XS9: null,
            XS10: null,
            XS11: null,
            XS12: null,
            XSO1: null,
            XSO2: null,
            XSO3: null,
            XSO4: null,
            XSO5: null,
            XSO6: null,
            XSO7: null,
            XSO8: null,
            XSO9: null,
            XSO10: null,
            XSO11: null,
            XSO12: null,
            XSPL1: null,
            XSPL2: null,
            XSPL3: null,
            XSPL4: null,
            XSPL5: null,
            XSPL6: null,
            XSPL7: null,
            XSPL8: null,
            XSPL9: null,
            XSPL10: null,
            XSPL11: null,
            XSPL12: null,
            XSPS1: null,
            XSPS2: null,
            XSPS3: null,
            XSPS4: null,
            XSPS5: null,
            XSPS6: null,
            XSPS7: null,
            XSPS8: null,
            XSPS9: null,
            XSPS10: null,
            XSPS11: null,
            XSPS12: null,
            SM1: null,
            SM2: null,
            SM3: null,
            SM4: null,
            SM5: null,
            SM6: null,
            SM7: null,
            SM8: null,
            SM9: null,
            SM10: null,
            SM11: null,
            SM12: null,
            SMO1: null,
            SMO2: null,
            SMO3: null,
            SMO4: null,
            SMO5: null,
            SMO6: null,
            SMO7: null,
            SMO8: null,
            SMO9: null,
            SMO10: null,
            SMO11: null,
            SMO12: null,
            SMPL1: null,
            SMPL2: null,
            SMPL3: null,
            SMPL4: null,
            SMPL5: null,
            SMPL6: null,
            SMPL7: null,
            SMPL8: null,
            SMPL9: null,
            SMPL10: null,
            SMPL11: null,
            SMPL12: null,
            SMPS1: null,
            SMPS2: null,
            SMPS3: null,
            SMPS4: null,
            SMPS5: null,
            SMPS6: null,
            SMPS7: null,
            SMPS8: null,
            SMPS9: null,
            SMPS10: null,
            SMPS11: null,
            SMPS12: null,
            MD1: null,
            MD2: null,
            MD3: null,
            MD4: null,
            MD5: null,
            MD6: null,
            MD7: null,
            MD8: null,
            MD9: null,
            MD10: null,
            MD11: null,
            MD12: null,
            MDO1: null,
            MDO2: null,
            MDO3: null,
            MDO4: null,
            MDO5: null,
            MDO6: null,
            MDO7: null,
            MDO8: null,
            MDO9: null,
            MDO10: null,
            MDO11: null,
            MDO12: null,
            MDPL1: null,
            MDPL2: null,
            MDPL3: null,
            MDPL4: null,
            MDPL5: null,
            MDPL6: null,
            MDPL7: null,
            MDPL8: null,
            MDPL9: null,
            MDPL10: null,
            MDPL11: null,
            MDPL12: null,
            MDPS1: null,
            MDPS2: null,
            MDPS3: null,
            MDPS4: null,
            MDPS5: null,
            MDPS6: null,
            MDPS7: null,
            MDPS8: null,
            MDPS9: null,
            MDPS10: null,
            MDPS11: null,
            MDPS12: null,
            LG1: null,
            LG2: null,
            LG3: null,
            LG4: null,
            LG5: null,
            LG6: null,
            LG7: null,
            LG8: null,
            LG9: null,
            LG10: null,
            LG11: null,
            LG12: null,
            LGO1: null,
            LGO2: null,
            LGO3: null,
            LGO4: null,
            LGO5: null,
            LGO6: null,
            LGO7: null,
            LGO8: null,
            LGO9: null,
            LGO10: null,
            LGO11: null,
            LGO12: null,
            LGPL1: null,
            LGPL2: null,
            LGPL3: null,
            LGPL4: null,
            LGPL5: null,
            LGPL6: null,
            LGPL7: null,
            LGPL8: null,
            LGPL9: null,
            LGPL10: null,
            LGPL11: null,
            LGPL12: null,
            LGPS1: null,
            LGPS2: null,
            LGPS3: null,
            LGPS4: null,
            LGPS5: null,
            LGPS6: null,
            LGPS7: null,
            LGPS8: null,
            LGPS9: null,
            LGPS10: null,
            LGPS11: null,
            LGPS12: null,
            config: {
                init: function () {
                    this.XS1 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 1);
                    this.XS2 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 2);
                    this.XS3 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 3);
                    this.XS4 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 4);
                    this.XS5 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 5);
                    this.XS6 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 6);
                    this.XS7 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 7);
                    this.XS8 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 8);
                    this.XS9 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 9);
                    this.XS10 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 10);
                    this.XS11 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 11);
                    this.XS12 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.XS, 12);
                    this.XSO1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 1, "offset-");
                    this.XSO2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 2, "offset-");
                    this.XSO3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 3, "offset-");
                    this.XSO4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 4, "offset-");
                    this.XSO5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 5, "offset-");
                    this.XSO6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 6, "offset-");
                    this.XSO7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 7, "offset-");
                    this.XSO8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 8, "offset-");
                    this.XSO9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 9, "offset-");
                    this.XSO10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 10, "offset-");
                    this.XSO11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 11, "offset-");
                    this.XSO12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 12, "offset-");
                    this.XSPL1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 1, "pull-");
                    this.XSPL2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 2, "pull-");
                    this.XSPL3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 3, "pull-");
                    this.XSPL4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 4, "pull-");
                    this.XSPL5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 5, "pull-");
                    this.XSPL6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 6, "pull-");
                    this.XSPL7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 7, "pull-");
                    this.XSPL8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 8, "pull-");
                    this.XSPL9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 9, "pull-");
                    this.XSPL10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 10, "pull-");
                    this.XSPL11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 11, "pull-");
                    this.XSPL12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 12, "pull-");
                    this.XSPS1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 1, "push-");
                    this.XSPS2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 2, "push-");
                    this.XSPS3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 3, "push-");
                    this.XSPS4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 4, "push-");
                    this.XSPS5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 5, "push-");
                    this.XSPS6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 6, "push-");
                    this.XSPS7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 7, "push-");
                    this.XSPS8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 8, "push-");
                    this.XSPS9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 9, "push-");
                    this.XSPS10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 10, "push-");
                    this.XSPS11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 11, "push-");
                    this.XSPS12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.XS, 12, "push-");
                    this.SM1 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 1);
                    this.SM2 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 2);
                    this.SM3 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 3);
                    this.SM4 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 4);
                    this.SM5 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 5);
                    this.SM6 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 6);
                    this.SM7 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 7);
                    this.SM8 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 8);
                    this.SM9 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 9);
                    this.SM10 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 10);
                    this.SM11 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 11);
                    this.SM12 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.SM, 12);
                    this.SMO1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 1, "offset-");
                    this.SMO2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 2, "offset-");
                    this.SMO3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 3, "offset-");
                    this.SMO4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 4, "offset-");
                    this.SMO5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 5, "offset-");
                    this.SMO6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 6, "offset-");
                    this.SMO7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 7, "offset-");
                    this.SMO8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 8, "offset-");
                    this.SMO9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 9, "offset-");
                    this.SMO10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 10, "offset-");
                    this.SMO11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 11, "offset-");
                    this.SMO12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 12, "offset-");
                    this.SMPL1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 1, "pull-");
                    this.SMPL2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 2, "pull-");
                    this.SMPL3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 3, "pull-");
                    this.SMPL4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 4, "pull-");
                    this.SMPL5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 5, "pull-");
                    this.SMPL6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 6, "pull-");
                    this.SMPL7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 7, "pull-");
                    this.SMPL8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 8, "pull-");
                    this.SMPL9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 9, "pull-");
                    this.SMPL10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 10, "pull-");
                    this.SMPL11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 11, "pull-");
                    this.SMPL12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 12, "pull-");
                    this.SMPS1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 1, "push-");
                    this.SMPS2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 2, "push-");
                    this.SMPS3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 3, "push-");
                    this.SMPS4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 4, "push-");
                    this.SMPS5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 5, "push-");
                    this.SMPS6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 6, "push-");
                    this.SMPS7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 7, "push-");
                    this.SMPS8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 8, "push-");
                    this.SMPS9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 9, "push-");
                    this.SMPS10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 10, "push-");
                    this.SMPS11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 11, "push-");
                    this.SMPS12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.SM, 12, "push-");
                    this.MD1 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 1);
                    this.MD2 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 2);
                    this.MD3 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 3);
                    this.MD4 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 4);
                    this.MD5 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 5);
                    this.MD6 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 6);
                    this.MD7 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 7);
                    this.MD8 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 8);
                    this.MD9 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 9);
                    this.MD10 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 10);
                    this.MD11 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 11);
                    this.MD12 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.MD, 12);
                    this.MDO1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 1, "offset-");
                    this.MDO2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 2, "offset-");
                    this.MDO3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 3, "offset-");
                    this.MDO4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 4, "offset-");
                    this.MDO5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 5, "offset-");
                    this.MDO6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 6, "offset-");
                    this.MDO7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 7, "offset-");
                    this.MDO8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 8, "offset-");
                    this.MDO9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 9, "offset-");
                    this.MDO10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 10, "offset-");
                    this.MDO11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 11, "offset-");
                    this.MDO12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 12, "offset-");
                    this.MDPL1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 1, "pull-");
                    this.MDPL2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 2, "pull-");
                    this.MDPL3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 3, "pull-");
                    this.MDPL4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 4, "pull-");
                    this.MDPL5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 5, "pull-");
                    this.MDPL6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 6, "pull-");
                    this.MDPL7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 7, "pull-");
                    this.MDPL8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 8, "pull-");
                    this.MDPL9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 9, "pull-");
                    this.MDPL10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 10, "pull-");
                    this.MDPL11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 11, "pull-");
                    this.MDPL12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 12, "pull-");
                    this.MDPS1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 1, "push-");
                    this.MDPS2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 2, "push-");
                    this.MDPS3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 3, "push-");
                    this.MDPS4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 4, "push-");
                    this.MDPS5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 5, "push-");
                    this.MDPS6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 6, "push-");
                    this.MDPS7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 7, "push-");
                    this.MDPS8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 8, "push-");
                    this.MDPS9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 9, "push-");
                    this.MDPS10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 10, "push-");
                    this.MDPS11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 11, "push-");
                    this.MDPS12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.MD, 12, "push-");
                    this.LG1 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 1);
                    this.LG2 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 2);
                    this.LG3 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 3);
                    this.LG4 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 4);
                    this.LG5 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 5);
                    this.LG6 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 6);
                    this.LG7 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 7);
                    this.LG8 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 8);
                    this.LG9 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 9);
                    this.LG10 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 10);
                    this.LG11 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 11);
                    this.LG12 = new ExpressCraft.Bootstrap.ColClass.ctor(ExpressCraft.Bootstrap.ColTier.LG, 12);
                    this.LGO1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 1, "offset-");
                    this.LGO2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 2, "offset-");
                    this.LGO3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 3, "offset-");
                    this.LGO4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 4, "offset-");
                    this.LGO5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 5, "offset-");
                    this.LGO6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 6, "offset-");
                    this.LGO7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 7, "offset-");
                    this.LGO8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 8, "offset-");
                    this.LGO9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 9, "offset-");
                    this.LGO10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 10, "offset-");
                    this.LGO11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 11, "offset-");
                    this.LGO12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 12, "offset-");
                    this.LGPL1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 1, "pull-");
                    this.LGPL2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 2, "pull-");
                    this.LGPL3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 3, "pull-");
                    this.LGPL4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 4, "pull-");
                    this.LGPL5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 5, "pull-");
                    this.LGPL6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 6, "pull-");
                    this.LGPL7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 7, "pull-");
                    this.LGPL8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 8, "pull-");
                    this.LGPL9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 9, "pull-");
                    this.LGPL10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 10, "pull-");
                    this.LGPL11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 11, "pull-");
                    this.LGPL12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 12, "pull-");
                    this.LGPS1 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 1, "push-");
                    this.LGPS2 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 2, "push-");
                    this.LGPS3 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 3, "push-");
                    this.LGPS4 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 4, "push-");
                    this.LGPS5 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 5, "push-");
                    this.LGPS6 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 6, "push-");
                    this.LGPS7 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 7, "push-");
                    this.LGPS8 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 8, "push-");
                    this.LGPS9 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 9, "push-");
                    this.LGPS10 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 10, "push-");
                    this.LGPS11 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 11, "push-");
                    this.LGPS12 = new ExpressCraft.Bootstrap.ColClass.$ctor1(ExpressCraft.Bootstrap.ColTier.LG, 12, "push-");
                }
            }
        },
        value: null,
        $ctor1: function (_tier, _colIndex, bonus) {
            this.$initialize();
            this.value = System.String.concat("col", _tier.value, bonus, _colIndex);
        },
        ctor: function (_tier, _colIndex) {
            ExpressCraft.Bootstrap.ColClass.$ctor1.call(this, _tier, _colIndex, "");
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.ColTier", {
        statics: {
            /**
             * Phones
             *
             * @instance
             */
            XS: null,
            /**
             * Tablets
             *
             * @instance
             */
            SM: null,
            /**
             * Desktops
             *
             * @instance
             */
            MD: null,
            /**
             * Larger Desktops
             *
             * @instance
             */
            LG: null,
            config: {
                init: function () {
                    this.XS = new ExpressCraft.Bootstrap.ColTier("-xs-");
                    this.SM = new ExpressCraft.Bootstrap.ColTier("-sm-");
                    this.MD = new ExpressCraft.Bootstrap.ColTier("-md-");
                    this.LG = new ExpressCraft.Bootstrap.ColTier("-lg-");
                }
            }
        },
        value: null,
        ctor: function (_value) {
            this.$initialize();
            this.value = _value;
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
            ExpressCraft.Settings.allowCloseWithoutQuestion = true;

            ExpressCraft.Application.setApplicationDefinition();

            var buttonClick = $asm.$.ExpressCraft.Bootstrap.Program.f1;

            ExpressCraft.Bootstrap.BootstrapWindow.setupMetaTags();

            ExpressCraft.Application.run(Bridge.merge(new ExpressCraft.Bootstrap.BootstrapWindow([new ExpressCraft.Bootstrap.Panel(ExpressCraft.Bootstrap.BootstrapTheme.Default, [new ExpressCraft.Bootstrap.PanelHeading(["Welcome to ExpressCraft-Bootstrap"]), new ExpressCraft.Bootstrap.PanelBody([new ExpressCraft.Bootstrap.BootstrapSelectionDiv([new ExpressCraft.Bootstrap.FormGroupList([new ExpressCraft.Bootstrap.TextBox.$ctor1("Textbox"), new ExpressCraft.Bootstrap.CheckBox("checkbox", true), new ExpressCraft.Bootstrap.FormGroup([Bridge.merge(new ExpressCraft.Bootstrap.CheckBox("checkbox-inline 1", true), {
                setInline: true
            } ), Bridge.merge(new ExpressCraft.Bootstrap.CheckBox("checkbox-inline 2", true), {
                setInline: true
            } ), Bridge.merge(new ExpressCraft.Bootstrap.CheckBox("checkbox-inline 3", true), {
                setInline: true
            } )]), new ExpressCraft.Bootstrap.TextBox.$ctor1("11/04/2017", "date"), new ExpressCraft.Bootstrap.TextBox.$ctor1("Password", "password"), new ExpressCraft.Bootstrap.TextArea("TextArea", 4), new ExpressCraft.Bootstrap.BootstrapForm(ExpressCraft.Bootstrap.bootstrapForm.Inline, [new ExpressCraft.Bootstrap.Label(["Email:", new ExpressCraft.Bootstrap.TextBox.ctor()]), new ExpressCraft.Bootstrap.Label(["Password:", new ExpressCraft.Bootstrap.TextBox.ctor("password")]), new ExpressCraft.Bootstrap.CheckBox("Remeber me"), new ExpressCraft.Bootstrap.Button.ctor("Submit", "submit")]), new ExpressCraft.Bootstrap.BootstrapForm(ExpressCraft.Bootstrap.bootstrapForm.Horizontal, [new ExpressCraft.Bootstrap.Label(["Email:", new ExpressCraft.Bootstrap.TextBox.ctor()]), new ExpressCraft.Bootstrap.Label(["Password:", new ExpressCraft.Bootstrap.TextBox.ctor("password")]), new ExpressCraft.Bootstrap.CheckBox("Remeber me"), new ExpressCraft.Bootstrap.Button.ctor("Submit", "submit")]), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor1("Basic", ExpressCraft.Bootstrap.BootstrapTheme.None), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor1("Default", ExpressCraft.Bootstrap.BootstrapTheme.Default), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor1("Primary", ExpressCraft.Bootstrap.BootstrapTheme.Primary), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor1("Success", ExpressCraft.Bootstrap.BootstrapTheme.Success), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor1("Info", ExpressCraft.Bootstrap.BootstrapTheme.Info), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor1("Warning", ExpressCraft.Bootstrap.BootstrapTheme.Warning), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor1("Danger", ExpressCraft.Bootstrap.BootstrapTheme.Danger), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor1("Link", ExpressCraft.Bootstrap.BootstrapTheme.Link), {
                setOnClick: buttonClick
            } )]), new ExpressCraft.Bootstrap.Heading("h2", ["Heading", new ExpressCraft.Bootstrap.Small([" - Heading Small"])]), new ExpressCraft.Bootstrap.ParagraphList(["Text", new ExpressCraft.Bootstrap.Abbr("Abbr hover", ["Abbr"]), new ExpressCraft.Bootstrap.Small(["Small"]), new ExpressCraft.Bootstrap.Blockquote("Block Quote Content", "Block Quote From"), Bridge.merge(new ExpressCraft.Bootstrap.Blockquote("Block Quote Content Reverse", "Block Quote From Reverse"), {
                setReverse: true
            } ), new ExpressCraft.Bootstrap.DescriptionList([new ExpressCraft.Bootstrap.DescriptionTitle(["Description Title 1"]), new ExpressCraft.Bootstrap.DescriptionDetail(["- Description Detail 1"]), new ExpressCraft.Bootstrap.DescriptionTitle(["Description Title 2"]), new ExpressCraft.Bootstrap.DescriptionDetail(["- Description Detail 2"])]), new ExpressCraft.Bootstrap.Paragraph(["The following HTML elements: ", new ExpressCraft.Bootstrap.Code(["span"]), ", ", new ExpressCraft.Bootstrap.Code(["section"]), ", and ", new ExpressCraft.Bootstrap.Code(["div"]), " defines a section in a document."]), new ExpressCraft.Bootstrap.Paragraph(["Use ", new ExpressCraft.Bootstrap.Kbd(["ctrl + p"]), " to open the Print dialog box."]), new ExpressCraft.Bootstrap.Pre(["Text in a pre element\r\nis displayed in a fixed-width\r\nfont, and it preserves\r\nboth      spaces and\r\nline breaks."]), new ExpressCraft.Bootstrap.Paragraph([new ExpressCraft.Bootstrap.ParagraphList([new ExpressCraft.Bootstrap.Heading("h2", ["Contextual Colors"]), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text is muted."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Muted
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text is important."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Primary
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text indicates success."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Success
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents some information."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Info
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents a warning."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Warning
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents danger."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Danger
            } )])]), new ExpressCraft.Bootstrap.Paragraph([new ExpressCraft.Bootstrap.ParagraphList([new ExpressCraft.Bootstrap.Heading("h2", ["Contextual Backgrounds"]), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text is important."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Primary
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text indicates success."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Success
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents some information."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Info
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents a warning."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Warning
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents danger."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Danger
            } )])])])])]), new ExpressCraft.Bootstrap.PanelFooter(["Footer"])])]), {
                setWindowstate: ExpressCraft.WindowState.Maximized
            } ));
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.Program", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.Program, {
        f1: function (ev) {
            Bridge.global.alert(ev.currentTarget.innerHTML);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Abbr", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (title, typos) {
            if (title === void 0) { title = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("abbr"), typos);
            if (!System.String.isNullOrWhiteSpace(title)) {
                this.content.title = title;
            }
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
        getReverse: function () {
            return this.getClassTrue("blockquote-reverse");
        },
        setReverse: function (value) {
            this.setClassTrue("blockquote-reverse", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapBaseBox", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        prevText: "",
        onTextChanged: null,
        onKeyDown: null,
        onKeyUp: null,
        onKeyPress: null,
        ctor: function (element) {
            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, element);
            this.content.onchange = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootstrapBaseBox.f1);
            this.content.oncontextmenu = $asm.$.ExpressCraft.Bootstrap.BootstrapBaseBox.f2;
            this.content.onkeypress = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootstrapBaseBox.f3);
            this.content.onkeydown = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootstrapBaseBox.f4);
            this.content.onkeyup = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootstrapBaseBox.f5);
            this.content.addEventListener("paste", Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootstrapBaseBox.f6));
            this.content.addEventListener("cut", Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootstrapBaseBox.f6));
        },
        getText: function () {
            return this.content.innerHTML;
        },
        setText: function (value) {
            this.content.innerHTML = value;

            this.checkTextChanged();
        },
        checkTextChanged: function () {
            if (!Bridge.referenceEquals(this.getText(), this.prevText)) {
                if (!Bridge.staticEquals(this.onTextChanged, null)) {
                    this.onTextChanged(this);
                }
                this.prevText = this.getText();
            }
        },
        render: function () {
            ExpressCraft.Bootstrap.BootstrapDiv.prototype.render.call(this);
            this.prevText = this.getText();
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.BootstrapBaseBox", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.BootstrapBaseBox, {
        f1: function (ev) {
            this.checkTextChanged();
        },
        f2: function (ev) {
            ev.stopPropagation();
        },
        f3: function (ev) {
            this.checkTextChanged();
            if (!Bridge.staticEquals(this.onKeyPress, null)) {
                this.onKeyPress(this, ev);
            }
        },
        f4: function (ev) {
            this.checkTextChanged();
            if (!Bridge.staticEquals(this.onKeyDown, null)) {
                this.onKeyDown(this, ev);
            }
        },
        f5: function (ev) {
            this.checkTextChanged();
            if (!Bridge.staticEquals(this.onKeyUp, null)) {
                this.onKeyUp(this, ev);
            }
        },
        f6: function () {
            this.checkTextChanged();
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapSelectionDiv", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, Bridge.merge(document.createElement('div'), {
                className: "selection"
            } ), typos);

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

    Bridge.define("ExpressCraft.Bootstrap.Col", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        $ctor8: function (colClasses, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.$ctor1.call(this, typos);
            var length;
            if (colClasses != null && ((length = colClasses.length)) > 0) {
                var builder = new System.Text.StringBuilder();

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    builder.append(System.String.concat(colClasses[i].value, " "));
                }
                builder.setLength((builder.getLength() - 1) | 0);
                this.content.className = builder.toString();
            }
        },
        $ctor9: function (colClasses, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, colClasses.toArray(), typos);

        },
        ctor: function (colClass1, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1], ExpressCraft.Bootstrap.ColClass), typos);

        },
        $ctor1: function (colClass1, colClass2, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2], ExpressCraft.Bootstrap.ColClass), typos);

        },
        $ctor2: function (colClass1, colClass2, colClass3, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3], ExpressCraft.Bootstrap.ColClass), typos);

        },
        $ctor3: function (colClass1, colClass2, colClass3, colClass4, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4], ExpressCraft.Bootstrap.ColClass), typos);

        },
        $ctor4: function (colClass1, colClass2, colClass3, colClass4, colClass5, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5], ExpressCraft.Bootstrap.ColClass), typos);

        },
        $ctor5: function (colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5, colClass6], ExpressCraft.Bootstrap.ColClass), typos);

        },
        $ctor6: function (colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7], ExpressCraft.Bootstrap.ColClass), typos);

        },
        $ctor7: function (colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, colClass8, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, colClass8], ExpressCraft.Bootstrap.ColClass), typos);

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

    Bridge.define("ExpressCraft.Bootstrap.FormGroupList", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.$ctor1.call(this);
            ExpressCraft.Bootstrap.FormGroup.appendGroupList(this, typos);
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

    Bridge.define("ExpressCraft.Bootstrap.Label", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("label"), typos);

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

    Bridge.define("ExpressCraft.Bootstrap.ParagraphList", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('div'));
            if (typos == null || typos.length === 0) {
                return;
            }

            var length = typos.length;
            var list = System.Array.init(length, null, Object);

            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (typos[i] == null) {
                    list[i] = new ExpressCraft.Bootstrap.Paragraph();
                    continue;
                }

                if (Bridge.is(typos[i], ExpressCraft.Bootstrap.Paragraph)) {
                    list[i] = typos[i];
                } else {
                    list[i] = new ExpressCraft.Bootstrap.Paragraph([typos[i]]);
                }

            }
            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos$1(this, list);
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

    Bridge.define("ExpressCraft.Bootstrap.Table", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, Bridge.merge(document.createElement('table'), {
                className: "table"
            } ), typos);

        },
        getStriped: function () {
            return this.getClassTrue("table-striped");
        },
        setStriped: function (value) {
            this.setClassTrue("table-striped", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableBody", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("tbody"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableData", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('td'), typos);

        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, Bridge.merge(document.createElement('td'), {
                className: System.Enum.format(ExpressCraft.Bootstrap.BootstrapTheme, theme, "G")
            } ), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableFooter", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("tfoot"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableHeader", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("thead"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableRow", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('tr'), typos);

        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, Bridge.merge(document.createElement('tr'), {
                className: System.Enum.format(ExpressCraft.Bootstrap.BootstrapTheme, theme, "G")
            } ), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.CheckBox", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        checkBox: null,
        ctor: function (label, value) {
            if (value === void 0) { value = false; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "checkbox");
            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos$1(this, [new ExpressCraft.Bootstrap.Label([(this.checkBox = new ExpressCraft.Bootstrap.CheckBoxBase(value)), label])]);
        },
        getInline: function () {
            return ExpressCraft.Bootstrap.BootstrapDiv.getInline(this, "checkbox");
        },
        setInline: function (value) {
            ExpressCraft.Bootstrap.BootstrapDiv.setInline(this, "checkbox", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.CheckBoxBase", {
        inherits: [ExpressCraft.Bootstrap.BootstrapBaseBox],
        ctor: function (value) {
            if (value === void 0) { value = false; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapBaseBox.ctor.call(this, Bridge.merge(document.createElement('input'), {
                type: "checkbox"
            } ));
            this.setChecked(value);
        },
        getChecked: function () {
            return ExpressCraft.Helper.isTrue(System.Boolean.toString(this.content.checked)) === 1;
        },
        setChecked: function (value) {
            this.content.checked = value;
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.ClearFix", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (tier, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, 'clearfix visible' + tier.value + 'block', typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.FormGroup", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        statics: {
            appendGroupList: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos == null || typos.length === 0) {
                    return;
                }

                var length = typos.length;
                var list = System.Array.init(length, null, Object);

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (typos[i] == null) {
                        list[i] = new ExpressCraft.Bootstrap.FormGroup();
                        continue;
                    }

                    if (Bridge.is(typos[i], ExpressCraft.Bootstrap.FormGroup) || Bridge.is(typos[i], ExpressCraft.Bootstrap.bootstrapForm)) {
                        list[i] = typos[i];
                    } else {
                        list[i] = new ExpressCraft.Bootstrap.FormGroup([typos[i]]);
                    }

                }
                ExpressCraft.Bootstrap.BootstrapDiv.appendTypos$1(control, list);
            }
        },
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

    Bridge.define("ExpressCraft.Bootstrap.Row", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "row", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TextArea", {
        inherits: [ExpressCraft.Bootstrap.BootstrapBaseBox],
        ctor: function (text, rows) {
            if (text === void 0) { text = ""; }
            if (rows === void 0) { rows = 1; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapBaseBox.ctor.call(this, Bridge.merge(document.createElement('textarea'), {
                className: "form-control"
            } ));
            this.setText(text);
            this.content.rows = Math.max(rows, 1);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TextBox", {
        inherits: [ExpressCraft.Bootstrap.BootstrapBaseBox],
        $ctor1: function (text, type) {
            if (type === void 0) { type = 19; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapBaseBox.ctor.call(this, Bridge.merge(document.createElement('input'), {
                type: Bridge.Browser.isIE ? "text" : type,
                className: "form-control"
            } ));
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.setText(text);
            }
        },
        ctor: function (type) {
            if (type === void 0) { type = 19; }

            ExpressCraft.Bootstrap.TextBox.$ctor1.call(this, "", type);

        }
    });
});
