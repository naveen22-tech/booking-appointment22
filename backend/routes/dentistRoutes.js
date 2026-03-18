const express = require('express');
const router = express.Router();
const Dentist = require('../models/Dentist');
const mongoose = require('mongoose');

// GET all dentists
router.get('/', async (req, res) => {
  try {
    const dentists = await Dentist.find();
    res.json(dentists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new dentist (optional for admin)
router.post('/', async (req, res) => {
  const dentist = new Dentist(req.body);
  await dentist.save();
  res.json(dentist);
});

router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const result = await Dentist.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({ message: "Dentist not found" });
    }

    res.json({ message: "Dentist deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;