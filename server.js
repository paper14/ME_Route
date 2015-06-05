'use strict'

var koa = require('koa.io');
var router = require('koa-router')();
var serve = require('koa-static');
var swig = require('koa-swig');
var path = require('path');
var mongoose = require('mongoose');
var locals = require('koa-locals');
var bodyParser = require('koa-body-parser');
var url = require('./url.js');

var app = koa();

app.use(bodyParser());

locals(app, {});

this.locals = {};
this.locals.test = "Nickos!";

console.log("LOCALS: ", this.locals);

app.use(function * (next) {
  this.render = swig({
    root: path.join(__dirname, 'templates'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    locals: this.locals
  });
  yield * next;
});
// app.context.swig = swig({
//   root: path.join(__dirname, 'templates'),
//   autoescape: true,
//   cache: 'memory',
//   ext: 'html',
//   // locals: locals,
//   // filters: filters,
//   // tags: tags,
//   // extensions: extensions
// });

// console.log("ROUTER TEST: ", url());
// console.log("ROUTER: ", router);


// app.use(serve(__dirname + '/assets'));

var apps = require('./applications');
var policies = require('./policies');
app.use(function * (next) {

  this.forms = apps.forms;
  this.models = apps.models;

  yield * next;
});
console.log("APPS: ", apps);
console.log("POLICIES: ", policies.test);

var config = require('./configurations');
console.log("CONFIG: ", config);
// console.log("APPS: ", apps.controllers);

// PLEASE AVOID CALLING FUNCTIONS IN CONSOLE.LOG!
// console.log("URL: ", url(apps));

// console.log("APPS CONTROLLER: ", apps.controllers.page);
var router = url(apps.controllers, policies);
app
  .use(router.routes())
  .use(router.allowedMethods());

// console.log("APP ROUTER: ", router);

app
  .use(serve(path.join(__dirname, "bower_components")))
  .use(serve(path.join(__dirname, "assets")));


/*database*/
mongoose.connect(config.mongo.url, config.mongo.options);
// console.log("MONGOOSE: ", mongoose.connections[0].models);

var port = Number(process.env.PORT || 3001);
app.listen(port);
console.log("Listening to: ", port);