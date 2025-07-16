const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const userRoutes = require('./routes/users');

// MongoDB verbinden
mongoose.connect('mongodb://127.0.0.1:27017/virtual-bookshelf')
  .then(() => console.log('✅ MongoDB verbunden'))
  .catch((err) => console.error('❌ Fehler bei MongoDB-Verbindung:', err));

// Middleware
app.use(express.json());
const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

// Test-Route
app.get('/books', (req, res) => {
  res.json([{ title: 'Testbuch', author: 'Autor X' }]);
});

// Server starten
app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});

