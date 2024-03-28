import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for authentication status

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of token
    // Add event listener for scroll
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Log the token before removing it
    console.log("Token before removal:", localStorage.getItem("token"));
    
    // Remove token from local storage
    localStorage.removeItem("token");
  
    // Log the token after removing it
    console.log("Token after removal:", localStorage.getItem("token"));
  
    // Update isLoggedIn state immediately after logging out
    setIsLoggedIn(false);
  
    // Navigate to the home page or any other desired location
    navigate('/');
  };

  const navBarButtonStyle = {
    marginRight: "30px",
    "&:hover": {
      backgroundColor: "#800080",
    },
  };

  // Define animation variants for button hover
  const buttonVariants = {
    hover: {
      color: "#800080",
      scale: 1.1, // Increase scale on hover
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div style={{ marginBottom: isSticky ? "72px" : "0" }}>
      <AppBar
        position={isSticky ? "fixed" : "static"}
        sx={{ backgroundColor: "#ffffff", borderBottom: "2px solid #800080" }}
      >
        <Toolbar>
          <motion.div
            whileHover={buttonVariants.hover}
            style={{ marginRight: "10px" }}
          >
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={handleClick}
              sx={{ color: "#800080" }}
            >
              <MenuIcon />
            </IconButton>
          </motion.div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "#800080",
              }}
            >
              GIUP
            </Typography>
          </Link>

          <div style={{ display: "flex", alignItems: "center" }}>
            {isLoggedIn ? (
              <motion.button
                whileHover="hover"
                variants={buttonVariants}
                style={{
                  ...navBarButtonStyle,
                  color: "#800080",
                  fontWeight: "bold",
                  backgroundColor: "#ffffff",
                  border: "2px solid #800080",
                  cursor: "pointer",
                  fontSize: "20px",
                  padding: "10px 20px",
                }}
                onClick={handleLogout}
              >
                Log Out
              </motion.button>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <motion.button
                    whileHover="hover"
                    variants={buttonVariants}
                    style={{
                      ...navBarButtonStyle,
                      color: "#800080",
                      fontWeight: "bold",
                      backgroundColor: "#ffffff",
                      border: "2px solid #800080",
                      cursor: "pointer",
                      fontSize: "20px",
                      padding: "10px 20px",
                    }}
                  >
                    Log In
                  </motion.button>
                </Link>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <motion.button
                    whileHover="hover"
                    variants={buttonVariants}
                    style={{
                      ...navBarButtonStyle,
                      color: "#800080",
                      fontWeight: "bold",
                      backgroundColor: "#ffffff",
                      border: "2px solid #800080",
                      cursor: "pointer",
                      fontSize: "20px",
                      padding: "10px 20px",
                    }}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/"
          sx={{ color: "#800080" }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/about"
          sx={{ color: "#800080" }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/services"
          sx={{ color: "#800080" }}
        >
          Services
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/contact"
          sx={{ color: "#800080" }}
        >
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
