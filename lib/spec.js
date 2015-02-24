'use strict';

var crypto = require('./crypto'),
    db = require('./database'),
    userRepository = require('./user');

module.exports = function(app) {
  return {
    onconfig: function(config, next) {
      crypto.setCryptLevel(config.get('bcrypt').difficulty);
      db.config(config.get('databaseConfig'));
      userRepository.seedUsers();

      next(null, config);
    }
  };
};
