const Attendance = require('../models/Attendance');

exports.addAttendance = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    console.log('File:', req.file);

    const { name, inTime } = req.body;
    const image = req.file ? req.file.path : null;
    
    if (!name || !inTime || !image) {
      return res.status(400).json({ error: 'Name, inTime, and image are required' });
    }

    const newAttendance = new Attendance({ name, image, inTime });
    await newAttendance.save();
    res.status(201).json(newAttendance);
  } catch (error) {
    console.error('Error adding attendance:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    console.log('File:', req.file);

    const { id, name, inTime, outTime } = req.body;
    const updateData = { name, inTime, outTime };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const attendance = await Attendance.findByIdAndUpdate(id, updateData, { new: true });
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }

    res.status(200).json(attendance);
  } catch (error) {
    console.error('Error updating attendance:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.status(200).json(attendance);
  } catch (error) {
    console.error('Error fetching attendance:', error.message);
    res.status(500).json({ error: error.message });
  }
};