var db = require('../config');
var Promise = require('bluebird');
var Artist = require('./artist.js');
var Song = require('./song.js');

var SongInvolvement = db.Model.extend({
  tableName: 'song_involvements',
  artist: function () {
    return this.belongsTo(Artist, 'artist_id');
  },
  song: function () {
    return this.belongsTo(Song, 'song_id');
  },
  hasTimestamps: true
});

module.exports = Song;
