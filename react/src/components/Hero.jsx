import React from "react";
import { Typography, Container, Link, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ImageSource from "../context/hospoimg.png";

const HeroContainer = styled(Container)({
  width: "100%",
  margin: "50px auto", // Centering the box and increased top and bottom margin for spacing
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "100px", // Increased margin top for bigger size
  marginBottom: "100px", // Increased margin bottom for bigger size
  backgroundColor: "#800080",
  borderRadius: "15px",
  padding: "50px", // Increased padding for a larger box
});

const TextContainer = styled("div")({
  flex: "1",
  padding: "12px", // Increased padding for bigger size
});

const ImageContainer = styled("div")({
  flex: "1",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  padding: "12px", // Increased padding for bigger size
});

const Image = styled(motion.img)({
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
});

const Tagline = styled(Typography)({
  color: "#fff",
  fontSize: "30px", // Increased font size for bigger size
  fontWeight: "bold",
  margin: "20px"
});

const Text = styled(Typography)({
  color: "#fff",
  fontSize: "24px", // Increased font size for bigger size
});

const StyledLink = styled(Link)({
  color: "#fff",
  textDecoration: "underline",
  textDecorationColor: "#fff",
  marginLeft: "5px",
});

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <TextContainer>
          <Tagline>GIUP means HELP, and that's exactly what we do.</Tagline>
          <Text>
            We streamline temporary staffing for businesses. Submit a request, get
            matched, and hire with ease. Experience efficient staffing solutions
            with us <StyledLink href="/signup">today</StyledLink>.
          </Text>
        </TextContainer>
        <ImageContainer>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Image src={ImageSource} alt="placeholder" />
          </motion.div>
        </ImageContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
