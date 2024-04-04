/** @format */

import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { mainTheme } from '../../themes/Theme';

export const CardStyles = {
  root: {
    width: 'auto',
    height: '65vh',
    marginTop: '2.5vh',
    marginLeft: '0.5vw',
    marginRight: '0.5vw',
    borderRadius: '10px',
    position: 'relative',
  },
  media: {
    height: '50%',
    width: 'auto',
    margin: '0.5vh',
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
};

export const CoachCardStyles = {
  root: {
    width: 'auto',
    height: '75vh', // Adjusted to fit the content
    marginTop: '2.5vh',
    marginLeft: '0.5vw',
    marginRight: '0.5vw',
    borderRadius: '10px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column', // Content will be stacked vertically
  },
  media: {
    flex: '1', // Image will take up remaining space
  },
};

export const StyledCardContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'default',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  flexWrap: 'wrap',
}));
