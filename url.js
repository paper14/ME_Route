'use strict'

var router = require('koa-router')();

module.exports = function(ctrl, p) {
  console.log("CTRL: ", ctrl);
  console.log("P: ", p.test);

  router
    .get("/", ctrl.page.homepage)
    .get("/about", ctrl.page.about)
    .get("/test", ctrl.page.testing)
    .get("/test/:name", ctrl.page.testing);

  return router;
}