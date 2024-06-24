const express = require('express');
const multer = require('multer');
const { addAttendance, getAttendance, updateAttendance } = require('../controllers/attendanceController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.single('image'), (req, res, next) => {
  console.log('Received POST request with body:', req.body);
  console.log('Received file:', req.file);
  next();
}, addAttendance);

router.put('/update', upload.single('image'), (req, res, next) => {
  console.log('Received PUT request with body:', req.body);
  console.log('Received file:', req.file);
  next();
}, updateAttendance);

router.get('/', getAttendance);

module.exports = router;