import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  width: '300px', 
  height: '200px', 
  marginBottom: '16px', 
color: 'purple', 
border: '2px solid purple',
margin: '8px',
});

const UserReviewCard = ({ name, rating, review }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h3" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          Rating: {rating}/5
        </Typography>
        <Typography variant="body2" component="p">
          {review}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default UserReviewCard;
