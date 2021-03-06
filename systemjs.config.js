/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',

      // other libraries
      // BUNDLED 'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',

      // Slender Site
      'slender-site': 'slender-site.config.js',
      'local': 'local'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      /* BUNDLED
      rxjs: {
        defaultExtension: 'js'
      }, */
      local: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });

})(this);

//Cache Busting
var systemLocate = System.locate;
d = new Date(); 
var cacheBustStr = d.getDay();
System.locate = function (load) {
  var System = this; // its good to ensure exact instance-binding
  return Promise.resolve(systemLocate.call(this, load)).then(function (address) {

    if (address.endsWith('.html.js')) {
      //This feels a little hacky, not sure how to allow html files in the main config.
      address = address.slice(0, -3);
    }

    return address + '?cacheBust=' + cacheBustStr;
  });
}
