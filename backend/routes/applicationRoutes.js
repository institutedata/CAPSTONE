const express = require("express");
const router = express.Router();
let Controllers = require("../controllers"); // index.js

// Route to get all applications
router.get("/:jobId/applicants", (req, res) => {
  Controllers.applicationController.getApplications(req, res);
});

// Route to create a new apply
router.post("/apply", (req, res) => {
  Controllers.applicationController.createApplication(req.body, res);
});

// Route to update a apply by ID
router.put("/accept/:appId", (req, res) => {
  Controllers.applicationController.acceptApplication(req, res);
});

// Route to delete a apply by ID
router.put("/reject/:appId", (req, res) => {
  Controllers.applicationController.rejectApplication(req, res);
});

router.delete("/delete/:appId", (req, res) => {
  Controllers.applicationController.deleteApplication(req, res);
});

module.exports = router;
