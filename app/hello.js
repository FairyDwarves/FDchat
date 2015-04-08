/*
$(document).bind('connect', function (ev, data) {
   

    Hello.connection = conn;
});

$(document).bind('connected', function () {
    // inform the user
    Hello.log("Connection established.");

    Hello.connection.addHandler(Hello.handle_pong, null, "iq", null, "ping1");

    var domain = Strophe.getDomainFromJid(Hello.connection.jid);
    
    Hello.send_ping(domain);

});

$(document).bind('disconnected', function () {
    Hello.log("Connection terminated.");

    // remove dead connection object
    Hello.connection = null;
});
*/
