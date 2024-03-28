import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Modal,
  Fade,
} from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const SignUpContainer = styled("div")({
  textAlign: "center",
  padding: "20px",
});

const SignUpButton = styled(Button)({
  margin: "10px",
});

const TermsAndConditionsModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
            width: "60%",
            margin: "auto",
            marginTop: "100px",
          }}
        >
          <Typography variant="h5">Terms and Conditions</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            similique modi facilis suscipit! Perspiciatis omnis beatae dolor
            nobis illum laborum quod asperiores autem animi? Aspernatur quia
            repellendus est dicta expedita.{" "}
          </Typography>
        </div>
      </Fade>
    </Modal>
  );
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreement: false,
  });

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      // Navigate to the dashboard if user is logged in
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "agreement" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration successful");
        // Handle successful registration (e.g., redirect user, show success message)
      } else {
        console.error("Registration failed");
        // Handle registration failure (e.g., display error message to user)
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <SignUpContainer>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "#800080", fontWeight: "bold" }}
      >
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
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
              type="email"
              label="Email Address"
              name="email"
              value={formData.email}
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
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              required
              control={<Checkbox color="primary" />}
              label={
                <span>
                  I agree to the{" "}
                  <span
                    style={{
                      color: "#800080",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={handleOpenModal}
                  >
                    terms and conditions
                  </span>
                </span>
              }
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="secondary">
          Sign Up
        </Button>
      </form>
      <Typography
        variant="body1"
        gutterBottom
        style={{
          color: "#800080",
          fontWeight: "bold",
          marginTop: "50px",
        }}
      >
        Already have an account?{" "}
        <RouterLink
          to="/login"
          style={{
            textDecoration: "underline",
            color: "#800080",
            fontWeight: "bold",
          }}
        >
          Log In
        </RouterLink>
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        style={{ color: "#800080", fontWeight: "bold" }}
      >
        OR
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <SignUpButton
            variant="contained"
            color="primary"
            startIcon={<FacebookIcon />}
            // onClick={handleFacebookSignUp}
          >
            Continue with Facebook
          </SignUpButton>
        </Grid>
        <Grid item>
          <SignUpButton
            variant="contained"
            color="secondary"
            startIcon={<GoogleIcon />}
            // onClick={handleGoogleSignUp}
          >
            Continue with Google
          </SignUpButton>
        </Grid>
      </Grid>
      <TermsAndConditionsModal
        open={openModal}
        handleClose={handleCloseModal}
      />
    </SignUpContainer>
  );
};

export default SignUpForm;

