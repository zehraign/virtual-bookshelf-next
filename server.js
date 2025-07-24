const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users'); // ← muss vorhanden sein

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);
app.use('/users', userRoutes); // ← GANZ WICHTIG

mongoose.connect('mongodb://localhost:27017/virtual-bookshelf')
  .then(() => {
    console.log('✅ MongoDB verbunden'); 
    app.listen(3000, () => console.log('🚀 Server läuft auf http://localhost:3000'));
  })
  .catch(err => console.error('❌ MongoDB-Verbindungsfehler:', err));
