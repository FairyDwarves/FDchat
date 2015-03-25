/*global module:false*/
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect['static'](require('path').resolve(dir));
};

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      all: [
        'src/app/**/*.js'
      ],
      options: {
        jshintrc: true
      }
    },    
    
    connect: {
      options: {
        port:9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      // load src code w/ livereload
      src: {
        options: {
          base: 'src'
        }
      },
      // load built app
      build: {
        options: {
          base: 'www'
        }
      }
    },

    //Open default browser at the app
    open: {
      src: {
        path: 'http://localhost:<%= connect.options.port %>/'
      },
      build: {
        path: 'http://localhost:<%= connect.options.port %>/'
      }
    },
    
    //setup watch tasks
    watch: {
      options: {
        nospan: true,
        livereload: LIVERELOAD_PORT
      },

      source: {
        files: ['./src/app/**/*.js'],
        tasks: ['jshint']
      },
      livereload:{
        options: {
          livereload:LIVERELOAD_PORT
        },
        files:[
          './src/**/*.js',
          './src/**/*.html',
          './src/**/*.css'
        ]
      }
    },
    
    clean: {
      // clean the output directory before each build
      build: ['www'],
      // clean useless file on production environment.
      final: ['www/**/*.consoleStripped.js','www/**/*.uncompressed.js','www/**/*.js.map', 'www/app/resources/*.styl', 'www/*.proc.html'],
      // clean bower packages
      bower: ['src/dijit', 'src/dojo', 'src/dgrid', 'src/dojo-bootstrap', 'src/dojox', 'src/put-selector', 'src/util', 'src/xstyle'],
    },
    
    //build dojo
    dojo: {
      dist: {
        options: {
          profile: 'profiles/app.profile_grunt.js', // Profile for build
        }
      },
      options: {
        // You can also specify options to be used in all your tasks
        dojo: 'src/dojo/dojo.js', // Path to dojo.js file in dojo source
        load: 'build', // Optional: Utility to bootstrap (Default: 'build')
        // profiles: [], // Optional: Array of Profiles for build
        // appConfigFile: '', // Optional: Config file for dojox/app
        // package: '', // Optional: Location to search package.json (Default: nothing)
        // packages: [], // Optional: Array of locations of package.json (Default: nothing)
        // require: '', // Optional: Module to require for the build (Default: nothing)
        // requires: [], // Optional: Array of modules to require for the build (Default: nothing)
        // action: '', // Optional: Build action, release, help. clean has been deprecated.
        cwd: './', // Directory to execute build within
        dojoConfig: '', // Optional: Location of dojoConfig (Default: null),
        // Optional: Base Path to pass at the command line
        // Takes precedence over other basePaths
        // Default: null
        basePath: './src',
        releaseDir: '../www'
      }
    },
    
    //generate stylesheets
    stylus: {
      compile: {
        options: {
        },
        files: {
          'www/app/resources/app.css': 'src/app/resources/app.styl',
        }
      }
    },
    
    //process html files to customize depending environments
    processhtml: {
      build: {
        files: {
          'www/index.proc.html': ['src/index.html']
        }
      }
    },
    
    //minify html files
    minifyHtml: {
        options: {
            cdata: true
        },
        dist: {
            files: {
                'www/index.html': 'www/index.proc.html'
            }
        }
    },
    
    //generate website on github pages to test easily online
    'gh-pages': {
      options: {
        base: 'src'
      },
      src: ['app/**', 'index.html']
    },
    
    //build mobile app with cordova
    cordova_cli: {
      'add-android': {
        cmd : 'add',
        plugins : [ 'platform' ],
        platforms : [ 'android' ]
      },
      'add-ios': {
        cmd : 'add',
        plugins : [ 'platform' ],
        platforms : [ 'ios' ]
      },
      'add-browser': {
        cmd : 'add',
        plugins : [ 'platform' ],
        platforms : [ 'ios' ]
      },
      'build-android': {
        cmd : 'build',
        options : '--debug',
        platforms : [ 'android' ]
      },
      'build-ios': {
        cmd : 'build',
        options : '--debug',
        platforms : [ 'ios' ]
      },
      'build-browser': {
        cmd : 'build',
        options : '--debug',
        platforms : [ 'ios' ]
      },      
      'build-android-release': {
        cmd : 'build',
        options : '--release',
        platforms : [ 'android' ]
      },
      'build-ios-release': {
        cmd : 'build',
        options : '--release',
        platforms : [ 'ios' ]
      },
      'build-browser-release': {
        cmd : 'build',
        options : '--release',
        platforms : [ 'ios' ]
      },      
    }    

  });   
    
  // Load the plugins that provides more tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-dojo');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-minify-html');
  grunt.loadNpmTasks('grunt-cordova-cli');

  grunt.registerTask('hint', ['jshint']);
  
  grunt.registerTask('build', ['jshint', 'clean:build', 'dojo', 'stylus', 'processhtml', 'minifyHtml']);
  
  grunt.registerTask('deploy', 'Deploys the built application', function(origin) {
  
     var ori = origin || 'src';
     var target = grunt.option('target') || 'browser';
     // do something useful with target here
  
     if (origin == 'src') {
         grunt.task.run('gh-pages');
     }
     if (origin == 'build' || origin == 'www') {
        grunt.task.run('build');
        grunt.task.run('clean:finalize');
        
        if( target == 'browser' )
        {
            grunt.task.run('cordova_cli:add-browser');
            grunt.task.run('cordova_cli:build-browser');
        }
        else if( target == 'android' )
        {
            grunt.task.run('cordova_cli:add-android');
            grunt.task.run('cordova_cli:build-android');
        }
        else if( target == 'ios' )
        {
            grunt.task.run('cordova_cli:add-ios');
            grunt.task.run('cordova_cli:build-ios');
        }
        
     }
     else {
        grunt.warn('Build origin must be specified, like build:src.');
        grunt.warn('Origins : [ src, <build|www> ]');
     }
  });

  grunt.registerTask('serve', function (origin) {
    var ori = origin || 'src';
    grunt.task.run([
      'jshint',
      'connect:' + ori,
      'open:' + ori,
      'watch'
    ]);
  });
  
  grunt.registerTask('default', ['jshint']);
  
};
