var db = require('../config');
var Promise = require('bluebird');

var Artist = db.Model.extend({
  tableName: 'artists',
  songs: function() {
    return this.hasMany(Song).through(Song_Involvement);
  },
  hasTimestamps: true
});

module.exports = Artist;
