/**
 * This file is the application's main JavaScript file. It is listed as a dependency in index.html and will
 * automatically load when index.html loads.
 *
 * Because this file has the special filename `main.js`, and because we've registered the `app` package in run.js,
 * whatever object this module returns can be loaded by other files simply by requiring `app` (instead of `app/main`).
 *
 * Our first dependency, `./Dialog`, uses a relative module identifier; you should use this type of notation for
 * dependencies *within* a package in order to ensure the package is fully portable. It works like a path, where `./`
 * refers to the current directory and `../` refers to the parent directory. If you are referring to a module in a
 * *different* package (like `dojo` or `dijit`), you should *not* use a relative module identifier.
 *
 * The second dependency is a plugin dependency; in this case, it is a dependency on the special functionality of the
 * `dojo/domReady` plugin, which simply waits until the DOM is ready before resolving. The `!` after the module name
 * indicates you want to use special plugin functionality; if you were to require just `dojo/domReady`, it would load
 * that module just like any other module, without the special plugin functionality. Note that this is just an example
 * to show how plugins work; because our scripts are loaded before `</body>` in index.html, we don’t need to wait for
 * DOM ready; it will already be ready.
 *
 * In all cases, whatever function is passed to define() is only invoked once, and the returned value is cached.
 *
 * More information about everything described about the loader throughout this file can be found at
 * <http://dojotoolkit.org/reference-guide/loader/amd.html>.
 */
define([ 'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/dom',
    'dojo/on',
    './ui',
    './backend/FDrestSDK',
    'dojo/domReady!',
], function (declare, lang, dom, on, UI, FDrestSDK) {
    return {
        _fdrestsdk: undefined,
        //access the FDrest SDK
        getFDrestSDK: function() {
            if (! this._fdrestsdk){
                this._fdrestsdk = new FDrestSDK();
            }
            return this._fdrestsdk;
        },
        _appUI: undefined,
        //access the FDchat UI
        getAppUI: function() {
            if (! this._appUI){
                this._appUI = new UI();
            }
            return this._appUI;
        },
        // Application Starter
        start: function() {
            this.bindEvents();

            on(dom.byId('connect'),'click, touchend',lang.hitch(this, function() {

                // performing "callbacks" with the process:
                this.getFDrestSDK().initialize().then(lang.hitch(this, function(value){
                    // Do something when the process completes

                    //Display the LoginDialog //TODO : login into chat or into REST ??

                    // Create a new instance of our custom Dijit dialog and place it in the DOM
                    ////////app.dialog = new LoginDialog().placeAt(document.body);

                    // It is important to remember to always call startup on widgets after you have added them to the DOM.
                    // It will not hurt if you do it twice, but things will often not work right if you forget to do it
                    ////////app.dialog.startup();

                    // And now we just show the dialog to demonstrate that, yes, the example app has loaded successfully
                    ////////app.dialog.show();



                }), lang.hitch(this,function(err){
                    // Do something when the process errors out

                    //display error message
                    this.getAppUI().showError(err);

                }));// then hitch
            }));// on hitch


            // Now that the app is loaded, we'll add an extra CSS class to the body to hide the loading message. Note that we
            // could also have used `dojo/dom-class` to do this, but for very simple one-off operations like these there is
            // usually no good reason to load an extra module.
            document.body.className += ' loaded';
        },


        // Update DOM on a Received Event
        receivedEvent: function(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');

            console.log('Received Event: ' + id);
        },
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicitly call 'app.receivedEvent(...);'
        onDeviceReady: function() {
            this.receivedEvent('deviceready');
        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },

    };

}); //define
