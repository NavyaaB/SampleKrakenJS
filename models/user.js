'use strict';

var bcrypt = require('bcrypt'),
    crypto = require('../lib/crypto'),
    mongoose = require('mongoose');

var userModel = function() {
  var userSchema = mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    fullname: String,
    role: String
  });

  userSchema.pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, crypto.getCryptLevel());
    }

    next();
  });

  userSchema.methods.passwordMatches = function(rawPassword) {
    return bcrypt.compareSync(rawPassword, this.password);
  };

  return mongoose.model('User', userSchema);
};

module.exports = new userModel();
