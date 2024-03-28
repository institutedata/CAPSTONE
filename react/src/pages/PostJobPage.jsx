import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostJobPage = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    payRate: 0,
    location: "", // Added location field
    time: "", // Added time field
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      // Redirect to login page if not logged in
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdBy = localStorage.getItem("username"); // Retrieve createdBy from local storage
      console.log("CreatedBy:", createdBy); // Log createdBy to console to verify
  
      // Send a POST request to backend to save the job data
      const response = await fetch("http://localhost:8080/api/jobs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`, // Include the authorization token in the request headers
        },
        body: JSON.stringify({...jobData, createdBy }), // Include the username of the creator
      });
      if (!response.ok) {
        throw new Error('Failed to post job');
      }
      // Redirect to dashboard after successful submission
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "#800080", fontWeight: "bold" }}
      >
        Post a Job
      </Typography>
      {isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Title"
                name="title"
                value={jobData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Description"
                name="description"
                value={jobData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Pay Rate"
                name="payRate"
                type="number"
                value={jobData.payRate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={jobData.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Time"
                name="time"
                value={jobData.time}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                style={{
                  fontWeight: "bold",
                  marginTop: "30px",
                  backgroundColor: "#800080",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default PostJobPage;
