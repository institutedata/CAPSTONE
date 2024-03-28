const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Define the login function
exports.login = async (req, res) => {
  try {
    // Extract username and password from the request body
    const { username, password } = req.body;

    console.log('Searching for user:', username);

    // Find the user in the database by username
    const user = await User.findOne({ username });

    console.log('User found:', user);

    // Check if user exists and if the password matches
    if (user && user.password === password) {
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, 'your_secret_key_here', { expiresIn: '1h' });

      // Authentication successful, send JWT token along with user data
      res.status(200).json({ message: 'Login successful', token, username: user.username, user }); // Include 'username' field in the response
    } else {
      // Authentication failed
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
