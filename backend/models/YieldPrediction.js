const mongoose = require("mongoose");

const YieldPredictionSchema = new mongoose.Schema({
  crop: { type: String, required: true },
  prediction: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("YieldPrediction", YieldPredictionSchema);
