'use strict'

var koa = require('koa.io');
var router = require('koa-router')();
var serve = require('koa-static');
var render = require('koa-swig');
var path = require('path');
var url = require('./url.js');

var app = module.exports = koa();

app.context.render = render({
  root: path.join(__dirname, 'templates'),
  autoescape: true,
  cache: 'memory',
  ext: 'html',
  // locals: locals,
  // filters: filters,
  // tags: tags,
  // extensions: extensions
});

// console.log("ROUTER TEST: ", url());
// console.log("ROUTER: ", router);


// app.use(serve(__dirname + '/assets'));

var apps = require('./applications');

console.log("APPS: ", apps.controllers);

console.log("URL: ", url(apps));

console.log("APPS CONTROLLER: ", apps.controllers.page);
var router = url(apps.controllers);
app
  .use(router.routes())
  .use(router.allowedMethods());

console.log("APP ROUTER: ", router);

var port = Number(process.env.PORT || 3000);
app.listen(port);
console.log("Listening to: ", port);