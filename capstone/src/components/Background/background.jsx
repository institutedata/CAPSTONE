import React from 'react';
import backgroundGradient from '../../assets/background6.jpg'; // Corrected path

const BackgroundContainer = ({ children }) => {
  return (
    <div
      style={{
        height: '100vh', // This ensures the div takes the full height of the viewport
        width: '100vw', // This ensures the div takes the full width of the viewport
        backgroundImage: `url(${backgroundGradient})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'fixed', // Ensures the background covers the entire viewport and stays fixed
        top: 0,
        left: 0,
        zIndex: -1, // Puts the background behind other content
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
