const express = require('express');
const { addQuestion, getQuestions } = require('../controllers/questionController');
const router = express.Router();

// Add Question
router.post('/add', addQuestion);

// Get Questions
router.get('/', getQuestions);

module.exports = router;