sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], function(Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough", {

        onInit: function() {
            var oData = {
                recipient: {
                    name: "Recipient Name"
                }
            }
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello: function() {
            // show native or vanilla js alert
            MessageToast.show("Hi there from controller!");
        }
    })
})