"use strict"

module.exports = {
  url: process.env.MONGOLAB_URI || "mongodb://localhost:27017/mydb",
  options: {
    db: {
      native_parser: true
    },
    server: {
      auto_reconnect: true,
      poolSize: 2
    }
  }
}