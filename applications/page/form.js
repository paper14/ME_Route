'use strict'

module.exports = {
  title: {
    rules: [{
      rule: "isLength",
      args: [1],
      msg: "Name is required"
    }]
  },
  content: {
    optoinal: true
  }

}