
/* MongoDB */
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DB_PROVIDER || 'mongodb://127.0.0.1:27017/deltaDrop')

// let db = mongoose.connection;

// db.on('error', () => console.log('mongoose connection error'))
// db.once('open', () => console.log('mongoose connection successful'))




/* PostgreSQL/Sequelize */
const Sequelize = require('sequelize');
var db = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});




/* Redis */



module.exports = db;