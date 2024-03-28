import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';

const DashboardPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/jobs');
        const data = await response.json();
        console.log('Fetched jobs:', data); // Log fetched data
        if (data.result === 'success') {
          setJobs(data.data); // Set jobs to the array contained in data
        } else {
          console.error('Error fetching jobs:', data.error); // Log error if result is not success
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);


  return (
    <div>
      <Link to="/post-job" style={{ textDecoration: 'none', display: "flex", justifyContent: "center" }}>
        <Button variant="contained"  style={{ margin: '20px', backgroundColor: "#800080", fontWeight: "bold" }}>
          Post a Job
        </Button>
      </Link>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} key={job._id}>
            <JobCard job={job} jobId={job._id} /> {/* Adjusted jobId to use _id */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DashboardPage;
