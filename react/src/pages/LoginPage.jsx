import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const LoginContainer = styled('div')({
  textAlign: 'center',
  padding: '20px',
});

const LoginButton = styled(Button)({
  margin: '10px',
});

const LogInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      // Navigate to the dashboard if user is logged in
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: formData.username, password: formData.password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, username } = data;
        localStorage.setItem('token', token); // Save the token in local storage
        localStorage.setItem('username', username); // Save the username in local storage
        // Navigate to the dashboard after successful login
        navigate('/dashboard');
        console.log('Login successful');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <Typography variant="h4" gutterBottom style={{ color: '#800080', fontWeight: 'bold' }}>
        Log In
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="text"
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {error && <Typography variant="body2" style={{ color: 'red' }}>{error}</Typography>}
        <Button type="submit" variant="contained" style={{ fontWeight: 'bold', marginTop: '30px', backgroundColor: '#800080' }} disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </Button>
      </form>
      <Typography variant="body1" gutterBottom style={{ color: '#800080', fontWeight: 'bold', marginTop: '50px' }}>
        Don't have an account?{' '}
        <RouterLink to="/signup" style={{ textDecoration: 'underline', color: '#800080', fontWeight: 'bold' }}>
          Sign up here
        </RouterLink>
      </Typography>
      <Typography variant="body2" gutterBottom style={{ color: '#800080' }}>
        OR
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <LoginButton
            variant="contained"
            color="primary"
            startIcon={<FacebookIcon />}
            // onClick={handleFacebookLogin}
          >
            Continue with Facebook
          </LoginButton>
        </Grid>
        <Grid item>
          <LoginButton
            variant="contained"
            color="secondary"
            startIcon={<GoogleIcon />}
            // onClick={handleGoogleLogin}
          >
            Continue with Google
          </LoginButton>
        </Grid>
      </Grid>
    </LoginContainer>
  );
};

export default LogInPage;
