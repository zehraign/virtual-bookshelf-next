const express = require('express');
const router = express.Router();

const Book = require('../models/Book');
const Review = require('../models/Review');

// alle Bücher abrufen
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

//  Buchdetails abrufen
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) res.json(book);
  else res.status(404).json({ message: 'Buch nicht gefunden' });
});

//  neues Buch erstellen
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
});

//  Rezension erstellen
router.post('/:bookId/reviews', async (req, res) => {
  const review = new Review({
    ...req.body,
    bookId: req.params.bookId,
  });
  await review.save();
  res.status(201).json(review);
});

//  Rezensionen abrufen
router.get('/:bookId/reviews', async (req, res) => {
  const reviews = await Review.find({ bookId: req.params.bookId });
  res.json(reviews);
});

module.exports = router;
