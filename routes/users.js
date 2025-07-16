const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Book = require('../models/Book');

// Leseliste eines Users abrufen
router.get('/:userId/reading-list', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('readingList.book');
    if (!user) return res.status(404).json({ error: 'User nicht gefunden' });
    res.json(user.readingList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
 
// Buch zur Leseliste hinzufügen
router.post('/:userId/reading-list', async (req, res) => {
  try {
    const { bookId, status } = req.body;
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User nicht gefunden' });

    user.readingList.push({ book: bookId, status: status || 'want to read' });
    await user.save();
    res.status(201).json(user.readingList);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Lesestatus eines Buches in der Leseliste updaten
router.patch('/:userId/reading-list/:itemId', async (req, res) => {
  try {
    const { status } = req.body;
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User nicht gefunden' });

    const item = user.readingList.id(req.params.itemId);
    if (!item) return res.status(404).json({ error: 'Leselisten-Eintrag nicht gefunden' });

    item.status = status || item.status;
    await user.save();
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Test-Route 
router.get('/', (req, res) => {
  res.json({ message: 'User-Route funktioniert!' });
});

module.exports = router;
