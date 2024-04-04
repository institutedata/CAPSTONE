/** @format */

import { styled } from '@mui/material/styles';
import { mainTheme } from '../../themes/Theme';

// Footer styles
export const StyledFooter = styled('div')(({ theme }) => ({
  backgroundColor: '#b70000',
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 9999, // Set a high z-index to ensure it stays on top
}));

export const SocialMediaContainer = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
});

export const SocialMediaLink = styled('a')(({ theme }) => ({
  display: 'inline-block',
  margin: '0 8px',
  '& img': {
    width: '24px',
    height: '24px',
    verticalAlign: 'middle',
  },
  color: theme.palette.primary.contrastText,
}));

// Navbar styles
export const StyledAppBar = styled('div')(({ theme }) => ({
  backgroundColor: '#b70000',
  color: theme.palette.primary.contrastText,
  boxShadow: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: theme.zIndex.drawer + 1,
  height: '10vh',
  marginBottom: '2vh',
}));

export const Nav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
});

export const NavLogo = styled('div')({
  height: '100%',
});

export const StyledLogoLink = styled('a')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const StyledLogoImage = styled('img')({
  maxHeight: '100%',
  objectFit: 'contain',
  maxWidth: '100%',
});

export const NavLinks = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  justifyContent: 'center',
});

export const NavLinkItem = styled('li')(({ theme }) => ({
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
  margin: '0 1rem',
}));

/* Media Queries for Responsive Navbar */
const mq = '@media (max-width: 1000px)';

export const StyledAppBarMobile = styled(StyledAppBar)({
  [mq]: {
    height: '15vh', // Adjust height for smaller screens
  },
});

export const NavLinksMobile = styled(NavLinks)({
  [mq]: {
    display: 'none',
  },
});

export const NavLinkItemMobile = styled(NavLinkItem)({
  [mq]: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0',
    padding: '1rem',
    borderBottom: 'none',
    textAlign: 'center',
  },
});

/* Hamburger Menu Icon */
export const HamburgerMenu = styled('div')({
  display: 'none',
  margin: '5vw',
  cursor: 'pointer',
  fontSize: '10vw',
  [mq]: {
    display: 'block',
  },
});

export const DropdownMenu = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: '100%',
  right: 0, // Position the dropdown menu to the right side of the screen
  backgroundColor: mainTheme.palette.primary.main,
  color: mainTheme.palette.primary.contrastText,
  minWidth: '40vw',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: 1,
  [mq]: {
    display: 'block',
  },
}));

export const DropdownItems = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
