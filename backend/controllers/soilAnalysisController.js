const SoilAnalysis = require('../models/SoilAnalysis');

// Upload Soil Analysis
exports.uploadSoilAnalysis = async (req, res) => {
  const { userId, imageUrl, analysisResult } = req.body;

  try {
    const soilAnalysis = new SoilAnalysis({
      userId,
      imageUrl,
      analysisResult,
    });

    await soilAnalysis.save();
    res.json(soilAnalysis);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Soil Analysis
exports.getSoilAnalysis = async (req, res) => {
  try {
    const soilAnalysis = await SoilAnalysis.find({ userId: req.user.id });
    res.json(soilAnalysis);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};