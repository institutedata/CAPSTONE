import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import '../Home/home.css';
import Navbar from '../../components/NavBar/navbar';
import Cursor from '../../components/Cursor/cursor';
import Video from '../../assets/homeVideo.mp4';
import audioBg from '../../assets/audioBg.mp3';
import Socials from '../../components/Social Media/socials';

export default function Home() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const missionTextRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Asynchronous function to handle audio playback
    const playAudio = async () => {
      if (audioRef.current && !isMuted) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Error attempting to play audio:", error);
        }
      }
    };

    // Check if navigation state indicates sound should be played and set isMuted accordingly
    setIsMuted(!location.state?.playSound);
    playAudio();

    // GSAP animation for mission text
    const tl = gsap.timeline({ delay: 1 });
    tl.fromTo(
      missionTextRef.current.children,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out' }
    );
  }, [location.state]);

  useEffect(() => {
    // Control audio play/pause based on isMuted state
    if (isMuted) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.error("Error attempting to play audio:", error));
    }
  }, [isMuted]);

  const toggleAudio = () => {
    setIsMuted((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar />
      <Cursor />
      <Socials />
      <div className='overlay'></div>
      <video src={Video} autoPlay loop muted />
      
      <div className="mission-text-container" ref={missionTextRef}>
        <h1 className='mission-text'>To bring</h1>
        <h1 className='mission-text-italic'>people</h1>
        <h1 className='mission-text'>together to build a</h1>
        <h1 className='mission-text-bold'>future</h1>
        <h1 className='mission-text'>for</h1>
        <h1 className='mission-text-outline'>wildlife</h1>
      </div>
      <button className='speaker-button' onClick={toggleAudio}>
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeHigh} />
      </button>
      <audio ref={audioRef} src={audioBg} loop muted={isMuted} />
    </div>
  );
}
