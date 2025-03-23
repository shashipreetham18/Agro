// const axios = require("axios");
// const fs = require("fs");
// const path = require("path");

// const analyzePlantImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       console.error("No image file provided.");
//       return res.status(400).json({ error: "No image file provided." });
//     }

//     // Read the image file and convert it to base64
//     const imagePath = path.join(__dirname, "..", req.file.path);
//     const imageBuffer = fs.readFileSync(imagePath);
//     const base64Image = imageBuffer.toString("base64");

//     console.log("Image converted to base64 successfully.");

//     // Prepare the request body
//     const requestBody = {
//       images: [`data:${req.file.mimetype};base64,${base64Image}`],
//       similar_images: true, // Optional: Request similar images
//     };

//     console.log("Sending request to Plant.id API...");

//     // Make the API request to Plant.id
//     const response = await axios.post("https://plant.id/api/v3/identification", requestBody, {
//       headers: {
//         "Api-Key": "ZNoJ0Wwf41HihHWgJUBcTodyfe71bVIrMm8LBdHvSJveHfBcEq", // Replace with your API key
//         "Content-Type": "application/json",
//       },
//     });

//     console.log("Plant.id API response:", JSON.stringify(response.data, null, 2)); // Log the full response
//     console.log("Suggestions:", response.data.result.classification.suggestions); // Log the suggestions array

//     // Delete the uploaded file after processing
//     fs.unlinkSync(imagePath);

//     // Send the API response to the frontend
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error analyzing image:", error);
//     res.status(500).json({ error: "Failed to analyze the image." });
//   }
// };

// module.exports = { analyzePlantImage };










const axios = require("axios");
const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

// Initialize OpenAI client
const openai = new OpenAI({
  
});

const analyzePlantImage = async (req, res) => {
  try {
    if (!req.file) {
      console.error("No image file provided.");
      return res.status(400).json({ error: "No image file provided." });
    }

    // Read the image file and convert it to base64
    const imagePath = path.join(__dirname, "..", req.file.path);
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString("base64");

    console.log("Image converted to base64 successfully.");

    // Prepare the request body
    const requestBody = {
      images: [`data:${req.file.mimetype};base64,${base64Image}`],
      similar_images: true, // Optional: Request similar images
    };

    console.log("Sending request to Plant.id API...");

    // Make the API request to Plant.id
    const response = await axios.post("https://plant.id/api/v3/identification", requestBody, {
      headers: {
        "Api-Key": "ZNoJ0Wwf41HihHWgJUBcTodyfe71bVIrMm8LBdHvSJveHfBcEq", // Replace with your Plant.id API key
        "Content-Type": "application/json",
      },
    });

    console.log("Plant.id API response:", JSON.stringify(response.data, null, 2)); // Log the full response
    console.log("Suggestions:", response.data.result.classification.suggestions); // Log the suggestions array

    // Delete the uploaded file after processing
    fs.unlinkSync(imagePath);

    // Send the API response to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Error analyzing image:", error);
    res.status(500).json({ error: "Failed to analyze the image." });
  }
};

const handleTextQuery = async (req, res) => {
  try {
    const { message } = req.body;

    // Use OpenAI's GPT to generate a response
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use GPT-3.5
      messages: [
        {
          role: "system",
          content: "You are a helpful agricultural assistant. Answer the following question:",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 150,
    });

    const botMessage = completion.choices[0].message.content.trim();
    res.json({ message: botMessage });
  } catch (error) {
    console.error("Error handling text query:", error);
    res.status(500).json({ error: "Failed to process the query." });
  }
};

module.exports = { analyzePlantImage, handleTextQuery };