'use strict'

/*
 *	Schema Types;
 *	- String
 *
 */

var mongoose = require('mongoose');
var timestamp = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var PageSchema = new Schema({
  _id: String,
  name: String,
  slug: String,
  url: String
});

PageSchema.plugin(timestamp);

module.exports = mongoose.model("testdata", PageSchema);