const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  experience: { type: Number, required: true },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);