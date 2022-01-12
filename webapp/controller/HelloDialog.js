sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"

], function (ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {
        constructor: function (oView) {
            this._oView = oView;
        },
        exit: function () {
            delete this._oView;
        },
        open: function () {
            var oView = this._oView;

            // create the dialog lazily
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }

                // Load XML fragments asynchronously
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    //connect dialog to the root view of the component (models, lifecycles)
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            }
            else {
                oView.byId("helloDialog").open();
            }


        }
    })
})