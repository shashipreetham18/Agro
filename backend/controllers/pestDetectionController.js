const axios = require("axios");
const fs = require("fs");

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

exports.analyzeImage = async (req, res) => {
  const imagePath = req.file.path;

  try {
    // Read the image file
    const image = fs.readFileSync(imagePath, { encoding: "base64" });

    // Send the image to DeepSeek API
    const response = await axios.post(
      "https://api.deepseek.com/v1/vision/analyze", // DeepSeek Vision API endpoint
      {
        image: image, // Base64-encoded image
        model: "pest-detection", // Specify the model for pest detection
      },
      {
        headers: {
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract disease and remedy suggestions from the response
    const { disease, remedy } = response.data;

    res.json({ disease, remedy });
  } catch (error) {
    console.error("Error analyzing image:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to analyze the image." });
  }
};