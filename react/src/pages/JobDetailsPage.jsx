import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const JobDetailPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/jobs/${jobId}`);
        const data = await response.json();
        console.log('Fetched job:', data);
        if (data.result === 'success') {
          setJob(data.data);
        } else {
          console.error('Error fetching job:', data.error);
        }
      } catch (error) {
        console.error('Error fetching job:', error);
      }
    };
    fetchJob();
  }, [jobId]);

  const handleApply = () => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      // If not logged in, navigate to login page
      navigate('/login');
    } else {
      // If logged in, send the applicant data (username) to the database
      const username = localStorage.getItem('username'); // Assuming you have saved the username during login
      // Perform the logic to send applicant data to the database
      console.log('Applying to job:', job, 'Username:', username);
      // Example fetch request to send applicant data
      fetch('http://localhost:8080/api/jobs/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ jobId, username }),
      })
        .then(response => {
          if (response.ok) {
            console.log('Application submitted successfully');
            // Logic to handle successful application submission
          } else {
            console.error('Failed to submit application');
            // Logic to handle failed application submission
          }
        })
        .catch(error => {
          console.error('Error submitting application:', error);
          // Logic to handle error while submitting application
        });
    }
  };

  if (!job) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{job.title}</Typography>
      <Typography variant="subtitle1">Company: {job.company}</Typography>
      <Typography variant="body1">{job.description}</Typography>
      <Button variant="contained" color="primary" onClick={handleApply}>
        Apply
      </Button>
    </div>
  );
};

export default JobDetailPage;
