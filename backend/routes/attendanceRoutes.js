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

router.post('/', upload.single('image'), addAttendance);
router.get('/', getAttendance);
router.put('/update', upload.single('image'), updateAttendance);

module.exports = router;