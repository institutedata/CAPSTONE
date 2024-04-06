import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/NavBar/navbar';
import Background from '../../components/Background/background';
import Cursor from '../../components/Cursor/cursor';
import '../Rainforest/rainforest.css';
import axios from "axios";
import img1 from '../../assets/api_pics/alligator.jpg';
// import img2 from '../../assets/api_pics/cottontop_tamarin.jpg';
import img3 from '../../assets/api_pics/emperortamarin.jpg';
// import img4 from '../../assets/api_pics/galapagostortoise.jpg';
import img5 from '../../assets/api_pics/goldenlion_tamarin.jpg';
// import img6 from '../../assets/api_pics/greeniguana.jpg';
import img7 from '../../assets/api_pics/sMonkey.jpg';
import img8 from '../../assets/api_pics/squirrelmonkey.jpg';
import img9 from '../../assets/api_pics/tarantula.jpg';

const images = [
  { src: img1, animal: 'Alligator' },
  // { src: img2, animal: 'Cottontop Tamarin' },
  { src: img3, animal: 'Emperor Tamarin' },
  // { src: img4, animal: 'Galápagos Tortoise' },
  { src: img5, animal: 'Golden Lion Tamarin' },
  // { src: img6, animal: 'Green Iguana' },
  { src: img7, animal: 'Spider Monkey' },
  { src: img8, animal: 'Squirrel Monkey' },
  { src: img9, animal: 'Red Knee Tarantula' },
];

const SplitScreenSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animalData, setAnimalData] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  const handleSliderChange = (index) => {
    setCurrentIndex(index);
    setAnimalData(null); // Reset animal data when changing images
  };

  const handleScroll = (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0) {
      // Scroll down
      setIsScrolling(true);
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.deltaY < 0) {
      // Scroll up
      setIsScrolling(true);
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }

    // Set a timeout to reset the scrolling flag after a short delay
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 2000); // Adjust the delay as needed
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/fetch-animals");
        setAnimalData(response.data.animals.find((animal) => animal.name === images[currentIndex].animal));
      } catch (error) {
        console.error('Failed to fetch animal data:', error);
      }
    };
    fetchData();
  }, [currentIndex]); // Fetch data when currentIndex changes

  return (
    <div>
      <Navbar />
      <Background />
      <Cursor />
    <div className="split-screen-container">
      <div className="split-screen-slider" onWheel={handleScroll}>
        <div className="split-screen-slider-inner">
          <div
            className="split-screen-slider-image"
            style={{ backgroundImage: `url(${images[currentIndex].src})` }}
          ></div>
          <div className="split-screen-slider-controls">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleSliderChange(index)}
                className={currentIndex === index ? 'active' : ''}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="animal-data">
        {animalData && animalData.name === images[currentIndex].animal && (
          <div>
            <h2 className='animal-name'>{animalData.name}</h2>
            <p className='animal-info'>{animalData.description}</p>
            <p className='animal-info'><strong>Main Prey:</strong> {animalData.main_prey}</p>
            <p className='animal-info'><strong>Habitat:</strong> {animalData.habitat}</p>
            <p className='animal-info'><strong>Predators:</strong> {animalData.predators}</p>
            <p className='animal-info'><strong>Diet:</strong> {animalData.diet}</p>
            <p className='animal-info'><strong>Favorite Food:</strong> {animalData.favorite_food}</p>
            <p className='animal-info'><strong>Type:</strong> {animalData.type}</p>
            <p className='animal-info'><strong>Slogan:</strong> {animalData.slogan}</p>
            <p className='animal-info'><strong>Lifespan:</strong> {animalData.lifespan}</p>
            <p className='animal-info'><strong>Weight:</strong> {animalData.weight}</p>
            <p className='animal-info'><strong>Top Speed:</strong> {animalData.top_speed}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default SplitScreenSlider;
