/** @format */

'use strict';
const Models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Function to authenticate user login
const loginUser = async (userData, res) => {
  const { emailId, password } = userData;
  console.log('LOGIN DATA: ', userData);
  try {
    // Check if the user exists in the database
    const user = await Models.User.findOne({ where: { emailId } });

    console.log('USER: ', user);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Check if the password matches

    // const isPasswordValid = await bcrypt.compare(
    //   password,
    //   user.dataValues.password
    // );

    const isPasswordValid = (await password) === user.dataValues.password;

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.dataValues.id, emailId: user.dataValues.emailId },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h', // Token expires in 1 hour
      }
    );

    // Return success response with JWT token
    res.status(200).json({ success: true, message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to get all users
const getUser = (res) => {
  Models.User.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Function to create a new user
const createUser = (data, res) => {
  Models.User.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Function to update a user
const updateUser = async (req, res) => {
  console.log(req.body);
  console.log('GET ID', req.params.id);
  try {
    const updatedUser = await Models.User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedUser[0]) {
      return res.status(404).json({
        message: 'No User found or you are not authorized to update the User',
      });
    }

    res
      .status(200)
      .json({ success: true, message: 'User Updated', data: req.body });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Function to delete a user
const deleteUser = async (req, res) => {
  console.log(req.body);
  console.log('GET ID', req.params.id);
  try {
    const deletedUser = await Models.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedUser) {
      return res.status(404).json({
        message: 'No User found or you are not authorized to update the User',
      });
    }

    res
      .status(200)
      .json({ success: true, message: 'User deleted', data: req.body });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  loginUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
