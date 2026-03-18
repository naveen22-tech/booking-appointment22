const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// POST - Book Appointment
router.post('/', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ message: "Appointment booked successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - All Appointments (Admin Panel)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE (Bonus feature)
router.delete('/:id', async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;