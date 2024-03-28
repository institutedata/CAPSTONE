const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, required: true },
  payRate: { type: Number },
  location: { type: String }, // Location field
  time: { type: String }, // Time field
  company: { type: Schema.Types.ObjectId, ref: "User" }, // Company field referencing User model
  status: { type: String, enum: ["open", "closed"], default: "open" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true }
});

module.exports = mongoose.model("job", jobSchema);
