// data/questionsData.js (advanced version)
const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, 'questions');
const questionFiles = fs.readdirSync(questionsDir).filter(file => file.endsWith('.js'));

let allQuestions = [];

questionFiles.forEach(file => {
  const quizQuestions = require(path.join(questionsDir, file));
  allQuestions = allQuestions.concat(quizQuestions);
});

module.exports = allQuestions;