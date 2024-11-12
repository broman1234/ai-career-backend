const express = require('express');
const router = express.Router();
const { generateCareerInfo } = require('../controllers/careerController');

router.get('/info/:careerPath', generateCareerInfo);

module.exports = router; 