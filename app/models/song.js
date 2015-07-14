var db = require('../config');
var Promise = require('bluebird');
var Artist = require('./artist.js');
var Song_Involvement = require('./song_involvement.js');

var Song = db.Model.extend({
  tableName: 'songs',
  artists: function() {
    return this.hasMany(Artist).through(Song_Involvement);
  },
  song_involvements: function() {
    return this.hasMany(Song_Involvement);
  },
  hasTimestamps: true
});

module.exports = Song;
