// routes/homeRouter.js
const express = require('express');
const router = express.Router();
const subjectDB = require('../models/subject');

router.get('/', async (req, res) => {
  try {
    const subjects = await subjectDB.find().sort('name');
    res.render('home', { subjects });
  } catch (err) {
    res.status(500).render('error', { message: 'Failed to load subjects' });
  }
});

module.exports = router;
