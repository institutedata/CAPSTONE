/** @format */

import React from 'react';
import { Typography, Button } from '@mui/material';
import { HeroSection } from '../themes/styles/default';

const Hero = () => {
  return (
    <HeroSection>
      <Typography variant="h2" gutterBottom>
        Welcome to Hajamie Judo
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Not just a sport, but a way of life
      </Typography>
      <Button variant="contained" color="primary">
        Free Trial Period
      </Button>
    </HeroSection>
  );
};

export default Hero;
