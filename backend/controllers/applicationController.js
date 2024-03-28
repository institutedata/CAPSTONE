"use strict";
let Models = require("../models"); // matches index.js

const createApplication = (data, res) => {
  const { jobId, applicant } = data;

  // Check if the job is closed
  Models.Job.findById(jobId)
    .then((job) => {
      if (!job) {
        return res
          .status(404)
          .json({ result: "error", message: "Job not found" });
      }

      if (job.status === "closed") {
        return res
          .status(400)
          .json({
            result: "error",
            message: "Job is closed and cannot be applied for",
          });
      }

      // Check if there is an existing application for the same job and user
      Models.Application.findOne({ jobId: jobId, applicant: applicant })
        .then((existingApplication) => {
          if (existingApplication) {
            // If an application already exists, return an error response
            return res
              .status(400)
              .json({
                result: "error",
                message: "User already applied for this job",
              });
          } else {
            // If no existing application and job is not closed, create a new application
            new Models.Application(data)
              .save()
              .then((data) =>
                res.status(201).json({ result: "success", data: data })
              )
              .catch((err) => {
                console.error(err);
                res.status(500).json({ result: "error", message: err.message });
              });
          }
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ result: "error", message: err.message });
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};

const getApplications = (req, res) => {
  const jobId = req.params.jobId; // Get the job ID from request parameters

  // Find applications for the specified job
  Models.Application.find({ jobId: jobId }) // Filter by job ID
    .then((data) => {
      res.status(200).json({ result: "success", data: data });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};

const acceptApplication = (req, res) => {
  const appId = req.params.appId;
  // Update application status to 'accepted'
  Models.Application.findByIdAndUpdate(
    appId,
    { status: "accepted" },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .json({ result: "error", message: "Application not found" });
      }
      res.status(200).json({ result: "success", data: data });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};

const rejectApplication = (req, res) => {
  const appId = req.params.appId;
  // Update application status to 'rejected'
  Models.Application.findByIdAndUpdate(
    appId,
    { status: "rejected" },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .json({ result: "error", message: "Application not found" });
      }
      res.status(200).json({ result: "success", data: data });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};

const deleteApplication = (req, res) => {
  const appId = req.params.id;
  const userId = req.body.userId; // Assuming you provide the user ID in the request body

  // Find the application by ID
  Models.Application.findById(appId)
    .then((application) => {
      // Check if the application exists
      if (!application) {
        return res.status(404).json({ result: "error", message: "Application not found" });
      }

      // Check if the user deleting the application is the same user who applied for it
      if (application.applicant.toString() !== userId) {
        return res.status(403).json({ result: "error", message: "You are not authorized to delete this application" });
      }

      // Delete the application
      return Models.Application.findByIdAndDelete(applicationId);
    })
    .then((deletedApplication) => {
      res.status(200).json({ result: "success", message: "Application deleted successfully", data: deletedApplication });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};

module.exports = {
  createApplication,
  getApplications,
  acceptApplication,
  rejectApplication,
  deleteApplication,
};
