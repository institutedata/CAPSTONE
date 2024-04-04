/** @format */

import { styled } from '@mui/material/styles';
import classImage from '../../assets/judoImages/class.jpg';

// Default div style with white background
export const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'space-evenly', // To evenly space the items horizontally
  alignItems: 'center', // To vertically center the items
  width: '100%',
  height: '20vh',
}));

// Hero section styles
export const HeroSection = styled('div')(({ theme }) => ({
  backgroundImage: `url(${classImage})`,
  backgroundPosition: 'center ',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: theme.palette.text.main,
  textAlign: 'center',
  width: '100%',
  height: '75vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '5vh 5vw', // Use relative units for padding to scale with container size
  margin: 0,

  '& h2': {
    fontFamily: theme.typography.fontFamily, // Use font family from theme
    fontWeight: 'bold',
    margin: '10px 0',
    fontSize: 'calc(3rem + 1vw)', // Adjust font size for h2
    textShadow: '0 0 5px black', // Add black outline around the text
  },

  '& h6': {
    fontFamily: theme.typography.fontFamily, // Use font family from theme
    fontWeight: 'bold',
    margin: '10px 0',
    fontSize: 'calc(1.5rem + 0.5vw)', // Adjust font size for h6
    textShadow: '0 0 5px black', // Add black outline around the text
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: -1,
  },
}));

// Default div style with white background
export const StyledPageArea = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.text.primary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  textAlign: 'center',
}));

// Home styled section
export const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh', // Set minimum height to fill the viewport
  padding: '3vw', // Add padding to create space around the content

  '@media (max-width: 600px)': {
    // flexDirection: 'column',
    alignItems: 'center', // Adjust alignment for small screens
  },
  '@media (min-width: 601px) and (max-width: 1024px)': {
    flexDirection: 'row', // Change flex direction to row for medium screens
    flexWrap: 'wrap', // Allow containers to wrap into multiple rows
    justifyContent: 'center', // Center containers horizontally for medium screens
  },
});
