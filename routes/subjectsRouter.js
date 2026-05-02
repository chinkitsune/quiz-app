// routes/subjectsRouter.js
const express = require('express');
const router = express.Router();
const { subjects, quizzes } = require('../data/subjectsData');

router.get('/:id', (req, res) => {
    const subjectId = req.params.id;

    const subject = subjects.find(s => s.id === subjectId);

      // If subject doesn't exist, redirect or show 404
    if (!subject) {
        return res.status(404).render('error', { message: 'Subject not found' });
    }

    res.render('subjects', { subject }); 
});


module.exports = router;