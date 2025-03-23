const express = require("express");
const multer = require("multer");
const pestDetectionController = require("../controllers/pestDetectionController");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded images

// Image analysis endpoint
router.post("/analyze-image", upload.single("image"), pestDetectionController.analyzeImage);

module.exports = router;