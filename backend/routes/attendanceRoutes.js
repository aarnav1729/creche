const express = require('express');
const { addAttendance, getAttendance } = require('../controllers/attendanceController');

const router = express.Router();

router.post('/', addAttendance);
router.get('/', getAttendance);

module.exports = router;