import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedSentence = () => {
  const [textColor, setTextColor] = useState("#cc4165");
  const [shadowColor, setShadowColor] = useState("#000000"); // Initial shadow color

  useEffect(() => {
    // Function to change shadow color at regular intervals
    const shadowInterval = setInterval(() => {
      // Generate random color for shadow (adjust as needed)
      const newShadowColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      setShadowColor(newShadowColor);
    }, 500); // Change shadow color every 2 seconds (adjust as needed)

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(shadowInterval);
  }, []); // Run effect only once on component mount

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div style={{ fontSize: "4em", fontWeight: "bold", color: '#800080' }}>
        We provide{" "}
        <span
          style={{
            color: "#fefe33",
            textShadow: `2px 2px 4px ${shadowColor}`, // Dynamic shadow color
            transition: "text-shadow 0.3s ease-in-out",
          }}
        >
          staffing
        </span>{" "}
        solution for{" "}
        <span style={{ color: textColor, animation: "pulse 2s infinite", textShadow: "2px 2px 4px #800080" }}>
          <TypeAnimation
            sequence={[
              "Hotels",
              1000,
              () => setTextColor("#ff4a4a"),
              "Cafes",
              1000,
              () => setTextColor('deeppink'),
              "Bars",
              1000,
              () => setTextColor('#e25822'),
              "Restaurants",
              1000,
              () => setTextColor('#302579'),
              "Events",
              1000,
              () => setTextColor('#54777d'),
              '',
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </div>
    </div>
  );
};

export default AnimatedSentence;
