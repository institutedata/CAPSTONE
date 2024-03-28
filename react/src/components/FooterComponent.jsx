import React from "react";
import {
  Typography,
  Link,
  Grid,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

const FooterContainer = styled("footer")({
  backgroundColor: "#800080",
  color: "#ffffff",
  padding: "20px",
  textAlign: "center",
  margin: "20px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FooterSection = styled(Grid)({
  padding: "20px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#ffffff",
  "&:hover": {
    textDecoration: "underline",
    color: "#ffd700", 
  },
});

const BoldTypography = styled(Typography)({
  fontWeight: "bold",
});

const ButtonContainer = styled("div")({
  display: "flex",
  gap: "20px",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const FooterComponent = () => {
  return (
    <FooterContainer>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <FooterSection item xs={12} sm={4}>
          <BoldTypography variant="h6" gutterBottom>
            FOR BUSINESSES
          </BoldTypography>
          <Typography variant="body2">
            <StyledLink href="/employers">Employers</StyledLink>
          </Typography>
          <Typography variant="body2">
            <StyledLink href="/pricing">Pricing</StyledLink>
          </Typography>
          <Typography variant="body2">
            <StyledLink href="/contact">Contact Us</StyledLink>
          </Typography>
        </FooterSection>
        <FooterSection item xs={12} sm={4}>
          <BoldTypography variant="h6" gutterBottom>
            FOR WORKERS
          </BoldTypography>
          <Typography variant="body2">
            <StyledLink href="/job-openings">Job Openings</StyledLink>
          </Typography>
          <Typography variant="body2">
            <StyledLink href="/benefits">Benefits</StyledLink>
          </Typography>
          <Typography variant="body2">
            <StyledLink href="/contact">Contact Us</StyledLink>
          </Typography>
        </FooterSection>
        <FooterSection item xs={12} sm={4}>
          <BoldTypography variant="h6" gutterBottom>
            ABOUT US
          </BoldTypography>
          <Typography variant="body2">
            <StyledLink href="/about">Our Story</StyledLink>
          </Typography>
          <Typography variant="body2">
            <StyledLink href="/team">Our Team</StyledLink>
          </Typography>
          <Typography variant="body2">
            <StyledLink href="/testimonials">Testimonials</StyledLink>
          </Typography>
        </FooterSection>
      </Grid>
      <Divider
        style={{ width: "100%", margin: "20px 0", backgroundColor: "#ffffff" }}
      />
      <ButtonContainer>
        <BoldTypography variant="body2">
          © {new Date().getFullYear()} GIUP. All rights reserved.
        </BoldTypography>
        <div>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AppleIcon />}
            href="https://www.apple.com/app-store/"
          >
            Download on the AppStore
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<GoogleIcon />}
            href="https://play.google.com/store"
            sx={{ marginLeft: '20px' }}
          >
            Get on Google Play
          </Button>
        </div>
      </ButtonContainer>
    </FooterContainer>
  );
};

export default FooterComponent;
