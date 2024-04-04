/** @format */

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from '../../assets/judoImages/logo.png';
import { CardStyles } from './CardStyles';
import AboutDialog from '../Dialog/AboutDialog';
import Hajamie from '../Text/Hajamie';

export default function AboutCard() {
  return (
    <Card style={CardStyles.root}>
      <CardMedia style={CardStyles.media} image={Logo} title="Judo Throw" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          About Hajamie Judo
        </Typography>
        <Typography variant="body2" color="text.primary">
          We are a growing club with a family-orientated atmosphere. Open to
          teaching people of all ages,sizes and physical ability.
        </Typography>
      </CardContent>
      <CardActions style={CardStyles.actions}>
        {/* <Button size="small">Read More</Button> */}
        <AboutDialog dialogText={<Hajamie />} />
      </CardActions>
    </Card>
  );
}
