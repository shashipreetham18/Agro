// const mongoose = require("mongoose");

// const FarmDataSchema = new mongoose.Schema({
//   location: { type: String, required: true },
//   soilMoisture: { type: String, required: true },
//   soilPH: { type: String, required: true },
//   cropType: { type: String, required: true },
//   weather: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("FarmData", FarmDataSchema);

















// const mongoose = require("mongoose");

// const FarmDataSchema = new mongoose.Schema({
//   location: { type: String, required: true },
//   soilMoisture: { type: String, required: true },
//   soilPH: { type: String, required: true },
//   crops: [{ name: String, acres: String }], // Store multiple crops
//   weather: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("FarmData", FarmDataSchema);












// const mongoose = require("mongoose");

// const FarmDataSchema = new mongoose.Schema({
//   location: { type: String, required: true },
//   soilMoisture: { type: String, required: true },
//   soilPH: { type: String, required: true },
//   crops: [{ name: String, acres: String }], // Store multiple crops
//   weather: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("FarmData", FarmDataSchema);















const mongoose = require("mongoose");

const FarmDataSchema = new mongoose.Schema({
  location: { type: String, required: true },
  soilMoisture: { type: String, required: true },
  soilPH: { type: String, required: true },
  crops: [{ name: String, acres: String }], // Store multiple crops
  weather: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FarmData", FarmDataSchema);