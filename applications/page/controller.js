'use strict'

class MyPageController {

  * homepage(next) {
    let data = yield this.models.page.page.findOne({})
    console.log(data);
    yield * this.render("pages/home.html");
  }

  * about(next) {
    yield * this.render("pages/about.html");
  }

}

module.exports = new MyPageController();