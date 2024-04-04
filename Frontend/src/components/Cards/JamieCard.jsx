/** @format */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import jamieImage from '../../assets/judoImages/jamie.jpg';
import { CardStyles, CoachCardStyles } from './CardStyles';

export default function MediaCard() {
  return (
    <Card sx={CoachCardStyles.root}>
      <CardMedia
        sx={CoachCardStyles.media}
        image={jamieImage}
        title="Jamie Hopson"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sensei Jamie Hopson
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Head Coach
        </Typography>
      </CardContent>
    </Card>
  );
}
