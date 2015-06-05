'use strict'

var router = require('koa-router')();

module.exports = function(ctrl, p) {
  console.log("CTRL: ", ctrl);
  console.log("P: ", p.test);

  router
    .get("/", ctrl.page.homepage)
    .get("/about", ctrl.page.about);

  return router;
}