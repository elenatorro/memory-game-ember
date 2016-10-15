/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');

module.exports = function(defaults) {
  var RobotoFonts, GoogleFonts;

  var app = new EmberApp(defaults, {
    babel: {
      experimental: true
    }
  });

  app.import(`${app.bowerDirectory}/materialize/dist/js/materialize.js`);
  app.import(`${app.bowerDirectory}/materialize/dist/css/materialize.css`);

  RobotoFonts = pickFiles(`${app.bowerDirectory}/materialize/fonts/roboto`, {
    srcDir: '/',
    destDir: '/fonts/roboto'
  });

  GoogleFonts = pickFiles(`public/fonts/**`, {
    srcDir: '/',
    destDir: '/fonts/'
  });

  return app.toTree(RobotoFonts, GoogleFonts);
};
