var express = require('express');
var partials = require('express-partials');

var handler = require('./lib/request-handler');

var app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
});

app.get('/artists/:name', handler.renderIndex);


module.exports = app;
