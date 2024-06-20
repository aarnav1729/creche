const Attendance = require('../models/Attendance');

exports.addAttendance = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the request body
    console.log('File:', req.file); // Log the uploaded file

    const { name, inTime, outTime } = req.body;
    const image = req.file.path; // Ensure the file path is correctly assigned
    const newAttendance = new Attendance({ name, image, inTime, outTime });
    await newAttendance.save();
    res.status(201).json(newAttendance);
  } catch (error) {
    console.error('Error adding attendance:', error); // Log the error
    res.status(500).json({ error: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.status(200).json(attendance);
  } catch (error) {
    console.error('Error fetching attendance:', error); // Log the error
    res.status(500).json({ error: error.message });
  }
};