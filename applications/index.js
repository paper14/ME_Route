'strict mode'

var require_directory = require('require-directory');
var applications = require_directory(module);
var keys = Object.keys(applications);
var co = require('co');

module.exports = function(){
  var models = {};
  var controllers = {};
  var forms = {};

  keys.forEach(function(key){
    if(applications[key] === undefined) return;

    models[key] = applications[key].model || {};
    controllers[key] = applications[key].controller || {};
    forms[key] = applications[key].form || {};
  });

  return {
      models: models,
      controllers: controllers,
      forms: forms
    }
}();