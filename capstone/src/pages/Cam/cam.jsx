import { useRef } from 'react';
import '../Cam/cam.css';
import Navbar from '../../components/NavBar/navbar';
import Cursor from '../../components/Cursor/cursor';
import Background from '../../components/Background/background';  
import Socials from '../../components/Social Media/socials';  
import image01 from '../../assets/otters.jpg';
import image02 from '../../assets/meerkats.jpg';
import image03 from '../../assets/giraffes.jpg';
import image04 from '../../assets/tortoise.jpg';
import image05 from '../../assets/eel.jpg';
import image06 from '../../assets/staff.jpg';

export default function AnimalCam() {
  function Slider() {
    const sliderRef = useRef(null);

    const nextSlide = () => {
      const slides = sliderRef.current.querySelectorAll('.slides');
      sliderRef.current.appendChild(slides[0]);
    };

    const prevSlide = () => {
      const slides = sliderRef.current.querySelectorAll('.slides');
      sliderRef.current.prepend(slides[slides.length - 1]);
    };

    const openCameraLink = (link) => {
      window.open(link, '_blank');
    };

    const slidesData = [
      {
        image: image01,
        title: 'Otter Cam',
        subtitle: 'How many otters can you spot?',
        link: 'https://www.youtube.com/watch?v=BWGyFvylxTQ&ab_channel=AucklandZoo',
      },
      {
        image: image02,
        title: 'Meerkat Cam',
        subtitle: 'How many meerkats can you spot?',
        link: 'https://www.youtube.com/watch?v=IjDUD5nyPxk&ab_channel=AucklandZoo',
      },
      {
        image: image03,
        title: 'African Savannah Cam',
        subtitle: 'How many giraffes can you spot?',
        link: 'https://www.youtube.com/watch?v=wuDDxE6tDXc&ab_channel=AucklandZoo',
      },
      {
        image: image04,
        title: 'Leopard Tortoise Cam',
        subtitle: "We're going inside our leopard tortoise crèche",
        link: 'https://www.youtube.com/watch?v=4BpCzxsu-Zg&ab_channel=AucklandZoo',
      },
      {
        image: image05,
        title: 'Eel Cam',
        subtitle: "We're going inside out New Zealand long-fin eel habitat",
        link: 'https://www.youtube.com/watch?v=yParT_PJQwI&ab_channel=AucklandZoo',
      },
      {
        image: image06,
        title: 'Staff Cam',
        subtitle: 'Check out videos straight from our staff',
        link: 'https://www.youtube.com/playlist?list=PLDn1UzDiwc6r0FXZTd24lIZHjG2jwStts',
      },
    ];

    return (
      <div>
        <Navbar />
        <Background />
        <Socials />
        <Cursor />
        
        <div className='gallery-container'
        >
          <div className='slider' ref={sliderRef}>
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className='slides'
                style={{ '--img': `url(${slide.image})` }}
              >
                <div className='content'>
                  <h2 className='content-header'>{slide.title}</h2>
                  <p className='content-sub'>{slide.subtitle}</p>
                  <button
                    className='explore-camera-button'
                    onClick={() => openCameraLink(slide.link)}
                  >
                    Explore Camera
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='cam-buttons'>
            <button className='prev' onClick={prevSlide}>
              Previous
            </button>
            <button className='next' onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <Slider />;
}


