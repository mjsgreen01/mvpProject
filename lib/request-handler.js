var request = require('request');
var Artist = require('../app/models/artist.js');



exports.renderIndex = function(req, res) {
  new Artist({'name': 'J Dilla'})
  .fetch()
  .then(function(model) {
    console.log('tried to fetch artist ', model);
    res.sendfile(__dirname + '../public/index.html');
  });
};
