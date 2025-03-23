const express = require('express');
const { uploadSoilAnalysis, getSoilAnalysis } = require('../controllers/soilAnalysisController');
const router = express.Router();

// Upload Soil Analysis
router.post('/upload', uploadSoilAnalysis);

// Get Soil Analysis
router.get('/', getSoilAnalysis);

module.exports = router;