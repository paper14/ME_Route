'use strict'

var router = require('koa-router')();

module.exports = function(ctrl) {
	console.log("CTRL: ", ctrl);
  router
  	// .get("/", ctrl.page.homepage)
    .get('/', function * (next) {
      yield this.render('pages/home');
    })
    .get('/about', function * (next) {
      yield this.render('pages/about');
    });

  return router;
}