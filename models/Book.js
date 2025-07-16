const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  createdBy: String, // z.B. "Benedict"
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', bookSchema);

