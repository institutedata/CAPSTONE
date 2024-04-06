const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// Post a new booking
router.post('/bookings', (req, res) => {
  const newBooking = new Booking(req.body);
  newBooking.save()
    .then(booking => res.status(201).send(booking))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
