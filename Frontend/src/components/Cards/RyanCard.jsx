/** @format */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RyanImage from '../../assets/judoImages/ryanjudo.jpg';
import { CardStyles, CoachCardStyles } from './CardStyles';

export default function MediaCard() {
  return (
    <Card sx={CoachCardStyles.root}>
      <CardMedia
        sx={CoachCardStyles.media}
        image={RyanImage}
        title="Ryan Cameron"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sensei Ryan Cameron
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Assistant Coach
        </Typography>
      </CardContent>
    </Card>
  );
}
