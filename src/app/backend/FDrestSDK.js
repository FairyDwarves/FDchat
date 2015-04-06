//
//This is the client code to connect to FDrest
//

define([
    'dojo/_base/declare',
    'dijit/ProgressBar',
    './FDrestclient'
], function(declare,ProgressBar,RestClient){
	return declare(null, {
	    log: function(msg){
            console.log( msg );
	    },
	    getLoadingBar: function() {
	        if (! this._loadingBar) {
	            this._loadingBar = new ProgressBar({
                    style: 'width: 300px'
                });
	        }
	        return this._loadingBar;
	    },
        setLoadingBar: function(pct) {
            this.getLoadingBar().set('value', pct % 100);
        },
        initialize: function() {            
            if (! this._client ){
                this._client=new RestClient();
            }
            var self=this;
            return this._client.isAvailable()
            .then(function(data){
                // do something with handled data
                self.log('/rest/monitoring/isAlive done -> ' + data);
                //TODO : keep going...
                        
                //Load this app online configuration
	            //TODO
	
	            //Discover the chat service
	            //TODO
	            
	            this.resolve(data);//this promise is fulfilled.
	            
            }, function(err){
                // handle an error condition
                self.log('/rest/monitoring/isAlive error -> ' + err);
                //TODO : cancel loading now.
                
                //propagate the error
                this.reject(err);// this promise is rejected.
                
            }, function(update){
                // handle a progress event
                self.log('/rest/monitoring/isAlive update -> ' + update);
                self.setLoadingBar(100);//set loading to 100%
            });
        }
	});
});

