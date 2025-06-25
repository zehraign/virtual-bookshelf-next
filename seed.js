const mongoose = require('mongoose');
const { User, Book } = require('./models');

mongoose.connect('mongodb://localhost:27017/virtualbookshelf');

const seed = async () => {
  await User.deleteMany({});
  await Book.deleteMany({});

  const user = new User({
    username: 'alice',
    email: 'alice@example.com',
    password: '123456',
  });

  const book = new Book({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    currentPage: 0,
    totalPages: 180,
    user: user._id,
  });

  await user.save();
  await book.save();

  console.log('✅ Seed erfolgreich!');
  mongoose.disconnect();
};

seed();

