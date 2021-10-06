sap.ui.define([
                "sap/ui/core/UIComponent",
                "sap/ui/model/json/JSONModel",
                "sap/ui/model/resource/ResourceModel"
              ], 

function( UIComponent,JSONModel ,ResourceModel) 
{
	"use strict";
 return UIComponent.extend("Roger_test.component ",{
 //Inherit Manifest.json file form Component.js  
    metadata : {
                manifest : "json"
               },
     
    
      onInit: function ()
      {
      
        var omodel = new sap.ui.model.json.JSONModel(  
          jQuery.sap.getModulePath( "Roger_test" ) + "/model/dummy.json" );
      this.getOwnerComponent().setModel(omodel,"milly" );


      }  

 });
}

);