import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import '../Social Media/socials.css';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';

export default function Socials() {
  const location = useLocation(); // Use the hook to get the current location
  const isHomePage = location.pathname === '/home'; // Check if it's the home page

  // Apply a conditional class based on whether it's the home page
  const iconClass = isHomePage ? 'icon-home' : '';

  return (
    <div className='icons'>
      <a href="https://www.facebook.com/AKLZOONZ">
        <img src={Facebook} alt="Facebook" className={iconClass} />
      </a>
      <a href="https://www.instagram.com/aucklandzoo/">
        <img src={Instagram} alt="Instagram" className={iconClass} />
      </a>
      <a href="https://twitter.com/aucklandzoo">
        <img src={Twitter} alt="Twitter" className={iconClass} />
      </a>
      <a href="https://www.youtube.com/user/aucklandzoo">
        <img src={Youtube} alt="Youtube" className={iconClass} />
      </a>
    </div>
  );
}
