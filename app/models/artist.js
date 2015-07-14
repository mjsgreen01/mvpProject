var db = require('../config');
var Promise = require('bluebird');
var Song = require('./song.js');
var Song_Involvement = require('./song_involvement.js');

var Artist = db.Model.extend({
  tableName: 'artists',
  songs: function() {
    return this.hasMany(Song).through(Song_Involvement);
  },
  song_involvements: function() {
    return this.hasMany(Song_Involvement);
  },
  hasTimestamps: true
});

module.exports = Artist;
