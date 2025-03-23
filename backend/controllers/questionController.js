const Question = require('../models/Question');

// Add Question
exports.addQuestion = async (req, res) => {
  const { question, imageUrl } = req.body;

  try {
    const newQuestion = new Question({
      question,
      imageUrl,
    });

    await newQuestion.save();
    res.json(newQuestion);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Questions
exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};