/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Tema basado en bootstrap https://bootswatch.com/simplex/
  app.import("vendor/bootstrap.css");
  app.import("vendor/bootstrap.js");

  return app.toTree();
};
