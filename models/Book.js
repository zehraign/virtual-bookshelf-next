const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  currentPage: Number,
  totalPages: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Book', bookSchema);


