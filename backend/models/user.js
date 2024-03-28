const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { type: String, trim: true, unique: true, required: true, index: true  },
  password: { type: String, required: true },
  emailId: { type: String, trim: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("user", userSchema);
