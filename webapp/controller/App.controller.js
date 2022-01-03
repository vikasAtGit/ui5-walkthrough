sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function(Controller, MessageToast, JSONModel, ResoureModel) {
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

            // setting resource model 
            var i18nModel = new ResoureModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [''],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n");
        },

        onShowHello: function() {
            // read msg from i18n model 
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show native or vanilla js alert
            MessageToast.show(sMsg);
        }
    })
})