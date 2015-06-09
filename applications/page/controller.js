'use strict'

var path = require('path');

class MyPageController {

  * homepage(next) {
    let data = yield this.models.page.page.find({"generation": "generation 0"})
    console.log("DATA: ", data);
    console.log("ID: ", data[0]._id);
    console.log("PATH: ", path.dirname(this.path));
    let dir = path.dirname(this.path);
    yield * this.render("pages/home.html", {
      name: data[0].name,
      url: data[0].url,
      id: data[0]._id
    });
  }

  * about(next) {
    yield * this.render("pages/about.html");
  }

  * testing(next) {
    // console.log("PATH: ", this.path);
    // console.log("LAST PATH: ", path.basename(this.path));
    var slug = path.basename(this.path);
    // // console.log("SLUG: ", slug);
    let data = yield this.models.page.page.find({
      "slug": slug
    });

    // (data.length > 0) ? console.log("Ok") : console.log("Not Ok")
    // return this.status = 404;

    if (data.length > 0) {
      console.log("Ok");
    } else {
      console.log("Not ok");
      return this.status = 404;
    }

    console.log("TEST: ", data);

    yield * this.render("pages/test.html", {
      name: data[0].name,
      url: data[0].url,
      id: data[0]._id
    });
  }

}

module.exports = new MyPageController();