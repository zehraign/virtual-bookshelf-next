const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const userRoutes = require('../routes/users');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { dbName: 'test' });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  // Alle User-Daten nach jedem Test löschen
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
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

