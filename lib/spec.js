'use strict';

var db = require('./database');

module.exports = function(app) {
  return {
    onconfig: function(config, next) {
      db.config(config.get('databaseConfig'));

      next(null, config);
    }
  };
};
