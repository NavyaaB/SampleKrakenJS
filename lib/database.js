'use strict';

var mongoose = require('mongoose');

module.exports = function() {
  return {
    config: function(conf) {
      mongoose.connect('mongodb://' + conf.host + '/' + conf.database);

      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'Database connection error: '));
      db.on('open', function() {
        console.log('Connected to database!');
      });
    }
  };
}();
