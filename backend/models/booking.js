const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  organisingTeacherName: String,
  email: String,
  mobileNumber: String,
  schoolName: String,
  address: String,
  visitFormat: String,
  firstPreferredDate: Date,
});

module.exports = mongoose.model('Booking', bookingSchema);
