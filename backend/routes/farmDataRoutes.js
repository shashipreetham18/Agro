// const express = require('express');
// const router = express.Router();
// const FarmData = require('../models/FarmData');

// // Store farm data
// router.post('/store', async (req, res) => {
//   try {
//     const newFarmData = new FarmData(req.body);
//     await newFarmData.save();
//     res.status(201).json({ message: "Data saved successfully", farmData: newFarmData });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save data" });
//   }
// });

// // Fetch all farm data
// router.get('/all', async (req, res) => {
//   try {
//     const data = await FarmData.find();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const FarmData = require("../models/FarmData");
// const YieldPrediction = require("../models/YieldPrediction");

// // Store farm data
// router.post("/store", async (req, res) => {
//   try {
//     const newFarmData = new FarmData(req.body);
//     await newFarmData.save();
//     res.status(201).json({ message: "Data saved successfully", farmData: newFarmData });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save data" });
//   }
// });

// // Fetch all farm data
// router.get("/all", async (req, res) => {
//   try {
//     const data = await FarmData.find();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

// // Fetch yield predictions
// router.get("/yield-predictions", async (req, res) => {
//   try {
//     const predictions = await YieldPrediction.find();
//     res.status(200).json({ predictions });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch yield predictions" });
//   }
// });

// // Store yield predictions (For testing purposes)
// router.post("/store-yield", async (req, res) => {
//   try {
//     const { crop, prediction } = req.body;
//     const newPrediction = new YieldPrediction({ crop, prediction });
//     await newPrediction.save();
//     res.status(201).json({ message: "Yield prediction saved!", newPrediction });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save yield prediction" });
//   }
// });

// module.exports = router;





















// // farmDataRoutes.js
// const express = require("express");
// const router = express.Router();
// const FarmData = require("../models/FarmData");

// // Store farm data
// router.post("/store", async (req, res) => {
//   try {
//     const newFarmData = new FarmData(req.body);
//     await newFarmData.save();
//     res.status(201).json({ message: "Data saved successfully", farmData: newFarmData });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save data" });
//   }
// });

// // Fetch yield predictions
// router.post("/yield-prediction", async (req, res) => {
//   try {
//     const { crops } = req.body;
//     // Simulate yield prediction logic (replace with actual logic)
//     const predictions = crops.map(crop => ({
//       name: crop.name,
//       yield: Math.floor(Math.random() * 1000) + 500, // Random yield value
//     }));
//     res.status(200).json({ predictions });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch yield predictions" });
//   }
// });

// module.exports = router;














const express = require("express");
const router = express.Router();
const FarmData = require("../models/FarmData");

// Store farm data
router.post("/store", async (req, res) => {
  try {
    const newFarmData = new FarmData(req.body);
    await newFarmData.save();
    res.status(201).json({ message: "Data saved successfully", farmData: newFarmData });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
});

// Fetch all farm data
router.get("/all", async (req, res) => {
  try {
    const data = await FarmData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;