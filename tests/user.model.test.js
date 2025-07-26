const mongoose = require('mongoose');
const User = require('../models/User');

describe('User Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/virtual-bookshelf-test');
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1 && mongoose.connection.db) {
      await mongoose.connection.db.dropDatabase(); // DB säubern
    }
    await mongoose.connection.close();
  });

  it('sollte einen User mit Name und Email erstellen', async () => {
    const user = new User({ name: 'Testuser', email: 'test@example.com' });
    const savedUser = await user.save();

    expect(savedUser.name).toBe('Testuser');
    expect(savedUser.email).toBe('test@example.com');
    expect(savedUser.readingList).toEqual([]);
  });
});

