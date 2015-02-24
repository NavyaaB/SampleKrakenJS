'use strict';

module.exports = function() {
  var level = -1;

  return {
    getCryptLevel: function() {
      return level
    },
    setCryptLevel: function(newLevel) {
      if (level == -1) {
        level = newLevel;
      }
    }
  };
}();
