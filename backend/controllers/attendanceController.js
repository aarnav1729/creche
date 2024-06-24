const Attendance = require('../models/Attendance');

exports.addAttendance = async (req, res) => {
  try {
    const { name, inTime } = req.body;
    const image = req.file ? req.file.path : null;

    if (!name || !inTime || !image) {
      console.error('Validation error: Name, inTime, and image are required');
      return res.status(400).json({ error: 'Name, inTime, and image are required' });
    }

    const newAttendance = new Attendance({ name, image, inTime });
    await newAttendance.save();
    res.status(201).json(newAttendance);
  } catch (error) {
    console.error('Error adding attendance:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    const { id, name, inTime, outTime } = req.body;
    const updateData = { name, inTime };

    if (outTime) {
      updateData.outTime = outTime;
    }

    if (req.file) {
      updateData.image = req.file.path;
    }

    const attendance = await Attendance.findByIdAndUpdate(id, updateData, { new: true });
    if (!attendance) {
      console.error('Attendance not found');
      return res.status(404).json({ error: 'Attendance not found' });
    }

    res.status(200).json(attendance);
  } catch (error) {
    console.error('Error updating attendance:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.status(200).json(attendance);
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).json({ error: error.message });
  }
};