const express = require('express');
const router = express.Router();


// Define your subjects data
const subjects = [
  {
    id: 'java',
    name: 'Java',
    title: 'Object-Oriented Programming',
    description: 'CST8284 · Weekly practice exams covering OOP concepts in Java',
    color: '#2d5a3d'
  },
  {
    id: 'web',
    name: 'Web',
    title: 'Web Programming',
    description: 'HTML, CSS, JavaScript, and modern front-end frameworks',
    color: '#1a5fa8'
  },
  {
    id: 'linux',
    name: 'Linux',
    title: 'Linux & Shell',
    description: 'Command line, scripting, permissions, and system administration',
    color: '#b45309'
  },
  {
    id: 'database',
    name: 'Database',
    title: 'Database & SQL',
    description: 'Relational design, SQL queries, normalization, and transactions',
    color: '#7c3aed'
  }
];

router.get('/', (req, res) => {
    res.render('home',{ subjects });
});

module.exports = router;
