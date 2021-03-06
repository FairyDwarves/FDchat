/* exported dojoConfig */
var dojoConfig = {
        // Enable the AMD loader
        async: true,
        // Define the base URL for all of our modules and packages
        baseUrl: '.',
        // Enable debugging
        isDebug: true,
        // Register the packages we are going to be using. These same packages should be defined in the
        // build profile in `app.profile.js`.
        packages: [
            // Using a string as a package is shorthand for `{ name: 'app', location: 'app' }`
            {
                name: 'app',
                location: 'app'
            }, {
                name: 'dijit',
                location: '//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dijit'
            }, {
                name: 'dojo',
                location: '//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo'
            }, {
                name: 'dojox',
                location: '//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojox'
            }, {
                name: 'dgrid',
                location: '//cdn.rawgit.com/SitePen/dgrid/v0.3.16'
            }, {
                name: 'xstyle',
                location: '//cdn.rawgit.com/kriszyp/xstyle/v0.2.1'
            }, {
                name: 'put-selector',
                location: '//cdn.rawgit.com/kriszyp/put-selector/v0.3.5'
            }, {
                name: 'dojo-bootstrap',
                location: '//rawgit.com/xsokev/Dojo-Bootstrap/master'
            }
        ],

        // Use the smaller, faster "lite" CSS selector engine, which works in all browsers IE8+
        selectorEngine: 'lite',
        // Fix the loader to use normal AMD resolution of unregistered module paths (relative to `baseUrl`)
        // instead of the legacy Dojo resolution method (relative to the parent directory of `baseUrl`)
        tlmSiblingOfDojo: false
};
