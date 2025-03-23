// const FarmData = require("../models/FarmData");

// // Store farm data
// exports.storeFarmData = async (req, res) => {
//   const { location, soilMoisture, soilPH, cropType, weather } = req.body;

//   try {
//     const farmData = new FarmData({ location, soilMoisture, soilPH, cropType, weather });

//     await farmData.save();
//     res.json({ msg: "Farm data saved successfully!", farmData });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error while saving farm data.");
//   }
// };

// // Get all farm data
// exports.getAllFarmData = async (req, res) => {
//   try {
//     const farmData = await FarmData.find().sort({ createdAt: -1 }); // Get latest farm data first
//     res.json(farmData);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error while fetching farm data.");
//   }
// };






















// exports.storeFarmData = async (req, res) => {
//   const { location, soilMoisture, soilPH, crops, weather } = req.body;

//   try {
//     const farmData = new FarmData({ location, soilMoisture, soilPH, crops, weather });
//     await farmData.save();
//     res.json({ msg: "Farm data saved successfully!", farmData });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error while saving farm data.");
//   }
// };




const FarmData = require("../models/FarmData");

// Store farm data
exports.storeFarmData = async (req, res) => {
  const { location, soilMoisture, soilPH, crops, weather } = req.body;

  try {
    const farmData = new FarmData({ location, soilMoisture, soilPH, crops, weather });
    await farmData.save();
    res.json({ msg: "Farm data saved successfully!", farmData });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error while saving farm data.");
  }
};

// Get all farm data
exports.getAllFarmData = async (req, res) => {
  try {
    const farmData = await FarmData.find().sort({ createdAt: -1 }); // Get latest farm data first
    res.json(farmData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error while fetching farm data.");
  }
};