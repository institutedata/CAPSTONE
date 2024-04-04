/** @format */
const express = require('express');
const { HTML } = require('./constant');
let userRoutes = require('./routes/userRoutes');
let exerciseRoutes = require('./routes/exerciseRoutes');
let routineRoutes = require('./routes/routineRoutes');

// Enable CORS
const cors = require('cors');

require('dotenv').config();

let dbConnect = require('./config/dbConnect');

const app = express();

// Enable CORS middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Replace with the origin of your frontend application
    credentials: true, // Allow credentials (cookies, etc.) to be sent with requests
  })
);

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to serve static files
app.use(express.static('public'));

// Extract query parameters from URL
// Middleware to properly parse query parameters
app.use((req, res, next) => {
  req.query = req.url.split('?')[1]
    ? Object.fromEntries(new URLSearchParams(req.url.split('?')[1]))
    : {};
  next();
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/exercise', exerciseRoutes);
app.use('/api/routine', routineRoutes);

// Set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
