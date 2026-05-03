// routes/quizRouter.js
const express = require('express');
const router = express.Router();
const quizDB = require('../models/quiz');
const questionDB = require('../models/question');

// Get a specific quiz with all questions
router.get('/:quizId', async (req, res) => {
  try {
    const quiz = await quizDB.findById(req.params.quizId)
      .populate('subject');

    if (!quiz) {
      return res.status(404).render('error', { message: 'Quiz not found' });
    }

    const questions = await questionDB.find({ quiz: req.params.quizId });

    res.render('quiz', { quiz, questions });
  } catch (err) {
    res.status(500).render('error', { message: 'Failed to load quiz' });
  }
});


module.exports = router;