/** @format */

// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../../assets/judoImages/logo.png';
import {
  StyledAppBar,
  Nav,
  NavLogo,
  StyledLogoLink,
  StyledLogoImage,
  NavLinks,
  NavLinkItem,
  DropdownMenu,
  HamburgerMenu, // Import HamburgerMenu component
} from './UiStyles';
import Dropdown from './Dropdown'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to check if the screen size is mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
  };

  // Add event listener for window resize
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledAppBar>
      <Nav>
        <NavLogo>
          <StyledLogoLink href="/">
            <StyledLogoImage src={logoImage} alt="Home" />
          </StyledLogoLink>
        </NavLogo>
        {isMobile ? ( // Render HamburgerMenu and DropdownMenu on mobile
          <>
            <HamburgerMenu>
              <FontAwesomeIcon icon={faBars} onClick={handleDropdownToggle} />
            </HamburgerMenu>
            <DropdownMenu>
              <Dropdown isOpen={dropdownOpen} />
            </DropdownMenu>
          </>
        ) : (
          // Render NavLinks on larger screens
          <NavLinks>
            <NavLinkItem>
              <NavLink to="/login">Login</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/about">About us</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/fitness">Exercises</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/#contact">Contact Us</NavLink>
            </NavLinkItem>
          </NavLinks>
        )}
      </Nav>
    </StyledAppBar>
  );
};

export default Navbar;
