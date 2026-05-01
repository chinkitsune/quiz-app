// routes/homeRouter.js
const express = require('express');
const router = express.Router();


// Define your subjects data
const subjects = [
  {
    id: 'java',
    name: 'Java',
    title: 'Object-Oriented Programming',
    description: 'CST8284 · Weekly practice exams covering OOP concepts in Java',
    color: 'java-color'
  },
  {
    id: 'web',
    name: 'Web',
    title: 'Web Programming',
    description: 'HTML, CSS, JavaScript, and modern front-end frameworks',
    color: 'web-color'
  },
  {
    id: 'linux',
    name: 'Linux',
    title: 'Linux & Shell',
    description: 'Command line, scripting, permissions, and system administration',
    color: 'linux-color'
  },
  {
    id: 'database',
    name: 'Database',
    title: 'Database & SQL',
    description: 'Relational design, SQL queries, normalization, and transactions',
    color: 'database-color'
  }
];

router.get('/', (req, res) => {
    res.render('home',{ subjects });
});

module.exports = router;
