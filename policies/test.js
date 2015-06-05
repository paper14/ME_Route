'use strict'

module.exports = function * (next) {

  return "Nicko";

  yield * next;
}