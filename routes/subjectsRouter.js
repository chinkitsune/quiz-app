// routes/subjectsRouter.js
const express = require('express');
const router = express.Router();
const subjectDB = require('../models/subject');

router.get('/:name', async (req, res) => {
  try {
    const subject = await subjectDB.findOne({ name: req.params.name });

    if (!subject) {
      return res.status(404).render('error', { message: 'Subject not found' });
    }

    res.render('subjects', { subject });
  } catch (err) {
    res.status(500).render('error', { message: 'Failed to load subject' });
  }
});

module.exports = router;