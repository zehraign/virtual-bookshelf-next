const express = require('express');
const router = express.Router();

const ReadingList = require('../models/ReadingList');

//  Leseliste abrufen
router.get('/:userId/reading-list', async (req, res) => {
  const list = await ReadingList.find({ userId: req.params.userId }).populate('bookId');
  res.json(list);
});

// Buch zur Leseliste hinzufügen
router.post('/:userId/reading-list', async (req, res) => {
  const entry = new ReadingList({
    userId: req.params.userId,
    bookId: req.body.bookId,
    status: req.body.status || 'want-to-read',
  });
  await entry.save();
  res.status(201).json(entry);
});

// Lesestatus ändern
router.patch('/:userId/reading-list/:id', async (req, res) => {
  const updated = await ReadingList.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(updated);
});

module.exports = router;
