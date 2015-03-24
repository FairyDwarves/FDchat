module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: '<%= jshint.all %>',
      scripts: {
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    dojo: {
      dist: {
        options: {
          dojo: 'src/dojo/dojo.js', // Path to dojo.js file in dojo source 
          load: 'build', // Optional: Utility to bootstrap (Default: 'build') 
          profile: 'profiles/app.profile_grunt.js', // Profile for build 
          profiles: [], // Optional: Array of Profiles for build 
          appConfigFile: '', // Optional: Config file for dojox/app 
          package: '', // Optional: Location to search package.json (Default: nothing) 
          packages: [], // Optional: Array of locations of package.json (Default: nothing) 
          require: '', // Optional: Module to require for the build (Default: nothing) 
          requires: [], // Optional: Array of modules to require for the build (Default: nothing) 
          action: '', // Optional: Build action, release, help. clean has been deprecated. 
          cwd: './', // Directory to execute build within 
          dojoConfig: '', // Optional: Location of dojoConfig (Default: null), 
          // Optional: Base Path to pass at the command line 
          // Takes precedence over other basePaths 
          // Default: null 
          basePath: ''
        }
      },
      options: {
        // You can also specify options to be used in all your tasks 
        dojo: 'src/dojo/dojo.js', // Path to dojo.js file in dojo source 
        load: 'build', // Optional: Utility to bootstrap (Default: 'build') 
        profile: 'profiles/app.profile_grunt.js', // Profile for build 
        profiles: [], // Optional: Array of Profiles for build 
        appConfigFile: '', // Optional: Config file for dojox/app 
        package: '', // Optional: Location to search package.json (Default: nothing) 
        packages: [], // Optional: Array of locations of package.json (Default: nothing) 
        require: '', // Optional: Module to require for the build (Default: nothing) 
        requires: [], // Optional: Array of modules to require for the build (Default: nothing) 
        action: '', // Optional: Build action, release, help. clean has been deprecated. 
        cwd: './', // Directory to execute build within 
        dojoConfig: '', // Optional: Location of dojoConfig (Default: null), 
        // Optional: Base Path to pass at the command line 
        // Takes precedence over other basePaths 
        // Default: null 
        basePath: ''
      }
    },
    stylus: {
      compile: {
        options: {
        },
        files: {
          'app/resources/app.css': 'src/app/resources/app.styl',
        }
      }
    },
    minifyHtml: {
        options: {
            cdata: true
        },
        dist: {
            files: {
                'release/index.html': 'src/index.html'
            }
        }
    },
    cordova_cli: {
      options: {
        cmd : 'build',
        options : [ '--debug' ],
        platforms : [ 'android' ]
      },
      your_target: {
        // Target-specific file lists and/or options go here. 
      },
    }
  });
  
  // Load the plugins that provides more tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-dojo');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-minify-html');
  grunt.loadNpmTasks('grunt-cordova-cli');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
