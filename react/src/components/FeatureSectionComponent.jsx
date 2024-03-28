import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const PurpleTypography = styled(Typography)({
  color: "#800080", 
  fontWeight: "bold", 
});

const PurpleCardContent = styled(CardContent)({
  color: "#800080", 
});

const FeatureSectionComponent = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Card>
          <PurpleCardContent>
            <PurpleTypography variant="h6">Feature 1</PurpleTypography>
            <Typography variant="body2">Description of feature 1</Typography>
          </PurpleCardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <PurpleCardContent>
            <PurpleTypography variant="h6">Feature 2</PurpleTypography>
            <Typography variant="body2">Description of feature 2</Typography>
          </PurpleCardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <PurpleCardContent>
            <PurpleTypography variant="h6">Feature 3</PurpleTypography>
            <Typography variant="body2">Description of feature 3</Typography>
          </PurpleCardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FeatureSectionComponent;
