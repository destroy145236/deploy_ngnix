// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
