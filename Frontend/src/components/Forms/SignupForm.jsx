/** @format */

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { FormContainer, FieldContainer, ButtonContainer } from './FormStyles';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    confirmPassword: '',
  });

  const [isDialogOpen, setIsDialogOpen] = useState(true); // State to track dialog visibility
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation to ensure password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // Send form data to backend
      const response = await axios.post(
        'http://localhost:8082/api/user/create',
        formData,
        { withCredentials: true }
      );
      console.log('Signup successful:', response.data);

      // Optionally, you can show a snackbar or redirect to another page upon successful signup
      setIsSnackbarOpen(true);
      setIsDialogOpen(false); // Close dialog upon successful signup
    } catch (error) {
      console.error('Error signing up:', error.response.data);
      // Handle error (e.g., show error message)
    }
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      {isDialogOpen && ( // Render dialog only if isDialogOpen is true
        <FormContainer>
          <FieldContainer>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              fullWidth
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              fullWidth
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              label="Email Address"
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
              fullWidth
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              fullWidth
            />
          </FieldContainer>
          <ButtonContainer>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Sign Up
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success">
          Signup Successful!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default SignupForm;
