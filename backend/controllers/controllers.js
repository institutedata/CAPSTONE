const axios = require('axios');
const Animal = require('../models/models'); // Ensure this points to your actual model file
require('dotenv').config();

const fetchAnimals = async (req, res) => {
  const animalsList = [
    'Spider Monkey',
    'Golden Lion Tamarin',
    'Squirrel Monkey',
    'Tarantula',
    // 'Cotton Top Tamarin',
    // 'Green Iguana',
    'Alligator',
    'Emperor Tamarin',
    // 'Galápagos Tortoise',
  ];

  let savedAnimals = [];
  let errors = [];

  for (const name of animalsList) {
    try {
      const response = await axios.get(`${process.env.API_URL}${encodeURIComponent(name)}`, {
        headers: { 'X-Api-Key': process.env.API_KEY }
      });

      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        const animalData = response.data[0];
        const { locations, characteristics } = animalData;
        const newAnimal = new Animal({
          name: animalData.name,
          location: locations.join(', '),
          main_prey: characteristics.main_prey,
          habitat: characteristics.habitat,
          predators: characteristics.predators,
          diet: characteristics.diet,
          favorite_food: characteristics.favorite_food,
          type: characteristics.type,
          slogan: characteristics.slogan,
          lifespan: characteristics.lifespan,
          weight: characteristics.weight,
          top_speed: characteristics.top_speed,
        });
        await newAnimal.save();
        savedAnimals.push(newAnimal);
      } else {
        errors.push({ animal: name, error: 'No data found for animal' });
      }
    } catch (error) {
      console.error(`Error fetching data for ${name}:`, error);
      errors.push({ animal: name, error: error.message });
    }
  }

  if (errors.length > 0) {
    return res.status(500).json({ success: false, message: 'Failed to fetch data for some animals', errors });
  }

  res.status(200).json({ success: true, message: 'Animals data fetched and stored successfully', animals: savedAnimals });
};

const deleteAnimal = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAnimal = await Animal.findByIdAndDelete(id);
    if (!deletedAnimal) {
      return res.status(404).json({ success: false, message: 'Animal not found' });
    }
    res.status(200).json({ success: true, message: 'Animal deleted successfully', animal: deletedAnimal });
  } catch (error) {
    console.error('Error deleting animal:', error);
    res.status(500).json({ success: false, message: 'Failed to delete animal' });
  }
};

module.exports = { fetchAnimals, deleteAnimal };

