var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'mjsgreen01',
    password: 'password',
    database: 'mvpProject',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/mvp.sqlite')
  }
});

// create the schema here















module.exports = db;