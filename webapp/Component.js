sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"

], function(UIComponent, JSONModel, ResourceModel,  HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            // call the init funcion of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data models 
            var oData = {
                recipient: {
                    name: "Recipient Name"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel); 
            
            //set Dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        exit: function() {
            this._helloDialog.distroy();
            delete this._helloDialog;
        },

        openHelloDialog: function() {
            this._helloDialog.open();
        }
    })
});