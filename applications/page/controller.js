'use strict'

class MyPageController {

	* homepage(next) {
		yield * this.render("pages/home.html")
	}

	* search(next) {
    this.body = "this";
  }
}

module.exports = new MyPageController();