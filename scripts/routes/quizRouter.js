// routes/quizRouter.js
const express = require('express');
const router = express.Router();
const quizDB = require('../models/quiz');
const questionDB = require('../models/question');

// Get a specific quiz with all questions
router.get('/:slug', async (req, res) => {
  try {
    const quiz = await quizDB.findOne({ slug: req.params.slug });

    if (!quiz) {
      return res.status(404).render('error', { message: 'Quiz not found' });
    }

    const questions = await questionDB.find({ quiz: quiz._id });

    res.render('quiz', { 
      quiz, 
      questions,
      quizDataJson: JSON.stringify({ quiz, questions })
    });
  } catch (err) {
    res.status(500).render('error', { message: 'Failed to load quiz' });
  }
});


module.exports = router;