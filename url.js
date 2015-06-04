'use strict'

var router = require('koa-router')();
module.exports = function() {

  router
    .get('/', function * (next) {
      yield this.render('layout');
    });

  return router;
}