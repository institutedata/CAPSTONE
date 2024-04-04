/** @format */

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import {
  FormContainer,
  FieldContainer,
  ButtonContainer,
  RowContainer,
} from './FormStyles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    isStudent: false,
    isParent: false,
  });

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare message content including all form data
    const messageContent = `
      Name: ${formData.name}
      Surname: ${formData.surname}
      Email: ${formData.email}
      Phone Number: ${formData.phone}
      Message: ${formData.message}
      Enquiring as a student: ${formData.isStudent ? 'Yes' : 'No'}
      Enquiring as a parent: ${formData.isParent ? 'Yes' : 'No'}
    `;

    // Send email using EmailJS
    emailjs
      .send(
        'HajamieJudoServiceId',
        'template_crptia3',
        { message_html: messageContent },
        'a-K90QQLRagJFDgMo'
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSnackbarOpen(true); // Open the snackbar after successful email sending
        // Reset form data after successful submission
        setFormData({
          name: '',
          surname: '',
          email: '',
          phone: '',
          message: '',
          isStudent: false,
          isParent: false,
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <RowContainer>
          <FieldContainer>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ width: '95%' }}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              label="Surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              sx={{ width: '100%' }}
            />
          </FieldContainer>
        </RowContainer>
        <RowContainer>
          <FieldContainer>
            <TextField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ width: '95%' }}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              sx={{ width: '100%' }}
            />
          </FieldContainer>
        </RowContainer>
        <FieldContainer>
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            columns={30}
            required
            sx={{ width: '100%' }}
          />
        </FieldContainer>
        <FieldContainer>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Enquiring as a student"
            name="isStudent"
            checked={formData.isStudent}
            onChange={handleChange}
          />
        </FieldContainer>
        <FieldContainer>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Enquiring as a parent"
            name="isParent"
            checked={formData.isParent}
            onChange={handleChange}
          />
        </FieldContainer>
        <ButtonContainer>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </ButtonContainer>
      </FormContainer>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000} // Adjust duration as needed
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Email sent successfully!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
