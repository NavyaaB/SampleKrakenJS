'use strict';

var IndexModel = require('../models/index');

module.exports = function (router) {
  var indexModel = new IndexModel();

  router.get('/', function(req, res) {
    res.locals.current_path = req.path;

    res.render('index', indexModel);
  });
};
