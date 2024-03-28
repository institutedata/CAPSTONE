"use strict";
let Models = require("../models"); // matches index.js

const getJobs = (res) => {
  // finds all Jobs
  Models.Job.find({})
    .then((data) => res.status(200).json({ result: "success", data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};
const createJob = (data, res) => {
  console.log(data);
  new Models.Job(data)
    .save()
    .then((data) => res.status(201).json({ result: "success", data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};

const getJobDetails = (jobId, res) => {
  // Find the job by ID
  Models.Job.findById(jobId)
    .then((job) => {
      // Check if the job exists
      if (!job) {
        return res
          .status(404)
          .json({ result: "error", message: "Job not found" });
      }
      // Job found, send it in the response
      res.status(200).json({ result: "success", data: job });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};

const updateJob = (req, res) => {
  console.log(req.body);
  const jobId = req.params.id;
  const { userId, status } = req.body;

  // Find the job by ID
  Models.Job.findById(jobId)
    .then((job) => {
      // Check if the job exists
      if (!job) {
        return res
          .status(404)
          .json({ result: "error", message: "Job not found" });
      }

      // Check if the user updating the job status is the same user who posted the job
      if (job.postedBy.toString() !== userId) {
        return res.status(403).json({
          result: "error",
          message: "You are not authorized to update this job",
        });
      }

      // Update the job status
      job.status = status;
      return job.save();
    })
    .then((updatedJob) => {
      res.status(200).json({ result: "success", data: updatedJob });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};

const deleteJob = (req, res) => {
  const jobId = req.params.id;
  const userId = req.body.userId; // Assuming you provide the user ID in the request body

  // Find the job by ID
  Models.Job.findById(jobId)
    .then((job) => {
      // Check if the job exists
      if (!job) {
        return res
          .status(404)
          .json({ result: "error", message: "Job not found" });
      }

      // Check if the user deleting the job is the same user who posted the job
      if (job.postedBy.toString() !== userId) {
        return res.status(403).json({
          result: "error",
          message: "You are not authorized to delete this job",
        });
      }

      // Delete the job
      return Models.Job.findByIdAndDelete(jobId);
    })
    .then((deletedJob) => {
      res.status(200).json({
        result: "success",
        message: "Job deleted successfully",
        data: deletedJob,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: "error", message: err.message });
    });
};

module.exports = {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  getJobDetails,
};
