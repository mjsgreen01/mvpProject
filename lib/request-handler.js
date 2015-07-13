var request = require('request');




exports.renderIndex = function(req, res) {
  res.sendfile(__dirname + '../public/index.html');
};