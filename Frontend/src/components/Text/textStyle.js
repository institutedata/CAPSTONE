/** @format */

// textStyles.js
import { styled } from '@mui/material/styles';

// Define a styled component for the whole div
export const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  padding: '1vh',
  marginTop: '5vh',
  textAlign: 'center',
}));

// Define a styled component for list items
export const StyledList = styled('ul')(({ theme }) => ({
  listStyleType: 'none', // Remove default list item bullets
  paddingLeft: theme.spacing(2), // Add left padding to align list items to the left
}));

// Define a styled component for list items
export const StyledListItem = styled('li')(({ theme }) => ({
  textAlign: 'left', // Align list items to the left
}));
