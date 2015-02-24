'use strict';

var User = require('../models/user');

var userRepository = function() {
  return {
    seedUsers: function() {
      var user1 = new User({
        username: 'admin',
        password: '2359admin',
        role: 'admin',
        fullname: 'Administrator'
      }), user2 = new User({
        username: 'user',
        password: '2359user',
        role: 'user',
        fullname: 'User'
      });

      user1.save();
      user2.save();
    }
  };
};

module.exports = userRepository();
