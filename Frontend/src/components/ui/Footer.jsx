/** @format */

import React from 'react';
import {
  StyledFooter,
  SocialMediaContainer,
  SocialMediaLink,
} from './UiStyles'; // Assuming the default.js file is located in the themes directory
import FacebookLogo from '../../assets/FacebookLogo.svg';
import InstagramLogo from '../../assets/InstagramLogo.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Hajamie Judo - Ryan Cameron. All Rights
          Reserved.
        </p>
        <SocialMediaContainer>
          <SocialMediaLink
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookLogo} alt="Facebook" />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramLogo} alt="Instagram" />
          </SocialMediaLink>
        </SocialMediaContainer>
      </div>
    </StyledFooter>
  );
};

export default Footer;
