const express = require('express');
const router = express.Router();

// Make sure to import both fetchAnimals and deleteAnimals from your controller
const { fetchAnimals, deleteAnimal } = require('../controllers/controllers');

// Route to fetch animals from the API and store them in the database
router.get('/fetch-animals', fetchAnimals);

// Delete animal route
router.delete('/animals/:id', deleteAnimal);

module.exports = router;
