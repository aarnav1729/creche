const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  inTime: { type: String, required: true },
  outTime: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);