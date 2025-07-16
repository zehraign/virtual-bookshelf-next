const express = require('express');
const router = express.Router();

const Book = require('../models/Book');
const Review = require('../models/Review'); 

// Alle Bücher anzeigen
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

// Neues Buch hinzufügen
router.post('/', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;




