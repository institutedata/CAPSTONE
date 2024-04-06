import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/NavBar/navbar';
import Socials from '../../components/Social Media/socials.jsx';
import image01 from '../../assets/education13.jpg';
import image02 from '../../assets/education12.jpeg';
import audioBg from '../../assets/storyAudio.mp3'
import Background from '../../components/Background/background';
import Cursor from '../../components/Cursor/cursor.jsx';
import '../Story/story.css';

export default function Story() {
  const textRef = useRef(null);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useLayoutEffect(() => {
    const text = textRef.current.querySelectorAll('span');

    gsap.set(text, { opacity: 0, x: '-100%' });

    text.forEach((span, index) => {
      gsap.to(span, {
        opacity: 1,
        x: '0%',
        duration: 1.5,
        delay: index * 0.1,
        ease: 'power3.out',
      });
    });
  }, []);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };


  return (
    <div className="container" >
      <img src={image01} alt="Education" className="image1" />
      <img src={image02} alt="Learning" className="image2" />

      <div className='font-container'>
        <h2 className='title-font'>Inspiring <span className='orange-italic'>the next generations</span></h2>
        <h2 className='title-font'>of conservationist</h2>
      </div>

      <div className="dictate__text-container">
            <div className="dictate__text">
                <p>Here at Auckland Zoo we aim to lead by example, with optimism, 
            with expertise and with passion. By connecting today's tamariki with wildlife, 
            nature, and conservation, we can foster passion and empathy for wildlife and wild places.</p>
            <p>Our education programme has been developed with the latest 
            wildlife conservation science in mind. We have also drawn on a wealth of education experience 
            within the team to ensure learning experiences are engaging and informative – inspiring 
            informed action from our younger citizens.</p>
        </div>
        <div className="dictate__animation-text js-dictate-text" ref={textRef}>
            <p>
                <span>Here <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>at <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>Auckland <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>Zoo <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>we <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>aim <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>to <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>lead <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>by <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>example, <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>with <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>optimism, <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>with <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>expertise <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>and <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>with <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>passion. <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>By <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>connecting <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>today's <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>tamariki <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>with <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>wildlife, <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>nature, <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>and <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>conservation, <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>we <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>can <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>foster <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>passion <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>and <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>empathy <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>for <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>wildlife <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>and <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>wild <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>places. <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
            </p>
            <p>
                <span>Our <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>education <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>programme <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>has <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>been <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>developed <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>with <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>the <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>latest <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>wildlife <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>conservation <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>science <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>in <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>mind. <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>We <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>have <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>also <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>drawn <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>on <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>wealth <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>of <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>education <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>experience <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>within <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>the <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>team <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>to <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>ensure <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>learning <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>experiences <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>are <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>engaging <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>and <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>informative - <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span> inspiring <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>informed <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>action <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>from <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>our <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>younger <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
                <span>citizens. <span style={{ transform: 'translate(50%, 0px)' }}></span></span>
            </p>
        </div>
      </div>
      <button className='speaker-button' onClick={toggleAudio}>
        <FontAwesomeIcon icon={faVolumeHigh} />
      </button>
      <audio ref={audioRef} src={audioBg} autoPlay loop />

      <Navbar />
      <Socials />
      <Background />
      <Cursor />
    
    </div>
  );
}
