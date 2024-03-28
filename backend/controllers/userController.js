"use strict";
const axios = require("axios");
const Models = require("../models");

const getUsers = async (res) => {
  try {
    // Retrieve all users from the database
    const allUsersFromDB = await Models.User.find({});

    if (allUsersFromDB.length === 0) {
      // If the database doesn't have any users, fetch user data from the external API
      const externalResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users?_limit=10&_fields=id,username,email"
      );
      const externalUsers = externalResponse.data.map((user) => ({
        id: user.id,
        username: user.username,
        email: user.email,
        password: "defaultPassword", // Set default password
      }));

      // Save the fetched users to the database
      await Models.User.insertMany(externalUsers);

      // Send the user data from the external API in the response
      res.status(200).json({ result: 200, data: externalUsers });
    } else {
      // Fetch user data from the external API
      const externalResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users?_limit=10&_fields=id,username,email"
      );
      const externalUsers = externalResponse.data.map((user) => ({
        id: user.id,
        username: user.username,
        email: user.email,
        password: "defaultPassword", // Set default password
      }));

      // Find users from the external API that are not in the database
      const usersToAdd = externalUsers.filter(
        (externalUser) =>
          !allUsersFromDB.some(
            (dbUser) => dbUser.username === externalUser.username
          )
      );

      // Add the new users to the database
      if (usersToAdd.length > 0) {
        await Models.User.insertMany(usersToAdd);
      }

      // Send the updated list of all users from the database in the response
      const updatedUsersFromDB = await Models.User.find({});
      res.status(200).json({ result: 200, data: updatedUsersFromDB });
    }
  } catch (error) {
    // Handle errors
    console.error("Error fetching and sending users:", error);
    res.status(500).json({ result: 500, error: error.message });
  }
};

const createUser = async (data, res) => {
  try {
    // Check if the username already exists in the database
    const existingUser = await Models.User.findOne({ username: data.username });
    if (existingUser) {
      return res
        .status(400)
        .json({ result: "error", message: "Username already exists" });
    }

    // Create the user if the username doesn't already exist
    const newUser = await new Models.User(data).save();
    res.status(201).json({ result: "success", data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: "error", message: error.message });
  }
};

const updateUser = (req, res) => {
  Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedUser) => {
      res.status(200).json({ result: 200, data: updatedUser });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  Models.User.findByIdAndDelete(req.params.id)
    .then((deletedUser) => {
      res.status(200).json({ result: 200, data: deletedUser });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
