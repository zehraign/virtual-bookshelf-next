const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  readingList: [{ 
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    status: { type: String, enum: ['want to read', 'reading', 'read'], default: 'want to read' }
  }]
});

module.exports = mongoose.model('User', userSchema);

