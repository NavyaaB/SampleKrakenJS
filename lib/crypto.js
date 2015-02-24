'use strict';

var crypto = function() {
  var level = -1;

  return {
    getCryptLevel: function() {
      return level;
    },
    setCryptLevel: function(newLevel) {
      if (level === -1) {
        level = newLevel;
      }
    }
  };
};

module.exports = crypto();
