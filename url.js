var router = require('koa-router')();
module.exports = function() {

  router
    .get('/', function * (next) {
      yield this.render('pages/home');
    })
    .get('/about', function * (next) {
      yield this.render('pages/about');
    });

  return router;
}