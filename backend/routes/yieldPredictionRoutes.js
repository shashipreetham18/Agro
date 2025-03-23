const express = require('express');
const { uploadYieldPrediction, getYieldPrediction } = require('../controllers/yieldPredictionController');
const router = express.Router();

// Upload Yield Prediction
router.post('/upload', uploadYieldPrediction);

// Get Yield Prediction
router.get('/', getYieldPrediction);

module.exports = router;