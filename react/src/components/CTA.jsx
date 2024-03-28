import React from "react";
import { Button, Typography, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const CTAContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#ffffff", 
  border: "3px solid #800080", 
  borderRadius: "8px",
  textAlign: "center", 
  margin: "30px",
  padding: "16px",
}));

const StepContainer = styled("div")({
  textAlign: "left", 
  marginBottom: "48px",
  marginTop: "48px",
});

const Step = styled("div")({
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  color: "#800080", 
});

const StepCircle = styled("div")({
  backgroundColor: "#800080", 
  color: "#ffffff", 
  width: "36px",
  height: "36px",
  borderRadius: "50%", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "12px",
});

const Title = styled(Typography)({
  color: "#800080", 
  marginBottom: "24px",
  fontWeight: "bold",
  fontSize: "60px",
});

const Description = styled(Typography)({
  color: "#800080", 
  marginBottom: "12px",
  fontSize: "24px",
  fontWeight: "bold",
});

const ActionButton = styled(Button)({
  marginTop: "12px",
  color: "#ffffff", 
  backgroundColor: "#800080", 
  width: "250px", 
  height: "60px", 
  fontSize: "20px",
  borderRadius: "15px",
  padding: "30px",
  fontWeight: "bold"
});

const BoldTypography = styled(Typography)({
  fontWeight: "bold", 
});

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#800080",
  },
});

const PurpleTab = styled(Tab)({
  color: "#800080",
  fontWeight: "bold",
  "&.Mui-selected": {
    color: "#800080",
  }
});

const CTAComponent = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <StyledTabs value={tabValue} onChange={handleTabChange} centered>
        <PurpleTab label="Business" />
        <PurpleTab label="Worker" />
      </StyledTabs>
      <CTAContainer>
        {tabValue === 0 && (
          <div>
            <Title variant="h4" component="h2">
              Looking for talented candidates?
            </Title>
            <Description variant="body1" component="p">
              We have the resources to find the perfect fit for your team.
            </Description>
            <StepContainer>
              <Step>
                <StepCircle>1</StepCircle>
                <BoldTypography variant="h6">Describe what you need done</BoldTypography>
              </Step>
              <Step>
                <StepCircle>2</StepCircle>
                <BoldTypography variant="h6">Set your budget</BoldTypography>
              </Step>
              <Step>
                <StepCircle>3</StepCircle>
                <BoldTypography variant="h6">
                  Receive quotes and pick the best candidates
                </BoldTypography>
              </Step>
            </StepContainer>
            <Link to="/signup/">
            <ActionButton variant="contained" color="secondary">
              Start Hiring
            </ActionButton>
            </Link>
          </div>
        )}
        {tabValue === 1 && (
  <div>
    <Title variant="h4" component="h2">
      Looking for opportunities to work?
    </Title>
    <Description variant="body1" component="p">
      We connect you with businesses looking for your skills and expertise.
    </Description>
    <StepContainer>
      <Step>
        <StepCircle>1</StepCircle>
        <BoldTypography variant="h6">Browse available jobs</BoldTypography>
      </Step>
      <Step>
        <StepCircle>2</StepCircle>
        <BoldTypography variant="h6">Apply to jobs that match your skills</BoldTypography>
      </Step>
      <Step>
        <StepCircle>3</StepCircle>
        <BoldTypography variant="h6">
          Communicate with businesses and get hired
        </BoldTypography>
      </Step>
    </StepContainer>
    <Link to="/signup"> 
    <ActionButton variant="contained" color="secondary">
      Start Working
    </ActionButton>
    </Link>
  </div>
)}

      </CTAContainer>
    </div>
  );
};

export default CTAComponent;
