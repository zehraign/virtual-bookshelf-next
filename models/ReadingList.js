const mongoose = require('mongoose');

const readingListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  status: {
    type: String,
    enum: ['want-to-read', 'reading', 'read'],
    default: 'want-to-read',
  },
});

module.exports = mongoose.model('ReadingList', readingListSchema);
