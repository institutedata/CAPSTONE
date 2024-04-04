/** @format */

import React from 'react';

const JudoVideo = () => {
  return (
    <div style={{ width: '100%', height: 'auto', margin: '5vh' }}>
      <h3>Watch this video from one of our favorite Judoka's</h3>
      {/* Adjust width and height as per your requirement */}
      <iframe
        style={{ width: '75%', height: '50vh' }}
        src="https://www.youtube.com/embed/_TzIO1mzbsE?start=53"
        title="Top 20 Ippons of Ono Shohei 大野将平"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default JudoVideo;
