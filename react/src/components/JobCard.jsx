import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BusinessIcon from "@mui/icons-material/Business";

const StyledCard = styled(Card)({
  margin: "20px",
  border: "2px solid #800080",
  cursor: "pointer", // Change cursor to indicate clickability
});

const IconTypography = styled(Typography)({
  display: "flex",
  alignItems: "center",
  color: "#800080", // Purple color
  fontWeight: "bold",
});

const JobCard = ({ job, jobId }) => {
  // Define the URL to navigate to with the job ID
  const jobUrl = `/jobs/${jobId}`;

  return (
    <Link to={jobUrl} style={{ textDecoration: "none" }}>
      <StyledCard>
        <CardContent>
          <Typography variant="h6" gutterBottom style={{ color: "#800080", fontWeight: "bold" }}>
            {job.title}
          </Typography>

          <IconTypography variant="body1">
            <LocationOnIcon style={{ color: "#800080" }} />
            {/* Location */}: {job.location}
          </IconTypography>

          <IconTypography variant="body1">
            <AttachMoneyIcon style={{ color: "#800080" }} />
            {/* Rate */}: {job.payRate}
          </IconTypography>

          <IconTypography variant="body1">
            <ScheduleIcon style={{ color: "#800080" }} />
            {/* Date & Time */}: {job.time}
          </IconTypography>

          <IconTypography variant="body1">
            <BusinessIcon style={{ color: "#800080" }} /> 
            {/* Company */}
            :{" "}
            {job.company}
          </IconTypography>
        </CardContent>
      </StyledCard>
    </Link>
  );
};

export default JobCard;
