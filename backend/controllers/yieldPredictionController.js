const YieldPrediction = require('../models/YieldPrediction');

// Upload Yield Prediction
exports.uploadYieldPrediction = async (req, res) => {
  const { userId, cropType, predictedYield } = req.body;

  try {
    const yieldPrediction = new YieldPrediction({
      userId,
      cropType,
      predictedYield,
    });

    await yieldPrediction.save();
    res.json(yieldPrediction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Yield Prediction
exports.getYieldPrediction = async (req, res) => {
  try {
    const yieldPrediction = await YieldPrediction.find({ userId: req.user.id });
    res.json(yieldPrediction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};