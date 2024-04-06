import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import '../South America/southAmerica.css';
import monkeyImg from '../../assets/tamarin.png';
import '../Wildlife/wildlife.css';
import Navbar from '../../components/NavBar/navbar';
import Cursor from '../../components/Cursor/cursor';

export default function SouthAmerica() {
  useEffect(() => {
    // Add the class to the body element when the component mounts
    document.body.classList.add('page-background');

    // Remove the class from the body element when the component unmounts
    return () => {
      document.body.classList.remove('page-background');
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="monkey-container">
          <img src={monkeyImg} alt="Monkey" className="monkey" />
        </div>
        <div className="header-container">
          <h1 className='south-america-header'>South America Rainforest</h1>
        </div>
        <div className="content-container">
          <p className='south-america-subtitle'>Explore the rich biodiversity of the rainforest.</p>
          <Link to="/rainforest" className='south-america-button'>Learn More</Link>
        </div>
        <div className="pagination-container">
          <FontAwesomeIcon icon={faCircleLeft} />
          <span className="left-text">Australia Bush</span>
          <span className="right-text">African Safari</span>
          <Link to="/africa">
            <FontAwesomeIcon icon={faCircleRight} />
          </Link>
        </div>


      </div>
      <Navbar />
      <Cursor />
    </div>
  );
}
