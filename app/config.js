var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'mjsgreen01',
    password: 'password',
    database: 'mvpdb.db',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/mvp.sqlite')
  }
});

// create the schema here
db.knex.schema.hasTable('artists').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('artists', function (artist) {
      artist.increments('id').primary();
      artist.text('name');
      artist.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('songs').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('songs', function (song) {
      song.increments('id').primary();
      song.text('title');
      song.text('song_link');
      song.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('song_involvements').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('song_involvements', function (song_involvement) {
      song_involvement.increments('id').primary();
      song_involvement.integer('songs_id').references('songs.id');
      song_involvement.integer('artists_id').references('artists.id');
      song_involvement.boolean('primary');
      song_involvement.boolean('featured');
      song_involvement.boolean('producer');
      song_involvement.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});













module.exports = db;