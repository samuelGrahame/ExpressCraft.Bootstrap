Bridge.assembly("ExpressCraft.Bootstrap", function ($asm, globals) {
    "use strict";

    Bridge.define("ExpressCraft.Bootstrap.Typography.Abbr", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("abbr"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.Blockquote", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        statics: {
            createBlock: function (paragraph, footer, typos) {
                if (typos === void 0) { typos = []; }
                var a = new (System.Collections.Generic.List$1(Object))();

                a.add(new ExpressCraft.Bootstrap.Typography.Paragraph([paragraph]));
                a.add(new ExpressCraft.Bootstrap.Typography.Footer([footer]));
                a.addRange(typos);

                return a.toArray();
            }
        },
        ctor: function (paragraph, footer, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("blockquote"), ExpressCraft.Bootstrap.Typography.Blockquote.createBlock(paragraph, footer, typos));

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

    Bridge.define("ExpressCraft.Bootstrap.Typography.Code", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("code"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.DescriptionDetail", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("dd"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.DescriptionList", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("dl"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.DescriptionTitle", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("dt"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.Footer", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("footer"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.Heading", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (ht, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement(ht), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.Kbd", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("kbd"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.Mark", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("mark"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.Paragraph", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('p'), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.Pre", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("pre"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Typography.Small", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("small"), typos);

        }
    });
});
