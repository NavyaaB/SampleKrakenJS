'use strict';

var app = module.exports = require('express')(),
    kraken = require('kraken-js'),
    options = require('./lib/spec')(app),
    port = process.env.PORT || 8000;

app.use(kraken(options));

app.on('start', function() {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
