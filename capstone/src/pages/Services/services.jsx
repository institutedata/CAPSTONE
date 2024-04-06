import React from 'react';
import Card from '../../components/Card/card';
import { projects } from './data';
import styles from './services.modules.css';
import Navbar from '../../components/NavBar/navbar';
import Background from '../../components/Background/background';
import Socials from '../../components/Social Media/socials';


function Projects() {
  return (
    <div>
      <Navbar />
      <Background />
      <Socials />

    <div className={styles.main}>
      {projects.map((project, index) => (
        <Card
          key={index}
          i={index}
          {...project}
        />
      ))}
    
    </div>
    </div>
  );
}

export default Projects;
