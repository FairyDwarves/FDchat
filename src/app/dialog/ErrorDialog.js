define([
    'dojo/_base/declare', 
    'dojo/_base/lang',
    'dojo',
    'dijit/Dialog',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./LoginDialog.html',
    'dijit/form/Button',
    'dijit/form/Form',
    'dijit/form/TextBox',
    'dojox/layout/TableContainer'
], function(declare, lang, dojo, Dialog, _WidgetsInTemplateMixin, template){
	return declare(null, [Dialog, _WidgetsInTemplateMixin], {
		
        title: 'ERROR',
		style: 'width:400px',
		templateString: template,
		
		constructor: function(options){
			lang.mixin(this, options);
		},
		
		onClose: function(){
            //do something if needed
		}
	
	});
});

