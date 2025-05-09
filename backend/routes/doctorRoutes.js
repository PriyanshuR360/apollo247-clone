const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Add doctor
router.post('/doctors', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).send(doctor);
  } catch (error) {
    res.status(400).send(error);
  }
});

// List doctors with filters
router.get('/doctors', async (req, res) => {
  try {
    const { specialty, page = 1, limit = 10 } = req.query;
    const filter = specialty ? { specialty } : {};
    
    const doctors = await Doctor.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Doctor.countDocuments(filter);

    res.json({
      doctors,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;