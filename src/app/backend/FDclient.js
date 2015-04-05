//
//This is the client code to connect to FDrest
//

define([
    'dojo/_base/declare',
    'dojo'
], function(declare,dojo){
	return declare(null, {
	    baseURL: 'http://localhost:3007',
	    isAvailable: function() {
	        // Using dojo.xhrGet, as very little information is being sent
            dojo.xhrGet({
                // The URL of the request
                url: this.baseURL + '/monitoring/isAlive',
                // The success callback with result from server
                load: function(newContent) {
                    this.log('monitoring/isAlive -> ' + newContent);
                },
                // The error handler
                error: function() {
                    // Do nothing -- keep old content there
                }
            });
	    },
	    log: function(msg) {
            console.log( msg );
        }
	
	});
});

