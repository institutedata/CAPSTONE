/** @format */

import * as React from 'react';
import { useState } from 'react';
import {
  FormContainer,
  FieldContainer,
  ButtonContainer,
  FormLabel,
  FormInput,
  FormButton,
} from './FormStyles';
import { useNavigate } from 'react-router-dom';
import { SERVER_PATHS } from '../../routes/Paths';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios'; // Import axios for making HTTP requests

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccessOpen, setIsLoginSuccessOpen] = useState(false);
  const [isLoginErrorOpen, setIsLoginErrorOpen] = useState(false);

  const navigate = useNavigate();

  const handleLoginSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsLoginSuccessOpen(false);
  };

  const handleLoginErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsLoginErrorOpen(false);
  };

  const handleLogin = async () => {
    try {
      console.log('serverpath: ', SERVER_PATHS.LOGIN);
      const response = await axios.post(SERVER_PATHS.LOGIN, {
        emailId: email,
        password,
      });
      // Assuming the backend returns a success message upon successful login
      if (response.data.success) {
        console.log('response data: ', response.data);
        setIsLoginSuccessOpen(true);
        navigate('/'); // Redirect to dashboard upon successful login
      } else {
        setIsLoginErrorOpen(true);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setIsLoginErrorOpen(true);
    }
  };

  return (
    <div>
      <FormContainer>
        <FieldContainer>
          <FormLabel>Email</FormLabel>
          <FormInput
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <FormLabel>Password</FormLabel>
          <FormInput
            name="password"
            type="password"
            placeholder="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FieldContainer>
        <ButtonContainer>
          <FormButton onClick={handleLogin}>Log in</FormButton>
        </ButtonContainer>
      </FormContainer>

      {/* Snackbar for login success */}
      <Snackbar
        open={isLoginSuccessOpen}
        autoHideDuration={6000}
        onClose={handleLoginSuccessClose}
      >
        <MuiAlert
          onClose={handleLoginSuccessClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Log in successful
        </MuiAlert>
      </Snackbar>

      {/* Snackbar for login error */}
      <Snackbar
        open={isLoginErrorOpen}
        autoHideDuration={6000}
        onClose={handleLoginErrorClose}
      >
        <MuiAlert
          onClose={handleLoginErrorClose}
          severity="error"
          sx={{ width: '100%' }}
        >
          Error logging in. Please check your credentials.
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
