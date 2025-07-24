const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../routes/users');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/virtual-bookshelf-test');
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('POST /users', () => {
  it('sollte einen neuen User erstellen', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'API-User', email: 'api@example.com' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('API-User');
    expect(res.body.email).toBe('api@example.com');
  });
});

