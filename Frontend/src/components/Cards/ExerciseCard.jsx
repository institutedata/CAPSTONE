/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ExerciseCard = ({ exercise }) => {
  // Default image URL
  const defaultImageUrl = 'https://via.placeholder.com/150';

  const cardStyle = {
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    width: 'auto', // Set card width
    height: '100%', // Set card height
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <Card style={cardStyle}>
        <CardContent>
          {/* Render the exercise image or default image */}
          <div style={{ marginBottom: '10px' }}>
            <img
              src={exercise.imageUrl || defaultImageUrl}
              alt={exercise.name}
              style={{ width: '30%', height: 'auto' }}
            />
          </div>
          <Typography variant="h5" component="div">
            {exercise.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {exercise.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Muscle: {exercise.muscle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Equipment: {exercise.equipment}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Difficulty: {exercise.difficulty}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Instructions: {exercise.instructions}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    muscle: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    imageUrl: PropTypes.string, // Add imageUrl prop validation
  }).isRequired,
};

export default ExerciseCard;
