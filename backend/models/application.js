const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  applicant: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: {    type: String, enum: ["pending", "accepted", "rejected"], default: "pending"},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("application", applicationSchema);
