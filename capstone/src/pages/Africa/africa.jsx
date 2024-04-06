import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Africa/africa.css';
import lionImg from '../../assets/lion.png';
import Navbar from '../../components/NavBar/navbar';
import Cursor from '../../components/Cursor/cursor';

export default function SouthAmerica() {
  useEffect(() => {
    // Add the class to the body element when the component mounts
    document.body.classList.add('africa-page-background');

    // Remove the class from the body element when the component unmounts
    return () => {
      document.body.classList.remove('africa-page-background');
    };
  }, []);

  return (
    <div>
      <div className="africa-container">
        <div className="lion-container">
          <img src={lionImg} alt="Lion" className="lion" />
        </div>
        <div className="africa-header-container">
          <h1 className='africa-header'>Africa Safari</h1>
        </div>
        <div className="content-container">
          <p className='africa-subtitle'>Explore the rich biodiversity of the safari.</p>
          <button className='africa-button'>Learn More</button>
        </div>
        <div className="pagination-container">
          <FontAwesomeIcon icon={faCircleLeft} />
          {/* Use Link to navigate to the South American Rainforest page */}
          <Link to="/southamerica" className="left-text">South American Rainforest</Link>
          <FontAwesomeIcon icon={faCircleRight} />
          <span className="right-text">South East Asia Jungle</span>
        </div>

      </div>
      <Navbar />
      <Cursor />
    </div>
  );
}
