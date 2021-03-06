# FDchat

[![Join the chat at https://gitter.im/FairyDwarves/FDchat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/FairyDwarves/FDchat?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
A chat client app specially designed for our needs

Prerequisites :
You need npm, bower, grunt-cli and cordova installed.

Install nodejs and npm :
Follow [Installing Node.js via package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) 

Install bower, grunt-cli and cordova globally :
```
$ sudo npm install -g bower cordova grunt-cli
```

Fork and Clone this repository.
```
$ git clone http://github.com/FairyDwarves/FDchat.git
$ cd FDchat
```
   
Install dependencies :
```
$ npm install
$ bower install
```

Web test from source (with livereload) :
```
$ grunt serve
```

Deploy from source for online test on http://fairydwarves.github.io/FDchat : [NOT TESTED YET]
```
$ grunt deploy
```
   
Web build :
```
$ grunt build
```

Web test from build (with livereload) :
```
$ grunt serve:build
```

Browser debug build and test :
```
$ grunt deploy:build
$ firefox platforms/browser/www/index.html
```

Android debug build and test :
```
$ grunt deploy:build --target=android
$ adb install platforms/android/ant-build/MainActivity-debug.apk
```

iOS build and test : [NOT TESTED YET]


