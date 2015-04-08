//
//This is the client code to connect to FDrest
//

define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/request'
], function(declare, lang, request){
        return declare(null, {
            baseURL: 'http://localhost:3007',
            log: function(msg){
                console.log( msg );
            },
            isAvailable: function() {
                return request(this.baseURL + '/rest/monitoring/isAlive', {
                    headers: {
                         'X-Requested-With': null
                    }
                    //, withCredentials: true
                }).then(lang.hitch(this,function(data){
                        this.log('/rest/monitoring/isAlive done -> ' + data);
                        return data; // log and success
                    }),lang.hitch(this,function(err){
                        this.log('/rest/monitoring/isAlive error -> ' + err);
                        throw err; // log and propagate err
                    }));
            },
        });
});

