const express = require("express");
const multer = require("multer");
const { analyzePlantImage } = require("../controllers/chatController");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded files

// Route for analyzing plant images
router.post("/analyze-image", upload.single("file"), analyzePlantImage);

module.exports = router;