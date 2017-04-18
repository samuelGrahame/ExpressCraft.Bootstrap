/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Intelogy.Invoice", function ($asm, globals) {
    "use strict";

    Bridge.define("Intelogy.Invoice.Program", {
        $main: function () {
            ExpressCraft.Application.run(Bridge.merge(new ExpressCraft.Bootstrap.BootWindow.ctor([new ExpressCraft.Bootstrap.Panel(ExpressCraft.Bootstrap.BootTheme.Info, [new ExpressCraft.Bootstrap.PanelHeading([new ExpressCraft.Bootstrap.Heading("h4", ["Invoice Demo"])]), new ExpressCraft.Bootstrap.PanelBody([Bridge.merge(new ExpressCraft.Bootstrap.Button.$ctor1("New Invoice", ExpressCraft.Bootstrap.BootTheme.Primary), {
                setOnClick: $asm.$.Intelogy.Invoice.Program.f1
            } )])])]), {
                setWindowstate: ExpressCraft.WindowState.Maximized
            } ).assignHandles());
        }
    });

    Bridge.ns("Intelogy.Invoice.Program", $asm.$);

    Bridge.apply($asm.$.Intelogy.Invoice.Program, {
        f1: function (ev) {
            new ExpressCraft.Bootstrap.BootWindow.ctor([new ExpressCraft.Bootstrap.Panel(ExpressCraft.Bootstrap.BootTheme.Info, [new ExpressCraft.Bootstrap.PanelHeading([new ExpressCraft.Bootstrap.Heading("h4", ["New invoice"])]), new ExpressCraft.Bootstrap.PanelBody([new ExpressCraft.Bootstrap.Row([new ExpressCraft.Bootstrap.FormGroupList([ExpressCraft.Bootstrap.ColExtentions.applyColumns(Bridge.merge(new ExpressCraft.Bootstrap.Label(["Customer:"]), {
                setFor: "CustomerName"
            } ), [ExpressCraft.Bootstrap.Rule.MD1]), new ExpressCraft.Bootstrap.Col.ctor(ExpressCraft.Bootstrap.Rule.MD3, [Bridge.merge(new ExpressCraft.Bootstrap.TextBox.ctor(), {
                setId: "CustomerName"
            } )]), ExpressCraft.Bootstrap.ColExtentions.applyColumns(Bridge.merge(new ExpressCraft.Bootstrap.Label(["Invoice Date:"]), {
                setFor: "InvoiceDate"
            } ), [ExpressCraft.Bootstrap.Rule.MD1, ExpressCraft.Bootstrap.Rule.MDO3]), new ExpressCraft.Bootstrap.Col.ctor(ExpressCraft.Bootstrap.Rule.MD4, [Bridge.merge(new ExpressCraft.Bootstrap.TextBox.ctor("date"), {
                setId: "InvoiceDate"
            } )])])])]), new ExpressCraft.Bootstrap.PanelFooter(["Copyright © " + Bridge.Date.today().getFullYear() + " Intelogy Group Pty Ltd"])])]).assignHandles().show();
        }
    });
});
