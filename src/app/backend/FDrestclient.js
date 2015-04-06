//
//This is the client code to connect to FDrest
//

define([
    'dojo/_base/declare',
    'dojo/request'
], function(declare,request){
	return declare(null, {
	    baseURL: 'http://localhost:3007',
	    isAvailable: function() {
	        return request(this.baseURL + '/rest/monitoring/isAlive', {
                headers: {
                     'X-Requested-With': null
                }
                //, withCredentials: true
            });
	    }	
	});
});

