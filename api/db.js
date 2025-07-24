const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/virtual-bookshelf', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('✅ MongoDB verbunden');
});

module.exports = db;
