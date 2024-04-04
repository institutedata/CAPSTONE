/** @format */

import axios from 'axios';
import { KEY } from '../config/APIkey'; // Import the API key

const { API_URL, API_KEY, API_HOST } = KEY;

export const fetchExercises = async ({
  name = '',
  type = '',
  muscle = '',
  difficulty = '',
  offset = 10,
}) => {
  const options = {
    method: 'GET',
    url: API_URL,
    params: { name, type, muscle, difficulty, offset },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.error('Error fetching exercises:', error);
    throw error;
  }
};

// export default fetchExercises;
