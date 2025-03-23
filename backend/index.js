// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const soilAnalysisRoutes = require('./routes/soilAnalysisRoutes');
// const pestDetectionRoutes = require('./routes/pestDetectionRoutes');
// const yieldPredictionRoutes = require('./routes/yieldPredictionRoutes');
// const marketplaceRoutes = require('./routes/marketplaceRoutes');
// const questionRoutes = require('./routes/questionRoutes');
// const testimonialRoutes = require('./routes/testimonialRoutes');
// const chatRoutes = require('./routes/chatRoutes');
// const farmDataRoutes = require("./routes/farmDataRoutes");
// // const chatRoutes = require("./routes/chatRoutes");
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use("/api/farm-data", farmDataRoutes);
// app.use('/api/soil-analysis', soilAnalysisRoutes);
// // app.use('/api/pest-detection', pestDetectionRoutes);
// app.use('/api/yield-prediction', yieldPredictionRoutes);
// app.use('/api/marketplace', marketplaceRoutes);
// app.use('/api/questions', questionRoutes);
// app.use('/api/testimonials', testimonialRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/ai", chatRoutes);
// app.use("/api/ai", pestDetectionRoutes);
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

















const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const soilAnalysisRoutes = require('./routes/soilAnalysisRoutes');
const pestDetectionRoutes = require('./routes/pestDetectionRoutes');
const yieldPredictionRoutes = require('./routes/yieldPredictionRoutes');
const marketplaceRoutes = require('./routes/marketplaceRoutes');
const questionRoutes = require('./routes/questionRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const chatRoutes = require('./routes/chatRoutes');
const farmDataRoutes = require("./routes/farmDataRoutes");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from your frontend
  credentials: true,
}));
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/farm-data", farmDataRoutes);
app.use('/api/soil-analysis', soilAnalysisRoutes);
app.use('/api/pest-detection', pestDetectionRoutes); // Uncommented pest detection routes
app.use('/api/yield-prediction', yieldPredictionRoutes);
app.use('/api/marketplace', marketplaceRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use("/api/chat", chatRoutes); // Chatbot routes
app.use("/api/ai", chatRoutes); // Alias for chatbot routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});