//
//This is the client code to connect to FDrest
//

define([
    'dojo/_base/declare',
    'dojo/request'
], function(declare,request){
	return declare(null, {
	    baseURL: 'http://localhost:3007',
	    
	    log: function(msg) {
            console.log( msg );
        },
	    isAvailable: function() {
	        var self=this;
	        request(this.baseURL + '/rest/monitoring/isAlive', {
                headers: {
                     'X-Requested-With': null
                }
                //, withCredentials: true
            }).then(function(data){
                // do something with handled data
                self.log('/rest/monitoring/isAlive -> ' + data);
            }, function(err){
                // handle an error condition
                self.log('/rest/monitoring/isAlive -> ' + err);
            }, function(evt){
                // handle a progress event
                self.log('/rest/monitoring/isAlive -> ' + evt);
            });

	    }	
	});
});

