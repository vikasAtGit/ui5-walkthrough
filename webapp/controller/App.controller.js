sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

], function(Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough", {
        onShowHello: function() {
            // show native or vanilla js alert
            MessageToast.show("Hi there from controller!");
        }
    })
})