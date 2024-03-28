let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

//Update
router.put("/update/:id", (req, res) => {
    console.log("Update user route handler is being executed")
  Controllers.userController.updateUser(req, res);
});

//Delete
router.delete("/delete/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
