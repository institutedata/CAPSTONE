/** @format */

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Benefits from '../../assets/judoImages/benefitsImage.jpg';
import { CardStyles } from './CardStyles';
import BenefitsDialog from '../Dialog/BenefitsDialog';

export default function BenefitsCard() {
  return (
    <Card style={CardStyles.root}>
      <CardMedia style={CardStyles.media} image={Benefits} title="Judo Throw" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Benefits of Judo
        </Typography>
        <Typography variant="body2" color="text.primary">
          Judo offers numerous benefits, including improved physical
          fitness,enhanced mental discipline, increased self-confidence, and the
          development of effective self-defense skills.
        </Typography>
      </CardContent>
      <CardActions style={CardStyles.actions}>
        <BenefitsDialog dialogText={<Benefits />} />
      </CardActions>
    </Card>
  );
}
