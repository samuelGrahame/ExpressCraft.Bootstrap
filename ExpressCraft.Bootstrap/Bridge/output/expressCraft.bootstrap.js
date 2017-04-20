/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("ExpressCraft.Bootstrap", function ($asm, globals) {
    "use strict";

    Bridge.define("ExpressCraft.Bootstrap.BootWidget", {
        inherits: [ExpressCraft.Control],
        statics: {
            getWidgetById$2: function (id) {
                var widget = document.getElementById(id);
                if (widget == null) {
                    return null;
                }
                return new ExpressCraft.Bootstrap.BootWidget.ctor(widget);
            },
            getWidgetById$3: function (id, windowId) {
                var widget = document.getElementById(System.String.concat(id, "-w", windowId));
                if (widget == null) {
                    return null;
                }
                return new ExpressCraft.Bootstrap.BootWidget.ctor(widget);
            },
            getWidgetById: function (T, id) {
                return ExpressCraft.Bootstrap.BootWidget.castElement(T, document.getElementById(id));
            },
            getWidgetById$1: function (T, id, windowId) {
                return ExpressCraft.Bootstrap.BootWidget.castElement(T, document.getElementById(System.String.concat(id, "-w", windowId)));
            },
            castElement: function (T, widget) {
                if (widget == null) {
                    return Bridge.getDefaultValue(T);
                }
                var x = Bridge.createInstance(T);
                x.content = widget;
                return x;
            },
            appendTypos$1: function (control, typos) {
                if (typos === void 0) { typos = []; }
                ExpressCraft.Bootstrap.BootWidget.appendTypos(control.content, typos);
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
                if (ExpressCraft.Bootstrap.BootWidget.getInline(control, type) !== value) {
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

            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement('div'), typos);

        },
        ctor: function (element, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Control.ctor.call(this, element);
            ExpressCraft.Bootstrap.BootWidget.appendTypos$1(this, typos);
        },
        getId: function () {
            return this.content.id;
        },
        setId: function (value) {
            this.content.id = value;
        },
        getBootWindowHandle: function () {
            return this.getAttributei("bsh");
        },
        setBootWindowHandle: function (value) {
            this.setAttribute("bsh", value);
        },
        /**
         * So that you can have multiple of the same form - instances
         *
         * @instance
         * @public
         * @this ExpressCraft.Bootstrap.BootWidget
         * @memberof ExpressCraft.Bootstrap.BootWidget
         * @function getUnqiueAttributes
         * @return  {string}
         */
        /**
         * So that you can have multiple of the same form - instances
         *
         * @instance
         * @public
         * @this ExpressCraft.Bootstrap.BootWidget
         * @memberof ExpressCraft.Bootstrap.BootWidget
         * @function setUnqiueAttributes
         * @param   {string}    value
         * @return  {void}
         */
        getUnqiueAttributes: function () {
            return this.getAttribute("ua");
        },
        /**
         * So that you can have multiple of the same form - instances
         *
         * @instance
         * @public
         * @this ExpressCraft.Bootstrap.BootWidget
         * @memberof ExpressCraft.Bootstrap.BootWidget
         * @function getUnqiueAttributes
         * @return  {string}
         */
        /**
         * So that you can have multiple of the same form - instances
         *
         * @instance
         * @public
         * @this ExpressCraft.Bootstrap.BootWidget
         * @memberof ExpressCraft.Bootstrap.BootWidget
         * @function setUnqiueAttributes
         * @param   {string}    value
         * @return  {void}
         */
        setUnqiueAttributes: function (value) {
            this.setAttribute("ua", value);
        },
        getActive: function () {
            return this.getClassTrue("active");
        },
        setActive: function (value) {
            this.setClassTrue("active", value);
        },
        getDisabled: function () {
            return this.getClassTrue("disabled");
        },
        setDisabled: function (value) {
            this.setClassTrue("disabled", value);
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
        getNavBarPosition: function () {
            var x = this.getEnumClassValue$1(ExpressCraft.Bootstrap.NavBarPosition);
            if (x == null) {
                return ExpressCraft.Bootstrap.NavBarPosition.None;
            } else {
                return x;
            }
        },
        setNavBarPosition: function (value) {
            if (value === ExpressCraft.Bootstrap.NavBarPosition.None) {
                this.clearEnumClassValue$1(ExpressCraft.Bootstrap.NavBarPosition);
            } else {
                this.setEnumClassValue$1(ExpressCraft.Bootstrap.NavBarPosition, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.NavBarPosition, value, "G").toLowerCase(), "_", "-"));
            }
        },
        getEnumClassValue$1: function (type) {
            return this.getEnumClassValue("", type);
        },
        getEnumClassValue: function (prefix, type) {
            var $t;
            var names = System.Enum.getNames(type);
            for (var i = 0; i < names.length; i = (i + 1) | 0) {
                $t = Bridge.getEnumerator(this.getClassList());
                while ($t.moveNext()) {
                    var item1 = $t.getCurrent();
                    if (Bridge.referenceEquals(item1, System.String.concat(prefix, System.String.replaceAll(names[i].toLowerCase(), "_", "-")))) {
                        return System.Enum.getValues(type)[i];
                    }
                }
            }
            return null;
        },
        clearEnumClassValue$1: function (type) {
            this.clearEnumClassValue("", type);
        },
        clearEnumClassValue: function (prefix, type) {
            var names = System.Enum.getNames(type);
            for (var i = 0; i < names.length; i = (i + 1) | 0) {
                this.getClassList().remove(System.String.concat(prefix, System.String.replaceAll(names[i].toLowerCase(), "_", "-")));
            }
        },
        setEnumClassValue$1: function (type, value) {
            this.setEnumClassValue("", type, value);
        },
        setEnumClassValue: function (prefix, type, value) {
            this.clearEnumClassValue(prefix, type);
            this.getClassList().add(System.String.concat(prefix, value));
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

    Bridge.define("ExpressCraft.Bootstrap.BootFormType", {
        $kind: "enum",
        statics: {
            None: 0,
            Inline: 1,
            Horizontal: 2
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootParagraphAlignment", {
        $kind: "enum",
        statics: {
            Left: 0,
            Center: 1,
            Right: 2,
            Justify: 3,
            Nowrap: 4
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootParagraphTransformation", {
        $kind: "enum",
        statics: {
            Lowercase: 0,
            Uppercase: 1,
            Capitalize: 2
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootRowCellTheme", {
        $kind: "enum",
        statics: {
            Active: 0,
            Success: 1,
            Warning: 2,
            Danger: 3,
            Info: 4
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootSize", {
        $kind: "enum",
        statics: {
            None: 0,
            LG: 1,
            MD: 2,
            SM: 3,
            XS: 4
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootTheme", {
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

    Bridge.define("ExpressCraft.Bootstrap.BootWindow", {
        inherits: [ExpressCraft.Form],
        statics: {
            Min_Width768: ".dl-horizontal.windowHandleId dt.windowHandleId,.table-responsive>.table>tbody>tr>td.windowHandleId,.table-responsive>.table>tbody>tr>th.windowHandleId,.table-responsive>.table>tfoot>tr>td.windowHandleId,.table-responsive>.table>tfoot>tr>th.windowHandleId,.table-responsive>.table>thead>tr>td.windowHandleId,.table-responsive>.table>thead>tr>th.windowHandleId{white-space:nowrap}.col-sm-1.windowHandleId,.col-sm-10.windowHandleId,.col-sm-11.windowHandleId,.col-sm-12.windowHandleId,.col-sm-2.windowHandleId,.col-sm-3.windowHandleId,.col-sm-4.windowHandleId,.col-sm-5.windowHandleId,.col-sm-6.windowHandleId,.col-sm-7.windowHandleId,.col-sm-8.windowHandleId,.col-sm-9.windowHandleId,.navbar-header.windowHandleId,.navbar-nav.windowHandleId,.navbar-nav>li.windowHandleId,.navbar-text.windowHandleId{float:left}.lead.windowHandleId{font-size:21px}.dl-horizontal.windowHandleId dt.windowHandleId{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis}.dl-horizontal.windowHandleId dd.windowHandleId{margin-left:180px}.container.windowHandleId{width:750px}.col-sm-12.windowHandleId{width:100%}.col-sm-11.windowHandleId{width:91.66666667%}.col-sm-10.windowHandleId{width:83.33333333%}.col-sm-9.windowHandleId{width:75%}.col-sm-8.windowHandleId{width:66.66666667%}.col-sm-7.windowHandleId{width:58.33333333%}.col-sm-6.windowHandleId{width:50%}.col-sm-5.windowHandleId{width:41.66666667%}.col-sm-4.windowHandleId{width:33.33333333%}.col-sm-3.windowHandleId{width:25%}.col-sm-2.windowHandleId{width:16.66666667%}.col-sm-1.windowHandleId{width:8.33333333%}.col-sm-pull-12.windowHandleId{right:100%}.col-sm-pull-11.windowHandleId{right:91.66666667%}.col-sm-pull-10.windowHandleId{right:83.33333333%}.col-sm-pull-9.windowHandleId{right:75%}.col-sm-pull-8.windowHandleId{right:66.66666667%}.col-sm-pull-7.windowHandleId{right:58.33333333%}.col-sm-pull-6.windowHandleId{right:50%}.col-sm-pull-5.windowHandleId{right:41.66666667%}.col-sm-pull-4.windowHandleId{right:33.33333333%}.col-sm-pull-3.windowHandleId{right:25%}.col-sm-pull-2.windowHandleId{right:16.66666667%}.col-sm-pull-1.windowHandleId{right:8.33333333%}.col-sm-pull-0.windowHandleId{right:auto}.col-sm-push-12.windowHandleId{left:100%}.col-sm-push-11.windowHandleId{left:91.66666667%}.col-sm-push-10.windowHandleId{left:83.33333333%}.col-sm-push-9.windowHandleId{left:75%}.col-sm-push-8.windowHandleId{left:66.66666667%}.col-sm-push-7.windowHandleId{left:58.33333333%}.col-sm-push-6.windowHandleId{left:50%}.col-sm-push-5.windowHandleId{left:41.66666667%}.col-sm-push-4.windowHandleId{left:33.33333333%}.col-sm-push-3.windowHandleId{left:25%}.col-sm-push-2.windowHandleId{left:16.66666667%}.col-sm-push-1.windowHandleId{left:8.33333333%}.col-sm-push-0.windowHandleId{left:auto}.col-sm-offset-12.windowHandleId{margin-left:100%}.col-sm-offset-11.windowHandleId{margin-left:91.66666667%}.col-sm-offset-10.windowHandleId{margin-left:83.33333333%}.col-sm-offset-9.windowHandleId{margin-left:75%}.col-sm-offset-8.windowHandleId{margin-left:66.66666667%}.col-sm-offset-7.windowHandleId{margin-left:58.33333333%}.col-sm-offset-6.windowHandleId{margin-left:50%}.col-sm-offset-5.windowHandleId{margin-left:41.66666667%}.col-sm-offset-4.windowHandleId{margin-left:33.33333333%}.col-sm-offset-3.windowHandleId{margin-left:25%}.col-sm-offset-2.windowHandleId{margin-left:16.66666667%}.col-sm-offset-1.windowHandleId{margin-left:8.33333333%}.col-sm-offset-0.windowHandleId{margin-left:0}.table-responsive.windowHandleId{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.nav-justified>li.windowHandleId,.nav-tabs.nav-justified>li.windowHandleId{display:table-cell;width:1%}.table-responsive>.table.windowHandleId{margin-bottom:0}.table-responsive>.table-bordered.windowHandleId{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td.windowHandleId,.table-responsive>.table-bordered>tbody>tr:last-child>th.windowHandleId,.table-responsive>.table-bordered>tfoot>tr:last-child>td.windowHandleId,.table-responsive>.table-bordered>tfoot>tr:last-child>th.windowHandleId{border-bottom:0}.form-horizontal.windowHandleId .control-label.windowHandleId{padding-top:7px;margin-bottom:0;text-align:right}.form-horizontal.windowHandleId .form-group-lg.windowHandleId .control-label.windowHandleId{padding-top:11px;font-size:18px}.form-horizontal.windowHandleId .form-group-sm.windowHandleId .control-label.windowHandleId{padding-top:6px;font-size:12px}.navbar-right.windowHandleId .dropdown-menu.windowHandleId{right:0;left:auto}.navbar-right.windowHandleId .dropdown-menu-left.windowHandleId{right:auto;left:0}.nav-tabs.nav-justified>li>a.windowHandleId{margin-bottom:0;border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a.windowHandleId,.nav-tabs.nav-justified>.active>a:focus.windowHandleId,.nav-tabs.nav-justified>.active>a:hover.windowHandleId{border-bottom-color:#fff}.nav-justified>li>a.windowHandleId{margin-bottom:0}.nav-tabs-justified>li>a.windowHandleId{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a.windowHandleId,.nav-tabs-justified>.active>a:focus.windowHandleId,.nav-tabs-justified>.active>a:hover.windowHandleId{border-bottom-color:#fff}.navbar.windowHandleId{border-radius:4px}.navbar-collapse.windowHandleId{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse.windowHandleId{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in.windowHandleId{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse.windowHandleId,.navbar-fixed-top .navbar-collapse.windowHandleId,.navbar-static-top .navbar-collapse.windowHandleId{padding-right:0;padding-left:0}.container-fluid>.navbar-collapse.windowHandleId,.container-fluid>.navbar-header.windowHandleId,.container>.navbar-collapse.windowHandleId,.container>.navbar-header.windowHandleId{margin-right:0;margin-left:0}.navbar-fixed-bottom.windowHandleId,.navbar-fixed-top.windowHandleId,.navbar-static-top.windowHandleId{border-radius:0}.navbar>.container .navbar-brand.windowHandleId,.navbar>.container-fluid .navbar-brand.windowHandleId{margin-left:-15px}.navbar-toggle.windowHandleId{display:none}.navbar-nav.windowHandleId{margin:0}.navbar-nav>li>a.windowHandleId{padding-top:15px;padding-bottom:15px}.navbar-form.windowHandleId .form-group.windowHandleId{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form.windowHandleId .form-control.windowHandleId{display:inline-block;width:auto;vertical-align:middle}.navbar-form.windowHandleId .form-control-static.windowHandleId{display:inline-block}.navbar-form.windowHandleId .input-group.windowHandleId{display:inline-table;vertical-align:middle}.navbar-form.windowHandleId .input-group.windowHandleId .form-control.windowHandleId,.navbar-form.windowHandleId .input-group.windowHandleId .input-group-addon.windowHandleId,.navbar-form.windowHandleId .input-group.windowHandleId .input-group-btn.windowHandleId{width:auto}.navbar-form.windowHandleId .input-group>.form-control.windowHandleId{width:100%}.navbar-form.windowHandleId .control-label.windowHandleId{margin-bottom:0;vertical-align:middle}.navbar-form.windowHandleId .checkbox.windowHandleId,.navbar-form.windowHandleId .radio.windowHandleId{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form.windowHandleId .checkbox.windowHandleId label.windowHandleId,.navbar-form.windowHandleId .radio.windowHandleId label.windowHandleId{padding-left:0}.navbar-form .checkbox input[type=checkbox].windowHandleId,.navbar-form .radio input[type=radio].windowHandleId{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback.windowHandleId{top:0}.navbar-form.windowHandleId{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-text.windowHandleId{margin-right:15px;margin-left:15px}.navbar-left.windowHandleId{float:left!important}.navbar-right.windowHandleId{float:right!important;margin-right:-15px}.navbar-right~.navbar-right.windowHandleId{margin-right:0}.jumbotron.windowHandleId{padding-top:48px;padding-bottom:48px}.container .jumbotron.windowHandleId,.container-fluid .jumbotron.windowHandleId{padding-right:60px;padding-left:60px}.jumbotron .h1.windowHandleId,.jumbotron h1.windowHandleId{font-size:63px}.modal-dialog.windowHandleId{width:600px;margin:30px auto}.modal-content.windowHandleId{-webkit-box-shadow:0 5px 15px rgba(0windowHandleId,0windowHandleId,0windowHandleId,.5);box-shadow:0 5px 15px rgba(0windowHandleId,0windowHandleId,0windowHandleId,.5)}.modal-sm.windowHandleId{width:300px}.carousel-control.windowHandleId .glyphicon-chevron-left.windowHandleId,.carousel-control.windowHandleId .glyphicon-chevron-right.windowHandleId,.carousel-control.windowHandleId .icon-next.windowHandleId,.carousel-control.windowHandleId .icon-prev.windowHandleId{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control.windowHandleId .glyphicon-chevron-left.windowHandleId,.carousel-control.windowHandleId .icon-prev.windowHandleId{margin-left:-10px}.carousel-control.windowHandleId .glyphicon-chevron-right.windowHandleId,.carousel-control.windowHandleId .icon-next.windowHandleId{margin-right:-10px}.carousel-caption.windowHandleId{right:20%;left:20%;padding-bottom:30px}.carousel-indicators.windowHandleId{bottom:20px}",
            Min_Width992: ".container.windowHandleId{width:970px}.col-md-1.windowHandleId,.col-md-10.windowHandleId,.col-md-11.windowHandleId,.col-md-12.windowHandleId,.col-md-2.windowHandleId,.col-md-3.windowHandleId,.col-md-4.windowHandleId,.col-md-5.windowHandleId,.col-md-6.windowHandleId,.col-md-7.windowHandleId,.col-md-8.windowHandleId,.col-md-9.windowHandleId{float:left}.col-md-12.windowHandleId{width:100%}.col-md-11.windowHandleId{width:91.66666667%}.col-md-10.windowHandleId{width:83.33333333%}.col-md-9.windowHandleId{width:75%}.col-md-8.windowHandleId{width:66.66666667%}.col-md-7.windowHandleId{width:58.33333333%}.col-md-6.windowHandleId{width:50%}.col-md-5.windowHandleId{width:41.66666667%}.col-md-4.windowHandleId{width:33.33333333%}.col-md-3.windowHandleId{width:25%}.col-md-2.windowHandleId{width:16.66666667%}.col-md-1.windowHandleId{width:8.33333333%}.col-md-pull-12.windowHandleId{right:100%}.col-md-pull-11.windowHandleId{right:91.66666667%}.col-md-pull-10.windowHandleId{right:83.33333333%}.col-md-pull-9.windowHandleId{right:75%}.col-md-pull-8.windowHandleId{right:66.66666667%}.col-md-pull-7.windowHandleId{right:58.33333333%}.col-md-pull-6.windowHandleId{right:50%}.col-md-pull-5.windowHandleId{right:41.66666667%}.col-md-pull-4.windowHandleId{right:33.33333333%}.col-md-pull-3.windowHandleId{right:25%}.col-md-pull-2.windowHandleId{right:16.66666667%}.col-md-pull-1.windowHandleId{right:8.33333333%}.col-md-pull-0.windowHandleId{right:auto}.col-md-push-12.windowHandleId{left:100%}.col-md-push-11.windowHandleId{left:91.66666667%}.col-md-push-10.windowHandleId{left:83.33333333%}.col-md-push-9.windowHandleId{left:75%}.col-md-push-8.windowHandleId{left:66.66666667%}.col-md-push-7.windowHandleId{left:58.33333333%}.col-md-push-6.windowHandleId{left:50%}.col-md-push-5.windowHandleId{left:41.66666667%}.col-md-push-4.windowHandleId{left:33.33333333%}.col-md-push-3.windowHandleId{left:25%}.col-md-push-2.windowHandleId{left:16.66666667%}.col-md-push-1.windowHandleId{left:8.33333333%}.col-md-push-0.windowHandleId{left:auto}.col-md-offset-12.windowHandleId{margin-left:100%}.col-md-offset-11.windowHandleId{margin-left:91.66666667%}.col-md-offset-10.windowHandleId{margin-left:83.33333333%}.col-md-offset-9.windowHandleId{margin-left:75%}.col-md-offset-8.windowHandleId{margin-left:66.66666667%}.col-md-offset-7.windowHandleId{margin-left:58.33333333%}.col-md-offset-6.windowHandleId{margin-left:50%}.col-md-offset-5.windowHandleId{margin-left:41.66666667%}.col-md-offset-4.windowHandleId{margin-left:33.33333333%}.col-md-offset-3.windowHandleId{margin-left:25%}.col-md-offset-2.windowHandleId{margin-left:16.66666667%}.col-md-offset-1.windowHandleId{margin-left:8.33333333%}.col-md-offset-0.windowHandleId{margin-left:0}.modal-lg.windowHandleId{width:900px}",
            Min_Width1200: ".container.windowHandleId{width:1170px}.col-lg-1.windowHandleId,.col-lg-10.windowHandleId,.col-lg-11.windowHandleId,.col-lg-12.windowHandleId,.col-lg-2.windowHandleId,.col-lg-3.windowHandleId,.col-lg-4.windowHandleId,.col-lg-5.windowHandleId,.col-lg-6.windowHandleId,.col-lg-7.windowHandleId,.col-lg-8.windowHandleId,.col-lg-9.windowHandleId{float:left}.col-lg-12.windowHandleId{width:100%}.col-lg-11.windowHandleId{width:91.66666667%}.col-lg-10.windowHandleId{width:83.33333333%}.col-lg-9.windowHandleId{width:75%}.col-lg-8.windowHandleId{width:66.66666667%}.col-lg-7.windowHandleId{width:58.33333333%}.col-lg-6.windowHandleId{width:50%}.col-lg-5.windowHandleId{width:41.66666667%}.col-lg-4.windowHandleId{width:33.33333333%}.col-lg-3.windowHandleId{width:25%}.col-lg-2.windowHandleId{width:16.66666667%}.col-lg-1.windowHandleId{width:8.33333333%}.col-lg-pull-12.windowHandleId{right:100%}.col-lg-pull-11.windowHandleId{right:91.66666667%}.col-lg-pull-10.windowHandleId{right:83.33333333%}.col-lg-pull-9.windowHandleId{right:75%}.col-lg-pull-8.windowHandleId{right:66.66666667%}.col-lg-pull-7.windowHandleId{right:58.33333333%}.col-lg-pull-6.windowHandleId{right:50%}.col-lg-pull-5.windowHandleId{right:41.66666667%}.col-lg-pull-4.windowHandleId{right:33.33333333%}.col-lg-pull-3.windowHandleId{right:25%}.col-lg-pull-2.windowHandleId{right:16.66666667%}.col-lg-pull-1.windowHandleId{right:8.33333333%}.col-lg-pull-0.windowHandleId{right:auto}.col-lg-push-12.windowHandleId{left:100%}.col-lg-push-11.windowHandleId{left:91.66666667%}.col-lg-push-10.windowHandleId{left:83.33333333%}.col-lg-push-9.windowHandleId{left:75%}.col-lg-push-8.windowHandleId{left:66.66666667%}.col-lg-push-7.windowHandleId{left:58.33333333%}.col-lg-push-6.windowHandleId{left:50%}.col-lg-push-5.windowHandleId{left:41.66666667%}.col-lg-push-4.windowHandleId{left:33.33333333%}.col-lg-push-3.windowHandleId{left:25%}.col-lg-push-2.windowHandleId{left:16.66666667%}.col-lg-push-1.windowHandleId{left:8.33333333%}.col-lg-push-0.windowHandleId{left:auto}.col-lg-offset-12.windowHandleId{margin-left:100%}.col-lg-offset-11.windowHandleId{margin-left:91.66666667%}.col-lg-offset-10.windowHandleId{margin-left:83.33333333%}.col-lg-offset-9.windowHandleId{margin-left:75%}.col-lg-offset-8.windowHandleId{margin-left:66.66666667%}.col-lg-offset-7.windowHandleId{margin-left:58.33333333%}.col-lg-offset-6.windowHandleId{margin-left:50%}.col-lg-offset-5.windowHandleId{margin-left:41.66666667%}.col-lg-offset-4.windowHandleId{margin-left:33.33333333%}.col-lg-offset-3.windowHandleId{margin-left:25%}.col-lg-offset-2.windowHandleId{margin-left:16.66666667%}.col-lg-offset-1.windowHandleId{margin-left:8.33333333%}.col-lg-offset-0.windowHandleId{margin-left:0}.visible-lg.windowHandleId{display:block!important}table.visible-lg.windowHandleId{display:table!important}tr.visible-lg.windowHandleId{display:table-row!important}td.visible-lg,th.visible-lg.windowHandleId{display:table-cell!important}.visible-lg-block.windowHandleId{display:block!important}.visible-lg-inline.windowHandleId{display:inline!important}.visible-lg-inline-block.windowHandleId{display:inline-block!important}.hidden-lg.windowHandleId{display:none!important}",
            Min_Width480AndLandscape: ".navbar-fixed-bottom.windowHandleId .navbar-collapse.windowHandleId,.navbar-fixed-top.windowHandleId .navbar-collapse.windowHandleId{max-height:200px}",
            Max_Width767: ".navbar-nav .open .dropdown-menu.windowHandleId{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a.windowHandleId{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a.windowHandleId{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover.windowHandleId{background-image:none}.navbar-form .form-group.windowHandleId{margin-bottom:5px}.navbar-form .form-group:last-child.windowHandleId{margin-bottom:0}.navbar-default .navbar-nav .open .dropdown-menu>li>a.windowHandleId{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover.windowHandleId{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover.windowHandleId{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover.windowHandleId{color:#ccc;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header.windowHandleId{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider.windowHandleId{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a.windowHandleId{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover.windowHandleId{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover.windowHandleId{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover.windowHandleId{color:#444;background-color:transparent}.visible-xs.windowHandleId{display:block!important}table.visible-xs.windowHandleId{display:table!important}tr.visible-xs.windowHandleId{display:table-row!important}td.visible-xs,th.visible-xs.windowHandleId{display:table-cell!important}.visible-xs-block.windowHandleId{display:block!important}.visible-xs-inline.windowHandleId{display:inline!important}.visible-xs-inline-block.windowHandleId{display:inline-block!important}.hidden-xs.windowHandleId{display:none!important}",
            Min_Width768AndMax_Width991: ".visible-sm.windowHandleId{display:block!important}table.visible-sm.windowHandleId{display:table!important}tr.visible-sm.windowHandleId{display:table-row!important}td.visible-sm,th.visible-sm.windowHandleId{display:table-cell!important}.visible-sm-block.windowHandleId{display:block!important}.visible-sm-inline.windowHandleId{display:inline!important}.visible-sm-inline-block.windowHandleId{display:inline-block!important}.visible-md.windowHandleId{display:block!important}table.visible-md.windowHandleId{display:table!important}tr.visible-md.windowHandleId{display:table-row!important}td.visible-md,th.visible-md.windowHandleId{display:table-cell!important}.visible-md-block.windowHandleId{display:block!important}.visible-md-inline.windowHandleId{display:inline!important}.visible-md-inline-block.windowHandleId{display:inline-block!important}.hidden-md,.hidden-sm.windowHandleId{display:none!important}",
            hasSetupMetaTags: false,
            bootWindowHandles: 0,
            setupMetaTags: function () {
                if (ExpressCraft.Bootstrap.BootWindow.hasSetupMetaTags) {
                    return;
                }

                ExpressCraft.Bootstrap.BootWindow.hasSetupMetaTags = true;
                document.head.appendChild(Bridge.merge(document.createElement('meta'), {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                } ));
            },
            createWindowHandle: function () {
                var $t;
                return (Bridge.identity(ExpressCraft.Bootstrap.BootWindow.bootWindowHandles, ($t = (ExpressCraft.Bootstrap.BootWindow.bootWindowHandles + 1) | 0, ExpressCraft.Bootstrap.BootWindow.bootWindowHandles = $t, $t)));
            },
            hideNavigation: function () {
                var x = new ExpressCraft.Bootstrap.Anchor();
                x.setAttribute("data-toggle", "collapse");
                x.setAttribute("data-target", ".navbar-collapse.in");
                document.body.appendChild(ExpressCraft.Control.op_Implicit(x));
                x.content.click();
                document.body.removeChild(ExpressCraft.Control.op_Implicit(x));
            }
        },
        privateSyle: null,
        previouStates: null,
        prevBody: null,
        assignedBootWindow: "",
        responsiveClass: null,
        backButtonEvent: null,
        config: {
            init: function () {
                this.previouStates = new ExpressCraft.Bootstrap.BootWindow.StyleStates();
            }
        },
        $ctor1: function (handle, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.BootWindow.ctor.call(this, typos);
            this.assignedBootWindow = handle.toString();
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Form.ctor.call(this, "");
            if (Bridge.referenceEquals(this.assignedBootWindow, "")) {
                this.assignedBootWindow = ExpressCraft.Bootstrap.BootWindow.createWindowHandle().toString();
            }

            this.responsiveClass = this.getResponsiveClass();

            this.privateSyle = document.createElement('style');
            this.getBody().appendChild(this.privateSyle);

            var container = (new ExpressCraft.Bootstrap.BootStyleWidget("container")); // fluid

            this.setBackColor(ExpressCraft.Color.op_Implicit$1(ExpressCraft.Color.getWhite().$clone()));
            this.getBody().appendChild(container.content);
            this.getBodyStyle().overflowY = "auto";
            this.prevBody = this.getBody();

            this.setBody(Bridge.cast(container.content, HTMLDivElement));
            this.getBodyStyle().padding = "0";

            this.setCalcSize();

            if (typos != null) {
                var length = typos.length;
                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (Bridge.is(typos[i], String)) {
                        this.getBody().appendChild(document.createTextNode(typos[i]));
                    } else {
                        if (Bridge.is(typos[i], ExpressCraft.Control)) {
                            if (Bridge.is(typos[i], ExpressCraft.Bootstrap.Navbar)) {
                                this.makeChangesForNav(typos[i]);
                            } else {
                                this.getBody().appendChild(ExpressCraft.Control.op_Implicit(typos[i]));
                            }
                        } else if (Bridge.is(typos[i], HTMLElement)) {
                            if (Bridge.referenceEquals(typos[i].tagName.toUpperCase(), "NAV")) {
                                this.makeChangesForNav(ExpressCraft.Bootstrap.BootWidget.castElement(ExpressCraft.Bootstrap.Navbar, typos[i]));
                            } else {
                                this.getBody().appendChild(typos[i]);
                            }
                        }
                    }

                }
            }
        },
        getFluid: function () {
            return this.getClassTrue("container-fluid");
        },
        setFluid: function (value) {
            this.setClassTrue("container", !value);
            this.setClassTrue("container-fluid", value);
        },
        getBootHandle: function () {
            return this.assignedBootWindow;
        },
        getClassTrue: function (classStr) {
            return this.getBody().classList.contains(classStr);
        },
        setClassTrue: function (classStr, value) {
            if (value === this.getClassTrue(classStr)) {
                return;
            }
            if (value) {
                this.getBody().classList.add(classStr);
            } else {
                this.getBody().classList.remove(classStr);
            }
        },
        makeChangesForNav: function (bar) {
            if (bar == null) {
                return;
            }
            switch (bar.getNavbarLocation()) {
                case ExpressCraft.Bootstrap.NavBarLocation.Static_Top: 
                    bar.getStyle().top = "0";
                    bar.getStyle().left = "0";
                    var div = new ExpressCraft.Bootstrap.BootWidget.$ctor1();
                    div.getStyle().position = "absolute";
                    div.getStyle().overflowY = "auto";
                    div.setSize(new ExpressCraft.Vector2.$ctor1("100%", "calc(100% - 50px)"));
                    div.setLocation(new ExpressCraft.Vector2.$ctor1(0, 50));
                    this.prevBody.insertBefore(ExpressCraft.Control.op_Implicit(div), this.getBody());
                    div.content.appendChild(this.getBody());
                    this.prevBody.insertBefore(ExpressCraft.Control.op_Implicit(bar), ExpressCraft.Control.op_Implicit(div));
                    return;
            }
            this.prevBody.insertBefore(ExpressCraft.Control.op_Implicit(bar), this.getBody());
        },
        setCalcSize: function () {
            //	this.Body.SetSize("calc(100% - 28px)", this.Body.Style.Height);
        },
        onGotFocus: function () {
            ExpressCraft.Bootstrap.BootWindow.hideNavigation();
            ExpressCraft.Form.prototype.onGotFocus.call(this);
            this.calcSizeOnChange();
        },
        onShowing: function () {
            ExpressCraft.Form.prototype.onShowing.call(this);

            this.assignHandles();

            if (Bridge.Browser.isPhone || Bridge.Browser.isTablet) {
                this.setWindowstate(ExpressCraft.WindowState.Maximized);
                this.setShowMaximize(false);
                this.setShowMinimize(false);
                this.allowSizeChange = false;
                this.allowMoveChange = false;
                if (Bridge.Browser.isAndroid) {
                    this.backButtonEvent = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootWindow.f1);

                    document.addEventListener("backbutton", this.backButtonEvent);
                }
            }
        },
        /**
         * Multi Form Responsive
         *
         * @instance
         * @public
         * @this ExpressCraft.Bootstrap.BootWindow
         * @memberof ExpressCraft.Bootstrap.BootWindow
         * @return  {ExpressCraft.Bootstrap.BootWindow}
         */
        assignHandles: function () {
            this.assignHandles$1(this.content, this.content.childElementCount);
            return this;
        },
        /**
         * Multi Form Responsive
         *
         * @instance
         * @public
         * @this ExpressCraft.Bootstrap.BootWindow
         * @memberof ExpressCraft.Bootstrap.BootWindow
         * @param   {HTMLElement}    parent         
         * @param   {number}         length         
         * @param   {boolean}        IncludeSelf
         * @return  {void}
         */
        assignHandles$1: function (parent, length, IncludeSelf) {
            if (IncludeSelf === void 0) { IncludeSelf = false; }
            if (IncludeSelf) {
                this.assignWindowHandle(parent);
            }

            for (var i = 0; i < length; i = (i + 1) | 0) {
                var child = parent.children[i];
                var l = child.childElementCount;
                if (l > 0) {
                    this.assignHandles$1(child, l, true);
                } else {
                    this.assignWindowHandle(child);
                }
            }
        },
        assignWindowHandle: function (element) {
            var x = element.getAttribute("bsh");
            if (!Bridge.referenceEquals(x, this.assignedBootWindow)) {
                element.setAttribute("bsh", this.assignedBootWindow);

                if (!element.classList.contains(this.responsiveClass)) {
                    element.classList.add(this.responsiveClass);
                }

                var uq = element.getAttribute("ua");
                if (!System.String.isNullOrWhiteSpace(uq)) {
                    uq = uq.trim();
                    var uqItem = uq.split(",");
                    var length = uqItem.length;
                    for (var i = 0; i < length; i = (i + 1) | 0) {
                        if (!System.String.isNullOrWhiteSpace(uqItem[i])) {
                            element.setAttribute(uqItem[i], System.String.concat(element.getAttribute(uqItem[i]), "-w", this.assignedBootWindow));
                        }
                    }
                }
            }
        },
        calcSizeOnChange: function () {
            var states = new ExpressCraft.Bootstrap.BootWindow.StyleStates();

            var styleBuilder = new System.Text.StringBuilder();
            var clientRect = this.prevBody.getBoundingClientRect();

            if (clientRect.width >= 480 && window.innerWidth > window.innerHeight) {
                styleBuilder.append(ExpressCraft.Bootstrap.BootWindow.Min_Width480AndLandscape);
                states.width480Landscape = true;
            }
            if (clientRect.width <= 767) {
                styleBuilder.append(ExpressCraft.Bootstrap.BootWindow.Max_Width767);
                states.widthLess767 = true;
            }
            if (clientRect.width >= 768 && clientRect.width <= 991) {
                styleBuilder.append(ExpressCraft.Bootstrap.BootWindow.Min_Width768AndMax_Width991);
                states.widthGreater768Less991 = true;
            }
            if (clientRect.width >= 768) {
                styleBuilder.append(ExpressCraft.Bootstrap.BootWindow.Min_Width768);
                states.widthGreater768 = true;
            }
            if (clientRect.width >= 992) {
                styleBuilder.append(ExpressCraft.Bootstrap.BootWindow.Min_Width992);
                states.widthGreater992 = true;
            }
            if (clientRect.width >= 1200) {
                styleBuilder.append(ExpressCraft.Bootstrap.BootWindow.Min_Width1200);
                states.widthGreater1200 = true;
            }

            if (!states.equals(this.previouStates)) {
                this.privateSyle.innerHTML = System.String.replaceAll(styleBuilder.toString(), "windowHandleId", this.responsiveClass);
                this.previouStates = states;

                ExpressCraft.Bootstrap.BootWindow.hideNavigation();
            }
        },
        getResponsiveClass: function () {
            return System.String.concat("whi", this.assignedBootWindow);
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

    Bridge.ns("ExpressCraft.Bootstrap.BootWindow", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.BootWindow, {
        f1: function (ev) {
            this.close();
            document.removeEventListener("backbutton", this.backButtonEvent);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootWindow.StyleStates", {
        width480Landscape: false,
        widthLess767: false,
        widthGreater768Less991: false,
        widthGreater768: false,
        widthGreater992: false,
        widthGreater1200: false,
        equals: function (state) {
            return (this.width480Landscape === state.width480Landscape && this.widthLess767 && state.widthLess767 && this.widthGreater768Less991 && state.widthGreater768Less991 && this.widthGreater768 && state.widthGreater768 && this.widthGreater992 && state.widthGreater992 && this.widthGreater1200 && state.widthGreater1200);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.ColExtentions", {
        statics: {
            applyColumns: function (widget, colClasses) {
                if (colClasses === void 0) { colClasses = []; }
                var length;
                if (widget != null && colClasses != null && ((length = colClasses.length)) > 0) {
                    var builder = new System.Text.StringBuilder();

                    for (var i = 0; i < length; i = (i + 1) | 0) {
                        widget.getClassList().add(colClasses[i].value);
                    }
                }
                return widget;
            }
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
                if (type === ExpressCraft.Bootstrap.BootTheme.None) {
                    return "";
                }
                return System.String.concat(cls, System.Enum.format(ExpressCraft.Bootstrap.BootTheme, type, "G").toLowerCase());
            },
            getWidgetWindow: function (element) {
                if (element == null) {
                    return null;
                }

                var x = ExpressCraft.Bootstrap.BootWidget.castElement(ExpressCraft.Bootstrap.BootWidget, element);

                if (x == null) {
                    return null;
                }

                var bootHandle = x.getBootWindowHandle();

                for (var i = 0; i < ExpressCraft.Form.formCollections.getCount(); i = (i + 1) | 0) {
                    if (Bridge.is(ExpressCraft.Form.formCollections.getItem(i).formOwner, ExpressCraft.Bootstrap.BootWindow)) {
                        if (parseInt(ExpressCraft.Form.formCollections.getItem(i).formOwner.getBootHandle()) === bootHandle) {
                            return ExpressCraft.Form.formCollections.getItem(i).formOwner;
                        }
                    }
                    for (var j = 0; j < ExpressCraft.Form.formCollections.getItem(i).visibleForms.getCount(); j = (j + 1) | 0) {
                        if (Bridge.is(ExpressCraft.Form.formCollections.getItem(i).visibleForms.getItem(j), ExpressCraft.Bootstrap.BootWindow)) {
                            if (parseInt(ExpressCraft.Form.formCollections.getItem(i).visibleForms.getItem(j).getBootHandle()) === bootHandle) {
                                return ExpressCraft.Form.formCollections.getItem(i).visibleForms.getItem(j);
                            }
                        }
                    }
                }

                return null;
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.NavBarLocation", {
        $kind: "enum",
        statics: {
            None: 0,
            Static_Top: 1
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.NavBarPosition", {
        $kind: "enum",
        statics: {
            None: 0,
            NavBar_Left: 1,
            NavBar_Right: 2
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.NavBarTheme", {
        $kind: "enum",
        statics: {
            NavBar_Default: 0,
            NavBar_Inverse: 1
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Program", {
        statics: {
            r: null,
            config: {
                init: function () {
                    this.r = new System.Random.ctor();
                }
            },
            demo: function () {
                ExpressCraft.Application.run(Bridge.merge(new ExpressCraft.Bootstrap.BootWindow.ctor([new ExpressCraft.Bootstrap.Panel(ExpressCraft.Bootstrap.BootTheme.Info, [new ExpressCraft.Bootstrap.PanelHeading([new ExpressCraft.Bootstrap.Heading("h4", ["ExpressCraft.Bootstrap Examples"])]), new ExpressCraft.Bootstrap.PanelBody([Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor3("Table", ExpressCraft.Bootstrap.BootTheme.Info), {
                    setBlock: true
                } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor3("Navbar", ExpressCraft.Bootstrap.BootTheme.Info), {
                    setBlock: true,
                    setOnClick: $asm.$.ExpressCraft.Bootstrap.Program.f2
                } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor3("Typography", ExpressCraft.Bootstrap.BootTheme.Info), {
                    setBlock: true
                } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor3("Grid", ExpressCraft.Bootstrap.BootTheme.Info), {
                    setBlock: true
                } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor3("Panel", ExpressCraft.Bootstrap.BootTheme.Info), {
                    setBlock: true
                } ), Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor3("Form", ExpressCraft.Bootstrap.BootTheme.Info), {
                    setBlock: true
                } )]), new ExpressCraft.Bootstrap.PanelFooter(["Copyright © " + Bridge.Date.today().getFullYear() + " Samuel Grahame"])])]), {
                    setWindowstate: ExpressCraft.WindowState.Maximized
                } ));

                //Action<MouseEvent> buttonClick = (ev) => { Global.Alert(ev.CurrentTarget.As<HTMLElement>().InnerHTML); };			
                //			Application.Run(
                //				new BootWindow(
                //					new Panel(BootTheme.Default,
                //						new PanelHeading("Welcome to ExpressCraft-Bootstrap"),
                //						new PanelBody(
                //							new BootSelectionWidget(
                //								new FormGroupList(
                //									new TextBox("Textbox"),
                //									new CheckBox("checkbox", true),
                //									new FormGroup(
                //										new CheckBox("checkbox-inline 1", true) { Inline = true },
                //										new CheckBox("checkbox-inline 2", true) { Inline = true },
                //										new CheckBox("checkbox-inline 3", true) { Inline = true }
                //										),
                //									new TextBox("11/04/2017", InputType.Date),
                //									new TextBox("Password", InputType.Password),
                //									new TextArea("TextArea", 4),
                //									new BootForm(BootFormType.Inline,
                //										new Label(
                //											"Email:",
                //											new TextBox()
                //										),
                //										new Label(
                //											"Password:",
                //											new TextBox(InputType.Password)
                //										),
                //										new CheckBox("Remeber me"),
                //										new Button("Submit", ButtonType.Submit)
                //									),
                //									new BootForm(BootFormType.Horizontal,
                //										new Label(
                //											"Email:",
                //											new TextBox()
                //										),
                //										new Label(
                //											"Password:",
                //											new TextBox(InputType.Password)
                //										),
                //										new CheckBox("Remeber me"),
                //										new Button("Submit", ButtonType.Submit)
                //									),
                //									new Button("Basic", BootTheme.None) { OnClick = buttonClick },
                //									new Button("Default", BootTheme.Default) { OnClick = buttonClick },
                //									new Button("Primary", BootTheme.Primary) { OnClick = buttonClick },
                //									new Button("Success", BootTheme.Success) { OnClick = buttonClick },
                //									new Button("Info", BootTheme.Info) { OnClick = buttonClick },
                //									new Button("Warning", BootTheme.Warning) { OnClick = buttonClick },
                //									new Button("Danger", BootTheme.Danger) { OnClick = buttonClick },
                //									new Button("Link", BootTheme.Link) { OnClick = buttonClick }
                //								),
                //								new Heading(HeadingType.H2, "Heading", new Small(" - Heading Small")),
                //									new ParagraphList(
                //										"Text",
                //										new Abbr("Abbr hover", "Abbr"),
                //										new Small("Small"),
                //										new Blockquote(new Paragraph("Block Quote Content"), new Footer("Block Quote From")),
                //										new Blockquote(new Paragraph("Block Quote Content Reverse"), new Footer("Block Quote From Reverse")) { Reverse = true },
                //										new DescriptionList(
                //											new DescriptionTitle("Description Title 1"),
                //											new DescriptionDetail("- Description Detail 1"),
                //											new DescriptionTitle("Description Title 2"),
                //											new DescriptionDetail("- Description Detail 2")),
                //										new Paragraph("The following HTML elements: ", new Code("span"), ", ", new Code("section"), ", and ", new Code("div"), " defines a section in a document."),
                //										new Paragraph("Use ", new Kbd("ctrl + p"), " to open the Print dialog box."),
                //										new Pre(
                //"Text in a pre element
                //is displayed in a fixed-width
                //font, and it preserves
                //both      spaces and
                //line breaks."),
                //										new Paragraph(
                //											new ParagraphList(
                //												new Heading(HeadingType.H2, "Contextual Colors"),
                //												new Paragraph("This text is muted.") { ContextualText = Contextual.Text.Muted },
                //												new Paragraph("This text is important.") { ContextualText = Contextual.Text.Primary },
                //												new Paragraph("This text indicates success.") { ContextualText = Contextual.Text.Success },
                //												new Paragraph("This text represents some information.") { ContextualText = Contextual.Text.Info },
                //												new Paragraph("This text represents a warning.") { ContextualText = Contextual.Text.Warning },
                //												new Paragraph("This text represents danger.") { ContextualText = Contextual.Text.Danger }
                //											)
                //										),
                //										new Paragraph(
                //											new ParagraphList(
                //												new Heading(HeadingType.H2, "Contextual Backgrounds"),
                //												new Paragraph("This text is important.") { ContextualBackground = Contextual.Background.Primary },
                //												new Paragraph("This text indicates success.") { ContextualBackground = Contextual.Background.Success },
                //												new Paragraph("This text represents some information.") { ContextualBackground = Contextual.Background.Info },
                //												new Paragraph("This text represents a warning.") { ContextualBackground = Contextual.Background.Warning },
                //												new Paragraph("This text represents danger.") { ContextualBackground = Contextual.Background.Danger }
                //											)
                //										)
                //									),
                //									new Panel(BootTheme.Default,
                //										new PanelHeading(
                //											new Heading(HeadingType.H3, "Table Demo", new Small(" - Table options below.")),
                //											new FormGroup(
                //												new CheckBox("Striped", false)
                //												{
                //													OnCheckChanged = (s) => {
                //														BootWidget.GetWidgetById<Table>("DemoTable").Striped = s.Checked;
                //													},
                //													Inline = true
                //												},
                //												new CheckBox("Bordered", false)
                //												{
                //													OnCheckChanged = (s) => {
                //														BootWidget.GetWidgetById<Table>("DemoTable").Bordered = s.Checked;
                //													},
                //													Inline = true
                //												},
                //												new CheckBox("Hover", false)
                //												{
                //													OnCheckChanged = (s) => {
                //														BootWidget.GetWidgetById<Table>("DemoTable").Hover = s.Checked;
                //													},
                //													Inline = true
                //												},
                //												new CheckBox("Condensed", false)
                //												{
                //													OnCheckChanged = (s) => {
                //														BootWidget.GetWidgetById<Table>("DemoTable").Condensed = s.Checked;
                //													},
                //													Inline = true
                //												},
                //												new CheckBox("Contextual classes", false)
                //												{
                //													OnCheckChanged = (s) => {
                //														var tbl = BootWidget.GetWidgetById<Table>("DemoTable");
                //														if(s.Checked)
                //														{
                //															var body = tbl.TableBody;
                //															body.Row(0).Theme = BootRowCellTheme.Active;
                //															body.Row(2).Theme = BootRowCellTheme.Success;
                //															body.Row(4).Theme = BootRowCellTheme.Info;
                //															body.Row(6).Theme = BootRowCellTheme.Warning;
                //															body.Row(8).Theme = BootRowCellTheme.Danger;
                //														}
                //														else
                //														{
                //															foreach(var item in tbl.TableBody.Rows)
                //															{
                //																item.ClearTheme();
                //															}
                //														}
                //													},
                //													Inline = true
                //												}
                //											)
                //										),
                //										new PanelBody(
                //											new Table(
                //												new TableHeader(
                //													new TableHeaderRow(
                //														"#",
                //														"Table heading",
                //														"Table heading",
                //														"Table heading",
                //														"Table heading",
                //														"Table heading",
                //														"Table heading"
                //														)
                //													),
                //												new TableBody(
                //													Enumerable.Range(0, 9).Select((x, index) => (Union<string, Control, HTMLElement>)new TableRow(
                //													new TableHeaderCell((index + 1).ToString()), "Table cell", "Table cell", "Table cell", "Table cell", "Table cell", "Table cell")).ToArray()
                //												)
                //											)
                //											{ Id = "DemoTable" }
                //										),
                //										new PanelFooter(
                //											new Heading(HeadingType.H3, "How to access the table."),
                //											new Pre(
                //"var tbl = BootWidget.GetWidgetById<Table>(""DemoTable"");
                //var body = tbl.TableBody;
                //body.Row(0).Theme = BootRowCellTheme.Active;
                //body.Row(2).Theme = BootRowCellTheme.Success;
                //body.Row(4).Theme = BootRowCellTheme.Info;
                //body.Row(6).Theme = BootRowCellTheme.Warning;
                //body.Row(8).Theme = BootRowCellTheme.Danger;
                //"
                //											)
                //										)
                //									)

                //								)
                //						),
                //						new PanelFooter(
                //							"Footer"
                //							)
                //						)
                //				)
                //				{ Windowstate = WindowState.Maximized }
                //			);
            }
        },
        $main: function () {
            ExpressCraft.Settings.setIncludeFocusRegion(false);
            ExpressCraft.Settings.allowCloseWithoutQuestion = true;
            ExpressCraft.Application.setApplicationDefinition();

            ExpressCraft.Bootstrap.BootWindow.setupMetaTags();
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.Program", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.Program, {
        f1: function (x, index) {
            return new ExpressCraft.Bootstrap.TableRow.ctor([new ExpressCraft.Bootstrap.TableHeaderCell.ctor([(((index + 1) | 0)).toString()]), "Table cell", "Table cell", "Table cell", "Table cell", "Table cell", "Table cell"]);
        },
        f2: function (ev) {
            Bridge.merge(new ExpressCraft.Bootstrap.BootWindow.ctor([Bridge.merge(new ExpressCraft.Bootstrap.Navbar([new ExpressCraft.Bootstrap.NavbarHeader([Bridge.merge(new ExpressCraft.Bootstrap.NavbarCollapseButton("navbarContent"), {
                setUnqiueAttributes: "data-target"
            } ), new ExpressCraft.Bootstrap.NavbarBrand("#", ["Brand"])]), Bridge.merge(new ExpressCraft.Bootstrap.NavbarContent("navbarContent", [Bridge.merge(new ExpressCraft.Bootstrap.UnorderedList([Bridge.merge(new ExpressCraft.Bootstrap.ListItem([new ExpressCraft.Bootstrap.Anchor("#", ["Link ", new ExpressCraft.Bootstrap.SourceOnly(["(current)"])])]), {
                setActive: true
            } ), new ExpressCraft.Bootstrap.ListItem([new ExpressCraft.Bootstrap.Anchor("#", ["Link"])]), Bridge.merge(new ExpressCraft.Bootstrap.ListItem([Bridge.merge(new ExpressCraft.Bootstrap.Anchor("#", ["Dropdown ", new ExpressCraft.Bootstrap.Caret()]), {
                setDropdown: true
            } ), Bridge.merge(new ExpressCraft.Bootstrap.UnorderedList([new ExpressCraft.Bootstrap.ListItem([new ExpressCraft.Bootstrap.Anchor("#", ["Action"])]), new ExpressCraft.Bootstrap.ListItem([new ExpressCraft.Bootstrap.Anchor("#", ["Another Action"])]), new ExpressCraft.Bootstrap.ListItem([new ExpressCraft.Bootstrap.Anchor("#", ["Something else here"])]), Bridge.merge(new ExpressCraft.Bootstrap.ListItem(), {
                setDivider: true
            } ), new ExpressCraft.Bootstrap.ListItem([new ExpressCraft.Bootstrap.Anchor("#", ["Separated link"])])]), {
                setDropdownMenu: true
            } )]), {
                setDropdown: true
            } )]), {
                setNav: true
            } )]), {
                setUnqiueAttributes: "id"
            } )]), {
                setNavbarLocation: ExpressCraft.Bootstrap.NavBarLocation.Static_Top,
                setTheme: ExpressCraft.Bootstrap.Program.r.next$2(0, 2) === 1 ? ExpressCraft.Bootstrap.NavBarTheme.NavBar_Inverse : ExpressCraft.Bootstrap.NavBarTheme.NavBar_Default,
                setFluid: false
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Table([new ExpressCraft.Bootstrap.TableHeader([new ExpressCraft.Bootstrap.TableHeaderRow.ctor(["#", "Table heading", "Table heading", "Table heading", "Table heading", "Table heading", "Table heading"])]), new ExpressCraft.Bootstrap.TableBody(System.Linq.Enumerable.range(0, 9).select($asm.$.ExpressCraft.Bootstrap.Program.f1).toArray())]), {
                setId: "DemoTable",
                setUnqiueAttributes: "id"
            } )]), {
                setFluid: false
            } ).show();
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Rule", {
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
                    this.XS1 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 1);
                    this.XS2 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 2);
                    this.XS3 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 3);
                    this.XS4 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 4);
                    this.XS5 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 5);
                    this.XS6 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 6);
                    this.XS7 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 7);
                    this.XS8 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 8);
                    this.XS9 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 9);
                    this.XS10 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 10);
                    this.XS11 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 11);
                    this.XS12 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.XS, 12);
                    this.XSO1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 1, "offset-");
                    this.XSO2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 2, "offset-");
                    this.XSO3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 3, "offset-");
                    this.XSO4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 4, "offset-");
                    this.XSO5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 5, "offset-");
                    this.XSO6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 6, "offset-");
                    this.XSO7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 7, "offset-");
                    this.XSO8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 8, "offset-");
                    this.XSO9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 9, "offset-");
                    this.XSO10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 10, "offset-");
                    this.XSO11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 11, "offset-");
                    this.XSO12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 12, "offset-");
                    this.XSPL1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 1, "pull-");
                    this.XSPL2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 2, "pull-");
                    this.XSPL3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 3, "pull-");
                    this.XSPL4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 4, "pull-");
                    this.XSPL5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 5, "pull-");
                    this.XSPL6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 6, "pull-");
                    this.XSPL7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 7, "pull-");
                    this.XSPL8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 8, "pull-");
                    this.XSPL9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 9, "pull-");
                    this.XSPL10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 10, "pull-");
                    this.XSPL11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 11, "pull-");
                    this.XSPL12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 12, "pull-");
                    this.XSPS1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 1, "push-");
                    this.XSPS2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 2, "push-");
                    this.XSPS3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 3, "push-");
                    this.XSPS4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 4, "push-");
                    this.XSPS5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 5, "push-");
                    this.XSPS6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 6, "push-");
                    this.XSPS7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 7, "push-");
                    this.XSPS8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 8, "push-");
                    this.XSPS9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 9, "push-");
                    this.XSPS10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 10, "push-");
                    this.XSPS11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 11, "push-");
                    this.XSPS12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.XS, 12, "push-");
                    this.SM1 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 1);
                    this.SM2 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 2);
                    this.SM3 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 3);
                    this.SM4 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 4);
                    this.SM5 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 5);
                    this.SM6 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 6);
                    this.SM7 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 7);
                    this.SM8 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 8);
                    this.SM9 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 9);
                    this.SM10 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 10);
                    this.SM11 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 11);
                    this.SM12 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.SM, 12);
                    this.SMO1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 1, "offset-");
                    this.SMO2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 2, "offset-");
                    this.SMO3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 3, "offset-");
                    this.SMO4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 4, "offset-");
                    this.SMO5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 5, "offset-");
                    this.SMO6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 6, "offset-");
                    this.SMO7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 7, "offset-");
                    this.SMO8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 8, "offset-");
                    this.SMO9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 9, "offset-");
                    this.SMO10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 10, "offset-");
                    this.SMO11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 11, "offset-");
                    this.SMO12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 12, "offset-");
                    this.SMPL1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 1, "pull-");
                    this.SMPL2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 2, "pull-");
                    this.SMPL3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 3, "pull-");
                    this.SMPL4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 4, "pull-");
                    this.SMPL5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 5, "pull-");
                    this.SMPL6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 6, "pull-");
                    this.SMPL7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 7, "pull-");
                    this.SMPL8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 8, "pull-");
                    this.SMPL9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 9, "pull-");
                    this.SMPL10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 10, "pull-");
                    this.SMPL11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 11, "pull-");
                    this.SMPL12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 12, "pull-");
                    this.SMPS1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 1, "push-");
                    this.SMPS2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 2, "push-");
                    this.SMPS3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 3, "push-");
                    this.SMPS4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 4, "push-");
                    this.SMPS5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 5, "push-");
                    this.SMPS6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 6, "push-");
                    this.SMPS7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 7, "push-");
                    this.SMPS8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 8, "push-");
                    this.SMPS9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 9, "push-");
                    this.SMPS10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 10, "push-");
                    this.SMPS11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 11, "push-");
                    this.SMPS12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.SM, 12, "push-");
                    this.MD1 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 1);
                    this.MD2 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 2);
                    this.MD3 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 3);
                    this.MD4 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 4);
                    this.MD5 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 5);
                    this.MD6 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 6);
                    this.MD7 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 7);
                    this.MD8 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 8);
                    this.MD9 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 9);
                    this.MD10 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 10);
                    this.MD11 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 11);
                    this.MD12 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.MD, 12);
                    this.MDO1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 1, "offset-");
                    this.MDO2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 2, "offset-");
                    this.MDO3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 3, "offset-");
                    this.MDO4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 4, "offset-");
                    this.MDO5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 5, "offset-");
                    this.MDO6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 6, "offset-");
                    this.MDO7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 7, "offset-");
                    this.MDO8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 8, "offset-");
                    this.MDO9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 9, "offset-");
                    this.MDO10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 10, "offset-");
                    this.MDO11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 11, "offset-");
                    this.MDO12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 12, "offset-");
                    this.MDPL1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 1, "pull-");
                    this.MDPL2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 2, "pull-");
                    this.MDPL3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 3, "pull-");
                    this.MDPL4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 4, "pull-");
                    this.MDPL5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 5, "pull-");
                    this.MDPL6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 6, "pull-");
                    this.MDPL7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 7, "pull-");
                    this.MDPL8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 8, "pull-");
                    this.MDPL9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 9, "pull-");
                    this.MDPL10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 10, "pull-");
                    this.MDPL11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 11, "pull-");
                    this.MDPL12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 12, "pull-");
                    this.MDPS1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 1, "push-");
                    this.MDPS2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 2, "push-");
                    this.MDPS3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 3, "push-");
                    this.MDPS4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 4, "push-");
                    this.MDPS5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 5, "push-");
                    this.MDPS6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 6, "push-");
                    this.MDPS7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 7, "push-");
                    this.MDPS8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 8, "push-");
                    this.MDPS9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 9, "push-");
                    this.MDPS10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 10, "push-");
                    this.MDPS11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 11, "push-");
                    this.MDPS12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.MD, 12, "push-");
                    this.LG1 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 1);
                    this.LG2 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 2);
                    this.LG3 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 3);
                    this.LG4 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 4);
                    this.LG5 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 5);
                    this.LG6 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 6);
                    this.LG7 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 7);
                    this.LG8 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 8);
                    this.LG9 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 9);
                    this.LG10 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 10);
                    this.LG11 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 11);
                    this.LG12 = new ExpressCraft.Bootstrap.Rule.ctor(ExpressCraft.Bootstrap.RuleTier.LG, 12);
                    this.LGO1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 1, "offset-");
                    this.LGO2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 2, "offset-");
                    this.LGO3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 3, "offset-");
                    this.LGO4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 4, "offset-");
                    this.LGO5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 5, "offset-");
                    this.LGO6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 6, "offset-");
                    this.LGO7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 7, "offset-");
                    this.LGO8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 8, "offset-");
                    this.LGO9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 9, "offset-");
                    this.LGO10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 10, "offset-");
                    this.LGO11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 11, "offset-");
                    this.LGO12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 12, "offset-");
                    this.LGPL1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 1, "pull-");
                    this.LGPL2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 2, "pull-");
                    this.LGPL3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 3, "pull-");
                    this.LGPL4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 4, "pull-");
                    this.LGPL5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 5, "pull-");
                    this.LGPL6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 6, "pull-");
                    this.LGPL7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 7, "pull-");
                    this.LGPL8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 8, "pull-");
                    this.LGPL9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 9, "pull-");
                    this.LGPL10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 10, "pull-");
                    this.LGPL11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 11, "pull-");
                    this.LGPL12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 12, "pull-");
                    this.LGPS1 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 1, "push-");
                    this.LGPS2 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 2, "push-");
                    this.LGPS3 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 3, "push-");
                    this.LGPS4 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 4, "push-");
                    this.LGPS5 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 5, "push-");
                    this.LGPS6 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 6, "push-");
                    this.LGPS7 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 7, "push-");
                    this.LGPS8 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 8, "push-");
                    this.LGPS9 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 9, "push-");
                    this.LGPS10 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 10, "push-");
                    this.LGPS11 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 11, "push-");
                    this.LGPS12 = new ExpressCraft.Bootstrap.Rule.$ctor1(ExpressCraft.Bootstrap.RuleTier.LG, 12, "push-");
                }
            }
        },
        value: null,
        $ctor1: function (_tier, _colIndex, bonus) {
            this.$initialize();
            this.value = System.String.concat("col", _tier.value, bonus, _colIndex);
        },
        ctor: function (_tier, _colIndex) {
            ExpressCraft.Bootstrap.Rule.$ctor1.call(this, _tier, _colIndex, "");
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.RuleTier", {
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
                    this.XS = new ExpressCraft.Bootstrap.RuleTier("-xs-");
                    this.SM = new ExpressCraft.Bootstrap.RuleTier("-sm-");
                    this.MD = new ExpressCraft.Bootstrap.RuleTier("-md-");
                    this.LG = new ExpressCraft.Bootstrap.RuleTier("-lg-");
                }
            }
        },
        value: null,
        ctor: function (_value) {
            this.$initialize();
            this.value = _value;
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Abbr", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (title, typos) {
            if (title === void 0) { title = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("abbr"), typos);
            if (!System.String.isNullOrWhiteSpace(title)) {
                this.content.title = title;
            }
        },
        getInitialism: function () {
            return this.getClassTrue("initialism");
        },
        setInitialism: function (value) {
            this.setClassTrue("initialism", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Address", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("address"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootWidgetClickBase", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (element) {
            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, element);

        },
        $ctor1: function (element, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, element, typos);

        },
        getOnClick: function () {
            return this.content.onclick;
        },
        setOnClick: function (value) {
            this.content.onclick = value;
        },
        getDropdown: function () {
            return this.getClassTrue("dropdown-toggle");
        },
        setDropdown: function (value) {
            if (value) {
                this.setAttribute("data-toggle", "dropdown");
                this.setAttribute("aria-haspopup", "true");
                this.setAttribute("aria-expanded", "false");
            } else {
                this.setAttribute("data-toggle", null);
                this.setAttribute("aria-haspopup", null);
                this.setAttribute("aria-expanded", null);
            }
            this.setClassTrue("dropdown-toggle", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Blockquote", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("blockquote"), typos);

        },
        $ctor1: function (para, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("blockquote"));
            var x = new (System.Collections.Generic.List$1(Object))();

            x.add(para);
            x.addRange(typos);

            ExpressCraft.Bootstrap.BootWidget.appendTypos$1(this, x.toArray());
        },
        $ctor2: function (para, footer, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("blockquote"));
            var x = new (System.Collections.Generic.List$1(Object))();

            x.add(para);
            x.add(footer);
            x.addRange(typos);

            ExpressCraft.Bootstrap.BootWidget.appendTypos$1(this, x.toArray());
        },
        $ctor3: function (para, footer, source, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("blockquote"));
            var x = new (System.Collections.Generic.List$1(Object))();

            x.add(para);
            x.add(ExpressCraft.Helper.appendChild(footer, source));
            x.addRange(typos);

            ExpressCraft.Bootstrap.BootWidget.appendTypos$1(this, x.toArray());
        },
        getReverse: function () {
            return this.getClassTrue("blockquote-reverse");
        },
        setReverse: function (value) {
            this.setClassTrue("blockquote-reverse", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootBaseBox", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        prevText: "",
        onTextChanged: null,
        onKeyDown: null,
        onKeyUp: null,
        onKeyPress: null,
        ctor: function (element) {
            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, element);
            this.content.onchange = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootBaseBox.f1);
            this.content.oncontextmenu = $asm.$.ExpressCraft.Bootstrap.BootBaseBox.f2;
            this.content.onkeypress = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootBaseBox.f3);
            this.content.onkeydown = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootBaseBox.f4);
            this.content.onkeyup = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootBaseBox.f5);
            this.content.addEventListener("paste", Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootBaseBox.f6));
            this.content.addEventListener("cut", Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.BootBaseBox.f6));
        },
        getAriaDescribedBy: function () {
            return this.getAttribute("aria-describedby");
        },
        setAriaDescribedBy: function (value) {
            this.setAttribute("aria-describedby", value);
        },
        getAriaLabel: function () {
            return this.getAttribute("aria-label");
        },
        setAriaLabel: function (value) {
            this.setAttribute("aria-label", value);
        },
        getPlaceholder: function () {
            return this.getAttribute("placeholder");
        },
        setPlaceholder: function (value) {
            this.setAttribute("placeholder", value);
        },
        getText: function () {
            if (Bridge.is(this.content, HTMLInputElement) && this.content.type === "checkbox") {
                return System.Boolean.toString(this.content.checked);
            } else {
                return this.content.value;
            }
        },
        setText: function (value) {
            if (Bridge.is(this.content, HTMLInputElement) && this.content.type === "checkbox") {
                value = value.toLowerCase();
                this.content.checked = ExpressCraft.Helper.isTrue(value) === 1;
            } else {
                this.content.value = value;
            }

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
            ExpressCraft.Bootstrap.BootWidget.prototype.render.call(this);
            this.prevText = this.getText();
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.BootBaseBox", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.BootBaseBox, {
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

    Bridge.define("ExpressCraft.Bootstrap.BootForm", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (formType, typos) {
            if (formType === void 0) { formType = 0; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement('form'));
            if (formType !== ExpressCraft.Bootstrap.BootFormType.None) {
                this.content.className = System.String.concat("form-", System.Enum.format(ExpressCraft.Bootstrap.BootFormType, formType, "G").toLowerCase());
            }
            ExpressCraft.Bootstrap.FormGroup.appendGroupList(this, typos);
        },
        getNavbar: function () {
            return this.getClassTrue("navbar-form");
        },
        setNavbar: function (value) {
            this.setClassTrue("navbar-form", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootSelectionWidget", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('div'), {
                className: "selection"
            } ), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootStyleWidget", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (className, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('div'), {
                className: className
            } ), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Caret", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function () {
            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('span'), {
                className: "caret"
            } ));

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Cite", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (title, typos) {
            if (title === void 0) { title = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("cite"), typos);
            if (!System.String.isNullOrWhiteSpace(title)) {
                this.content.title = title;
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Code", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("code"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Col", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        $ctor8: function (colClasses, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.$ctor1.call(this, typos);
            ExpressCraft.Bootstrap.ColExtentions.applyColumns(this, colClasses);
        },
        $ctor9: function (colClasses, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, colClasses.toArray(), typos);

        },
        ctor: function (colClass1, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1], ExpressCraft.Bootstrap.Rule), typos);

        },
        $ctor1: function (colClass1, colClass2, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2], ExpressCraft.Bootstrap.Rule), typos);

        },
        $ctor2: function (colClass1, colClass2, colClass3, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3], ExpressCraft.Bootstrap.Rule), typos);

        },
        $ctor3: function (colClass1, colClass2, colClass3, colClass4, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4], ExpressCraft.Bootstrap.Rule), typos);

        },
        $ctor4: function (colClass1, colClass2, colClass3, colClass4, colClass5, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5], ExpressCraft.Bootstrap.Rule), typos);

        },
        $ctor5: function (colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5, colClass6], ExpressCraft.Bootstrap.Rule), typos);

        },
        $ctor6: function (colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7], ExpressCraft.Bootstrap.Rule), typos);

        },
        $ctor7: function (colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, colClass8, typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, colClass8], ExpressCraft.Bootstrap.Rule), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Deleted", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("del"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.DescriptionDetail", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("dd"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.DescriptionList", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("dl"), typos);

        },
        getHorizontal: function () {
            return this.getClassTrue("dl-horizontal");
        },
        setHorizontal: function (value) {
            this.setClassTrue("dl-horizontal", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.DescriptionTitle", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("dt"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Emphasizing", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("em"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Footer", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("footer"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.FormGroupList", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.$ctor1.call(this);
            ExpressCraft.Bootstrap.FormGroup.appendGroupList(this, typos);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Heading", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (ht, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement(ht), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.IconBar", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function () {
            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('span'), {
                className: "icon-bar"
            } ));

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.InputGroupAddon", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (_id, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('span'), {
                className: "input-group-addon"
            } ), typos);
            if (!System.String.isNullOrWhiteSpace(_id)) {
                if (System.String.startsWith(_id, "#")) {
                    _id = _id.substr(1);
                }
                this.setId(_id);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Inserted", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("ins"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Kbd", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("kbd"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Label", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('label'), {
                className: "control-label"
            } ), typos);

        },
        getSourceOnly: function () {
            return this.getClassTrue("sr-only");
        },
        setSourceOnly: function (value) {
            this.setClassTrue("sr-only", value);
        },
        getFor: function () {
            return this.content.htmlFor;
        },
        setFor: function (value) {
            this.content.htmlFor = value;
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.ListItem", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        statics: {
            appendItemList: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos == null || typos.length === 0) {
                    return;
                }

                var length = typos.length;
                var list = System.Array.init(length, null, Object);

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (typos[i] == null) {
                        list[i] = new ExpressCraft.Bootstrap.ListItem();
                        continue;
                    }

                    if (Bridge.is(typos[i], ExpressCraft.Bootstrap.ListItem)) {
                        list[i] = typos[i];
                    } else {
                        list[i] = new ExpressCraft.Bootstrap.ListItem([typos[i]]);
                    }

                }
                ExpressCraft.Bootstrap.BootWidget.appendTypos$1(control, list);
            }
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("li"), typos);

        },
        getDropdown: function () {
            return this.getClassTrue("dropdown");
        },
        setDropdown: function (value) {
            this.setClassTrue("dropdown", value);
        },
        getDivider: function () {
            return this.getClassTrue("divider");
        },
        setDivider: function (value) {
            if (value) {
                this.setAttribute("role", "separator");
            } else {
                var x = this.getAttribute("role");
                if (Bridge.referenceEquals(x, "separator")) {
                    this.setAttribute("role", null);
                }
            }
            this.setClassTrue("divider", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Mark", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("mark"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Navbar", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("nav"));
            this.content.className = "navbar navbar-default";

            var container = (new ExpressCraft.Bootstrap.BootStyleWidget("container-fluid"));

            ExpressCraft.Bootstrap.BootWidget.appendTypos$1(container, typos);

            this.content.appendChild(ExpressCraft.Control.op_Implicit(container));

            this.content.addEventListener("mousedown", Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.Navbar.f1));
            this.content.addEventListener("mousemove", $asm.$.ExpressCraft.Bootstrap.Navbar.f2);
            this.content.addEventListener("mouseup", $asm.$.ExpressCraft.Bootstrap.Navbar.f2);
        },
        getTheme: function () {
            return this.getEnumClassValue$1(ExpressCraft.Bootstrap.NavBarTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ExpressCraft.Bootstrap.NavBarTheme, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.NavBarTheme, value, "G").toLowerCase(), "_", "-"));
        },
        getFluid: function () {
            return this.getClassTrue$1("container-fluid");
        },
        setFluid: function (value) {
            this.setClassTrue$1("container", !value);
            this.setClassTrue$1("container-fluid", value);
        },
        getNavbarLocation: function () {
            var x = this.getEnumClassValue("navbar-", ExpressCraft.Bootstrap.NavBarLocation);
            if (x == null) {
                return ExpressCraft.Bootstrap.NavBarLocation.None;
            } else {
                return x;
            }
        },
        setNavbarLocation: function (value) {
            if (value === ExpressCraft.Bootstrap.NavBarLocation.None) {
                this.clearEnumClassValue("navbar-", ExpressCraft.Bootstrap.NavBarLocation);
            } else {
                this.setEnumClassValue("navbar-", ExpressCraft.Bootstrap.NavBarLocation, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.NavBarLocation, value, "G").toLowerCase(), "_", "-"));
            }
        },
        getClassTrue$1: function (classStr) {
            return this.content.firstChild.classList.contains(classStr);
        },
        setClassTrue$1: function (classStr, value) {
            if (value === this.getClassTrue$1(classStr)) {
                return;
            }
            if (value) {
                this.content.firstChild.classList.add(classStr);
            } else {
                this.content.firstChild.classList.remove(classStr);
            }
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.Navbar", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.Navbar, {
        f1: function (ev) {
            ev.stopPropagation();

            var x = this.getBootWindowHandle();
            var y = ExpressCraft.Form.getActiveFormCollection();

            for (var i = 0; i < y.visibleForms.getCount(); i = (i + 1) | 0) {
                if (parseInt(y.visibleForms.getItem(i).getBody().getAttribute("bsh")) === x) {
                    ExpressCraft.Form.setActiveForm(y.visibleForms.getItem(i));
                    return;
                }
            }
            if (parseInt(y.formOwner.getBody().getAttribute("bsh")) === x) {
                ExpressCraft.Form.setActiveForm(y.formOwner);
            }
        },
        f2: function (ev) {
            ev.stopPropagation();
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.OrderedList", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("ol"), typos);
            ExpressCraft.Bootstrap.ListItem.appendItemList(this, typos);
        },
        getUnstyled: function () {
            return this.getClassTrue("list-unstyled");
        },
        setUnstyled: function (value) {
            this.setClassTrue("list-unstyled", value);
        },
        getInline: function () {
            return this.getClassTrue("list-inline");
        },
        setInline: function (value) {
            this.setClassTrue("list-inline", value);
        },
        getBreadcrumb: function () {
            return this.getClassTrue("breadcrumb");
        },
        setBreadcrumb: function (value) {
            this.setClassTrue("breadcrumb", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Paragraph", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement('p'), typos);

        },
        $ctor1: function (alignment, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('p'), {
                className: System.String.concat("text-", System.Enum.format(ExpressCraft.Bootstrap.BootParagraphAlignment, alignment, "G").toLowerCase())
            } ), typos);

        },
        $ctor2: function (alignment, transform, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('p'), {
                className: System.String.concat("text-", System.Enum.format(ExpressCraft.Bootstrap.BootParagraphTransformation, transform, "G").toLowerCase(), " ", "text-", System.Enum.format(ExpressCraft.Bootstrap.BootParagraphAlignment, alignment, "G").toLowerCase())
            } ), typos);

        },
        $ctor3: function (transform, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('p'), {
                className: System.String.concat("text-", System.Enum.format(ExpressCraft.Bootstrap.BootParagraphTransformation, transform, "G").toLowerCase())
            } ), typos);

        },
        getInitialism: function () {
            return this.getClassTrue("initialism");
        },
        setInitialism: function (value) {
            this.setClassTrue("initialism", value);
        },
        getNavbarText: function () {
            return this.getClassTrue("navbar-text");
        },
        setNavbarText: function (value) {
            this.setClassTrue("navbar-text", value);
        },
        getLead: function () {
            return this.getClassTrue("lead");
        },
        setLead: function (value) {
            this.setClassTrue("lead", value);
        },
        getHelp: function () {
            return this.getClassTrue("help-block");
        },
        setHelp: function (value) {
            this.setClassTrue("help-block", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.ParagraphList", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement('div'));
            if (typos == null || typos.length === 0) {
                return;
            }

            var length = typos.length;
            var list = System.Array.init(length, null, Object);

            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (typos[i] == null) {
                    list[i] = new ExpressCraft.Bootstrap.Paragraph.ctor();
                    continue;
                }

                if (Bridge.is(typos[i], ExpressCraft.Bootstrap.Paragraph)) {
                    list[i] = typos[i];
                } else {
                    list[i] = new ExpressCraft.Bootstrap.Paragraph.ctor([typos[i]]);
                }

            }
            ExpressCraft.Bootstrap.BootWidget.appendTypos$1(this, list);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Pre", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("pre"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Samp", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("samp"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Small", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("small"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.SourceOnly", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('span'), {
                className: "sr-only"
            } ), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Strikethrough", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("s"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Strong", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("strong"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Table", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('table'), {
                className: "table"
            } ), typos);

        },
        getTableBody: function () {
            return ExpressCraft.Bootstrap.BootWidget.castElement(ExpressCraft.Bootstrap.TableBody, this.getSection("tbody"));
        },
        getTableHeader: function () {
            return ExpressCraft.Bootstrap.BootWidget.castElement(ExpressCraft.Bootstrap.TableHeader, this.getSection("thead"));
        },
        getStriped: function () {
            return this.getClassTrue("table-striped");
        },
        setStriped: function (value) {
            this.setClassTrue("table-striped", value);
        },
        getBordered: function () {
            return this.getClassTrue("table-bordered");
        },
        setBordered: function (value) {
            this.setClassTrue("table-bordered", value);
        },
        getHover: function () {
            return this.getClassTrue("table-hover");
        },
        setHover: function (value) {
            this.setClassTrue("table-hover", value);
        },
        getCondensed: function () {
            return this.getClassTrue("table-condensed");
        },
        setCondensed: function (value) {
            this.setClassTrue("table-condensed", value);
        },
        hasRows: function () {
            var obj = this.getSection("tbody");
            return obj != null && obj.childElementCount > 0;
        },
        hasColumns: function () {
            var obj = this.getSection("thead");
            return obj != null && obj.childElementCount > 0;
        },
        getSection: function (name) {
            var $t;
            name = name.toLowerCase();
            $t = Bridge.getEnumerator(this.content.children);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (item != null && Bridge.referenceEquals(item.tagName.toLowerCase(), name)) {
                    return Bridge.cast(item, HTMLTableSectionElement);
                }
            }
            return null;
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableBody", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("tbody"), typos);

        },
        getRows: function () {
            var $yield = [];
            var length = this.content.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                $yield.push(this.row(i));
            }
            return System.Array.toEnumerable($yield);
        },
        row: function (index) {
            return ExpressCraft.Bootstrap.BootWidget.castElement(ExpressCraft.Bootstrap.TableRow, this.content.children[index]);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableCell", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        statics: {
            appendDataRow: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos == null || typos.length === 0) {
                    return;
                }

                var length = typos.length;
                var list = System.Array.init(length, null, Object);

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (typos[i] == null) {
                        list[i] = new ExpressCraft.Bootstrap.TableCell.ctor();
                        continue;
                    }

                    if (Bridge.is(typos[i], ExpressCraft.Bootstrap.TableCell)) {
                        list[i] = typos[i];
                    } else if (Bridge.is(typos[i], ExpressCraft.Bootstrap.TableHeader)) {
                        var x = typos[i];
                        list[i] = x;
                        x.content.setAttribute("scope", "row");
                    } else {
                        list[i] = new ExpressCraft.Bootstrap.TableCell.ctor([typos[i]]);
                    }

                }
                ExpressCraft.Bootstrap.BootWidget.appendTypos$1(control, list);
            }
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement('td'), typos);

        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('td'), {
                className: System.Enum.format(ExpressCraft.Bootstrap.BootRowCellTheme, theme, "G")
            } ), typos);

        },
        getTheme: function () {
            return this.getEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.BootRowCellTheme, value, "G").toLowerCase(), "_", "-"));
        },
        clearTheme: function () {
            this.clearEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableFooter", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("tfoot"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableHeader", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("thead"), typos);

        },
        getHeaderRows: function () {
            var $yield = [];
            var length = this.content.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                $yield.push(this.headerRow(i));
            }
            return System.Array.toEnumerable($yield);
        },
        headerRow: function (index) {
            return ExpressCraft.Bootstrap.BootWidget.castElement(ExpressCraft.Bootstrap.TableHeaderRow, this.content.children[index]);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableHeaderCell", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        statics: {
            appendHeaderDataRow: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos == null || typos.length === 0) {
                    return;
                }

                var length = typos.length;
                var list = System.Array.init(length, null, Object);

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (typos[i] == null) {
                        list[i] = new ExpressCraft.Bootstrap.TableHeaderCell.ctor();
                        continue;
                    }

                    if (Bridge.is(typos[i], ExpressCraft.Bootstrap.TableHeaderCell)) {
                        list[i] = typos[i];
                    } else {
                        list[i] = new ExpressCraft.Bootstrap.TableHeaderCell.ctor([typos[i]]);
                    }

                }
                ExpressCraft.Bootstrap.BootWidget.appendTypos$1(control, list);
            }
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement('th'), typos);

        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('th'), {
                className: System.Enum.format(ExpressCraft.Bootstrap.BootRowCellTheme, theme, "G")
            } ), typos);

        },
        getTheme: function () {
            return this.getEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.BootRowCellTheme, value, "G").toLowerCase(), "_", "-"));
        },
        clearTheme: function () {
            this.clearEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableHeaderRow", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement('tr'));
            ExpressCraft.Bootstrap.TableHeaderCell.appendHeaderDataRow(this, typos);
        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('tr'), {
                className: System.Enum.format(ExpressCraft.Bootstrap.BootRowCellTheme, theme, "G")
            } ));
            ExpressCraft.Bootstrap.TableHeaderCell.appendHeaderDataRow(this, typos);
        },
        getHeaderCells: function () {
            var $yield = [];
            var length = this.content.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                $yield.push(this.headerCell(i));
            }
            return System.Array.toEnumerable($yield);
        },
        getTheme: function () {
            return this.getEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.BootRowCellTheme, value, "G").toLowerCase(), "_", "-"));
        },
        headerCell: function (index) {
            return ExpressCraft.Bootstrap.BootWidget.castElement(ExpressCraft.Bootstrap.TableHeaderCell, this.content.children[index]);
        },
        clearTheme: function () {
            this.clearEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableRow", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement('tr'));
            ExpressCraft.Bootstrap.TableCell.appendDataRow(this, typos);
        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, Bridge.merge(document.createElement('tr'), {
                className: System.Enum.format(ExpressCraft.Bootstrap.BootRowCellTheme, theme, "G")
            } ));
            ExpressCraft.Bootstrap.TableCell.appendDataRow(this, typos);
        },
        getCells: function () {
            var $yield = [];
            var length = this.content.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                $yield.push(this.cell(i));
            }
            return System.Array.toEnumerable($yield);
        },
        getTheme: function () {
            return this.getEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme, System.Enum.format(ExpressCraft.Bootstrap.BootRowCellTheme, value, "G").toLowerCase());
        },
        cell: function (index) {
            return ExpressCraft.Bootstrap.BootWidget.castElement(ExpressCraft.Bootstrap.TableCell, this.content.children[index]);
        },
        clearTheme: function () {
            this.clearEnumClassValue$1(ExpressCraft.Bootstrap.BootRowCellTheme);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Underlined", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("u"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.UnorderedList", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("ul"), typos);
            ExpressCraft.Bootstrap.ListItem.appendItemList(this, typos);
        },
        getUnstyled: function () {
            return this.getClassTrue("list-unstyled");
        },
        setUnstyled: function (value) {
            this.setClassTrue("list-unstyled", value);
        },
        getInline: function () {
            return this.getClassTrue("list-inline");
        },
        setInline: function (value) {
            this.setClassTrue("list-inline", value);
        },
        getNav: function () {
            return this.getClassTrue("nav") && this.getClassTrue("navbar-nav");
        },
        setNav: function (value) {
            this.setClassTrue("nav", value);
            this.setClassTrue("navbar-nav", value);
            this.applyDataAttribute(this.content, value);
        },
        getDropdownMenu: function () {
            return this.getClassTrue("dropdown-menu");
        },
        setDropdownMenu: function (value) {
            this.setClassTrue("dropdown-menu", value);
        },
        applyDataAttribute: function (htmlElement, value) {
            if (htmlElement == null) {
                return;
            }
            var length = htmlElement.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                var child = htmlElement.children[i];
                if (child.childElementCount > 0) {
                    this.applyDataAttribute(child, value);
                }

                if (!(Bridge.referenceEquals(child.tagName.toUpperCase(), "A") && !child.classList.contains("dropdown-toggle") && child.parentElement != null && Bridge.referenceEquals(child.parentElement.tagName.toUpperCase(), "LI"))) {
                    continue;
                }
                if (value) {
                    child.setAttribute("data-toggle", "collapse");
                    child.setAttribute("data-target", ".navbar-collapse.in");
                } else {
                    child.setAttribute("data-toggle", "");
                    child.setAttribute("data-target", "");
                }
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Var", {
        inherits: [ExpressCraft.Bootstrap.BootWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidget.ctor.call(this, document.createElement("var"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Anchor", {
        inherits: [ExpressCraft.Bootstrap.BootWidgetClickBase],
        ctor: function (href, typos) {
            if (href === void 0) { href = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidgetClickBase.$ctor1.call(this, document.createElement('a'), typos);
            if (!System.String.isNullOrWhiteSpace(href)) {
                this.content.href = href;
            }
        },
        getNavbarLink: function () {
            return this.getClassTrue("navbar-link");
        },
        setNavbarLink: function (value) {
            this.setClassTrue("navbar-link", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Button", {
        inherits: [ExpressCraft.Bootstrap.BootWidgetClickBase],
        $ctor3: function (text, type, buttonType) {
            if (text === void 0) { text = ""; }
            if (type === void 0) { type = 1; }
            if (buttonType === void 0) { buttonType = 2; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidgetClickBase.ctor.call(this, Bridge.merge(document.createElement('button'), {
                type: buttonType,
                className: System.String.concat("btn", ExpressCraft.Bootstrap.Extension.getClassTheme(" btn-", type))
            } ));
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.content.innerHTML = text;
            }
        },
        $ctor2: function (text, buttonType) {
            if (text === void 0) { text = ""; }
            if (buttonType === void 0) { buttonType = 2; }

            ExpressCraft.Bootstrap.Button.$ctor3.call(this, text, ExpressCraft.Bootstrap.BootTheme.Default, buttonType);

        },
        $ctor1: function (text) {
            if (text === void 0) { text = ""; }

            ExpressCraft.Bootstrap.Button.$ctor3.call(this, text, ExpressCraft.Bootstrap.BootTheme.Default);

        },
        ctor: function () {
            ExpressCraft.Bootstrap.Button.$ctor3.call(this, "", ExpressCraft.Bootstrap.BootTheme.Default);

        },
        getNavbarButton: function () {
            return this.getClassTrue("navbar-btn");
        },
        setNavbarButton: function (value) {
            this.setClassTrue("navbar-btn", value);
        },
        getBlock: function () {
            return this.getClassTrue("btn-block");
        },
        setBlock: function (value) {
            this.setClassTrue("btn-block", value);
        },
        getTheme: function () {
            var x = this.getEnumClassValue("btn-", ExpressCraft.Bootstrap.BootTheme);
            if (x == null) {
                return ExpressCraft.Bootstrap.BootTheme.None;
            } else {
                return x;
            }
        },
        setTheme: function (value) {
            if (value === ExpressCraft.Bootstrap.BootTheme.None) {
                this.clearEnumClassValue("btn-", ExpressCraft.Bootstrap.BootRowCellTheme);
            } else {
                this.setEnumClassValue("btn-", ExpressCraft.Bootstrap.BootRowCellTheme, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.BootTheme, value, "G").toLowerCase(), "_", "-"));
            }
        },
        getButtonSize: function () {
            var x = this.getEnumClassValue("btn-", ExpressCraft.Bootstrap.BootSize);
            if (x == null) {
                return ExpressCraft.Bootstrap.BootSize.None;
            } else {
                return x;
            }
        },
        setButtonSize: function (value) {
            if (value === ExpressCraft.Bootstrap.BootSize.None) {
                this.clearEnumClassValue("btn-", ExpressCraft.Bootstrap.BootSize);
            } else {
                this.setEnumClassValue("btn-", ExpressCraft.Bootstrap.BootSize, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.BootSize, value, "G").toLowerCase(), "_", "-"));
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.ButtonGroup", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "btn-group", typos);
            this.setAttribute("role", "group");
        },
        getButtonSize: function () {
            var x = this.getEnumClassValue("btn-group-", ExpressCraft.Bootstrap.BootSize);
            if (x == null) {
                return ExpressCraft.Bootstrap.BootSize.None;
            } else {
                return x;
            }
        },
        setButtonSize: function (value) {
            if (value === ExpressCraft.Bootstrap.BootSize.None) {
                this.clearEnumClassValue("btn-group-", ExpressCraft.Bootstrap.BootSize);
            } else {
                this.setEnumClassValue("btn-group-", ExpressCraft.Bootstrap.BootSize, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.BootSize, value, "G").toLowerCase(), "_", "-"));
            }
        },
        getVertical: function () {
            return this.getClassTrue("btn-group-vertical");
        },
        setVertical: function (value) {
            this.setClassTrue("btn-group", !value);
            this.setClassTrue("btn-group-vertical", value);
        },
        getJustified: function () {
            return this.getClassTrue("btn-group-justified");
        },
        setJustified: function (value) {
            this.setClassTrue("btn-group-justified", value);
        },
        getDropup: function () {
            return this.getClassTrue("dropup");
        },
        setDropup: function (value) {
            this.setClassTrue("dropup", value);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.CheckBox", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        onCheckChanged: null,
        ctor: function (label, value) {
            if (value === void 0) { value = false; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "checkbox");
            var x = new ExpressCraft.Bootstrap.CheckBoxBase(value);
            ExpressCraft.Bootstrap.BootWidget.appendTypos$1(this, [new ExpressCraft.Bootstrap.Label([x, label])]);

            x.onTextChanged = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.CheckBox.f1);
        },
        getInline: function () {
            return ExpressCraft.Bootstrap.BootWidget.getInline(this, "checkbox");
        },
        setInline: function (value) {
            ExpressCraft.Bootstrap.BootWidget.setInline(this, "checkbox", value);
        },
        getChecked: function () {
            return ExpressCraft.Helper.isTrue(System.Boolean.toString(this.content.firstChild.firstChild.checked)) === 1;
        },
        setChecked: function (value) {
            this.content.firstChild.firstChild.checked = value;
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.CheckBox", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.CheckBox, {
        f1: function (obj) {
            if (!Bridge.staticEquals(this.onCheckChanged, null)) {
                this.onCheckChanged(this);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.CheckBoxBase", {
        inherits: [ExpressCraft.Bootstrap.BootBaseBox],
        ctor: function (value) {
            if (value === void 0) { value = false; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootBaseBox.ctor.call(this, Bridge.merge(document.createElement('input'), {
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
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (tier, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, 'clearfix visible' + tier.value + 'block', typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.FormGroup", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
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

                    if (Bridge.is(typos[i], ExpressCraft.Bootstrap.FormGroup) || Bridge.is(typos[i], ExpressCraft.Bootstrap.BootFormType)) {
                        list[i] = typos[i];
                    } else {
                        list[i] = new ExpressCraft.Bootstrap.FormGroup([typos[i]]);
                    }

                }
                ExpressCraft.Bootstrap.BootWidget.appendTypos$1(control, list);
            }
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "form-group", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.InputGroup", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "input-group", typos);

        },
        getInputSize: function () {
            var x = this.getEnumClassValue("input-group-", ExpressCraft.Bootstrap.BootSize);
            if (x == null) {
                return ExpressCraft.Bootstrap.BootSize.None;
            } else {
                return x;
            }
        },
        setInputSize: function (value) {
            if (value === ExpressCraft.Bootstrap.BootSize.None) {
                this.clearEnumClassValue("input-group-", ExpressCraft.Bootstrap.BootSize);
            } else {
                this.setEnumClassValue("input-group-", ExpressCraft.Bootstrap.BootSize, System.String.replaceAll(System.Enum.format(ExpressCraft.Bootstrap.BootSize, value, "G").toLowerCase(), "_", "-"));
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.NavbarBrand", {
        inherits: [ExpressCraft.Bootstrap.BootWidgetClickBase],
        ctor: function (href, typos) {
            if (href === void 0) { href = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootWidgetClickBase.$ctor1.call(this, Bridge.merge(document.createElement('a'), {
                className: "navbar-brand"
            } ), typos);
            if (!System.String.isNullOrWhiteSpace(href)) {
                this.content.href = href;
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.NavbarCollapseButton", {
        inherits: [ExpressCraft.Bootstrap.BootWidgetClickBase],
        ctor: function (_id) {
            this.$initialize();
            ExpressCraft.Bootstrap.BootWidgetClickBase.ctor.call(this, Bridge.merge(document.createElement('button'), {
                type: "button",
                className: "navbar-toggle collapsed"
            } ));
            if (!System.String.isNullOrWhiteSpace(_id) && !System.String.startsWith(_id, "#")) {
                _id = System.String.concat("#", _id);
            }
            ExpressCraft.Bootstrap.BootWidget.appendTypos$1(this, [new ExpressCraft.Bootstrap.SourceOnly(["Toggle navigation"]), new ExpressCraft.Bootstrap.IconBar(), new ExpressCraft.Bootstrap.IconBar(), new ExpressCraft.Bootstrap.IconBar()]);
            this.setAttribute("data-toggle", "collapse");
            this.setAttribute("data-target", _id);

            this.setAttribute("aria-expanded", "false");

            this.content.onmousedown = $asm.$.ExpressCraft.Bootstrap.NavbarCollapseButton.f1;
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.NavbarCollapseButton", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.NavbarCollapseButton, {
        f1: function (ev) {
            ev.stopImmediatePropagation();
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.NavbarContent", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (_id, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "collapse navbar-collapse", typos);
            if (!System.String.isNullOrWhiteSpace(_id)) {
                if (System.String.startsWith(_id, "#")) {
                    _id = _id.substr(1);
                }
                this.setId(_id);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.NavbarHeader", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "navbar-header", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Panel", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (type, typos) {
            if (type === void 0) { type = 1; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, System.String.concat("panel", ExpressCraft.Bootstrap.Extension.getClassTheme(" panel-", type)), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelBody", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "panel-body", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelFooter", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "panel-footer", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelGroup", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "panel-group", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelHeading", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "panel-heading", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Row", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "row", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TableResponsive", {
        inherits: [ExpressCraft.Bootstrap.BootStyleWidget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootStyleWidget.ctor.call(this, "table-responsive", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TextArea", {
        inherits: [ExpressCraft.Bootstrap.BootBaseBox],
        ctor: function (text, rows) {
            if (text === void 0) { text = ""; }
            if (rows === void 0) { rows = 1; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootBaseBox.ctor.call(this, Bridge.merge(document.createElement('textarea'), {
                className: "form-control"
            } ));
            this.setText(text);
            this.content.rows = Math.max(rows, 1);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TextBox", {
        inherits: [ExpressCraft.Bootstrap.BootBaseBox],
        $ctor1: function (text, type) {
            if (type === void 0) { type = 19; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootBaseBox.ctor.call(this, Bridge.merge(document.createElement('input'), {
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
