import React from 'react';
import '../Birds/birds.css';

export default function Birds() {
  return (
    <div>
      <div className="bird-container bird-container-one">
        <div className="bird bird-one"></div>
      </div>
      <div className="bird-container bird-container-three">
        <div className="bird bird-three"></div>
      </div>
      <div className="bird-container bird-container-four">
        <div className="bird bird-four"></div>
      </div>
    </div>
  );
}
