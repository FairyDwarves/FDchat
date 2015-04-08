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
		
        title: 'Connect to XMPP',
		style: 'width:400px',
		templateString: template,
		
		constructor: function(options){
			lang.mixin(this, options);
		},
		
		onSubmit: function(){
			var widget = this;
			dojo.xhrPost({
				url: this.url,
				form: this.loginForm.id,
				handleAs: 'json',
				load: function(response){
					if (response.status == 'success') {
						widget.onSuccess(response);
					} else {
						widget.onFailure(response);
					}
				}
			});
		},
	
		onSuccess: function(response){
			
		},
		
		onFailure: function(response){
			
		}
	
	});
});
	/*
	connection: null,
    start_time: null,

    log: function (msg) {
        $('#log').append("<p>" + msg + "</p>");
    },

    send_ping: function (to) {
        var ping = $iq({
            to: to,
            type: "get",
            id: "ping1"}).c("ping", {xmlns: "urn:xmpp:ping"});

        Hello.log("Sending ping to " + to + ".");

        Hello.start_time = (new Date()).getTime();
        Hello.connection.send(ping);
    },

    handle_pong: function (iq) {
        var elapsed = (new Date()).getTime() - Hello.start_time;
        Hello.log("Received pong from server in " + elapsed + "ms.");

        Hello.connection.disconnect();
        
        return false;
    },
    
    autoOpen: true,
    draggable: false,
    modal: true,
    buttons: {
        "Connect": function () {
           $(document).trigger('connect', {
                jid: $('#jid').val(),
                password: $('#password').val()
            });
        
            connect(jid,password);

            
            $('#password').val('');
            $(this).dialog('close');
        }
    },
    
    connect : function(jid, password) {
        var conn = new Strophe.Connection(
            "http://bosh.metajack.im:5280/xmpp-httpbind");

        conn.connect(jid, password, function (status) {
            if (status === Strophe.Status.CONNECTED) {
                $(document).trigger('connected');
            } else if (status === Strophe.Status.DISCONNECTED) {
                $(document).trigger('disconnected');
            }
        });
    }
	
	);
});
*/
