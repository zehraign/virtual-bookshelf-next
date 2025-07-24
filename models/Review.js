const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  rating: Number, // z. B. 1 bis 5
});

module.exports = mongoose.model('Review', reviewSchema);
