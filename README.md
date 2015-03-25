# FDchat

[![Join the chat at https://gitter.im/FairyDwarves/FDchat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/FairyDwarves/FDchat?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
A chat client app specially designed for our needs

Install dependencies :
   > npm install
   > bower install

Web test from source (with livereload) :
   > grunt serve

Deploy from source for online test : [NOT TESTED YET]
   > grunt deploy
   
Web build :
   > grunt build

Android build and test :
   > grunt cordova
   > adb install platforms/android/ant-build/MainActivity-debug.apk

Browser build and test :
   > cordova platform add browser
   > cordova build --debug browser
   > firefox platforms/browser/www/index.html
   
