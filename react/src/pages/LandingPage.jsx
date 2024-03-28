import React from "react";
import AnimatedSentence from "../components/AnimatedSentence";
import ReviewsMarquee from "../components/ReviewsMarquee";
import FooterComponent from "../components/FooterComponent";
import CTA from "../components/CTA";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div>
        <Hero />
     
      <div style={{ marginBottom: "20px" }}>
        <AnimatedSentence />
      </div>

      <div style={{ marginBottom: "200px" }}>
        <CTA />
      </div>
      <div style={{ marginBottom: "200px" }}>
        <ReviewsMarquee />
      </div>

      <FooterComponent />
    </div>
  );
};

export default LandingPage;
