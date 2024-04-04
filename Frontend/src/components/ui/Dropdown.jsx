/** @format */

import React from 'react';
import { DropdownMenu, DropdownItems, NavLinks, NavLinkItem } from './UiStyles';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ isOpen }) => {
  return (
    <DropdownMenu style={{ display: isOpen ? 'block' : 'none' }}>
      <DropdownItems>
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
      </DropdownItems>
    </DropdownMenu>
  );
};

export default Dropdown;
