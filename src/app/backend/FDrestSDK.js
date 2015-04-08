//
//This is the client code to connect to FDrest
//

define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojox/mobile/ProgressBar',
    './FDrestclient'
], function(declare,lang,ProgressBar,RestClient){
    return declare(null, {
        log: function(msg){
            console.log( msg );
        },
        initialize: function() {
            if (! this._client ){
                this._client=new RestClient();
            }
            return this._client.isAvailable()
                .then(lang.hitch(this,function(data){
                    // do something with handled data
                    //TODO : keep going...

                    //Load this app online configuration
                    //TODO

                    //Discover the chat service
                    //TODO

                    return data;//success

                }), lang.hitch(this,function(err){
                    // handle an error condition
                    //TODO : cancel loading now.

                    //propagate the error
                    throw err;//error

                }));// then hitch
        }
    });//declare
});//define

