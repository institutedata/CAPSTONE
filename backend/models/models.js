const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: String,
  location: String,
  main_prey: String,
  habitat: String,
  predators: String,
  diet: String,
  favorite_food: String,
  type: String,
  slogan: String,
  lifespan: String,
  weight: String,
  top_speed: String,
});

module.exports = mongoose.model('Animal', animalSchema);
