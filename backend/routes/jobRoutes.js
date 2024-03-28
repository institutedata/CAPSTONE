let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.jobController.getJobs(res);
});

// Adds a route to get details of a specific job by ID
router.get("/:jobId", (req, res) => {
  Controllers.jobController.getJobDetails(req.params.jobId, res);
});

// Adds a job route to create a new user
router.post("/create", (req, res) => {
  console.log(req);
  Controllers.jobController.createJob(req.body, res);
});

//Update
router.put("/update/:id", (req, res) => {
  Controllers.jobController.updateJob(req, res);
});

//Delete
router.delete("/delete/:id", (req, res) => {
  Controllers.jobController.deleteJob(req, res);
});

module.exports = router;
