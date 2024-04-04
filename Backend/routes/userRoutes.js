/** @format */

// Handles CRUD operations for users

const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// GET request to fetch all users
router.get('/', (req, res) => {
  Controllers.userController.getUser(res);
});

// POST request to create a new user
router.post('/create', (req, res) => {
  // Extract form data from request body
  const { firstName, lastName, emailId, password } = req.body;
  // Call the createUser function from the controller and pass the form data
  Controllers.userController.createUser(
    { firstName, lastName, emailId, password },
    res
  );
});

// POST request to authenticate user login
router.post('/login', (req, res) => {
  const { emailId, password } = req.body;
  // Call the loginUser function from the controller to authenticate the user
  Controllers.userController.loginUser({ emailId, password }, res);
});

// PUT request to update a user
router.put('/:id', (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// DELETE request to delete a user
router.delete('/:id', (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = router;
