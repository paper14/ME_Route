var koa = require('koa.io');
var router = require('koa-router')();

var app = koa();

router
  .get('/', function * (next) {
    this.body = "Hi There!";
  });

console.log("ROUTER: ", router.stack.routes);

app
  .use(router.routes())
  .use(router.allowedMethods());

var port = Number(process.env.PORT || 3000);
app.listen(port);
console.log("Listening to: ", port);