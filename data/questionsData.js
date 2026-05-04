// data/questionsData.js
module.exports = [
  {
    quizTitle: 'JavaScript Fundamentals',  // Reference by title, not _id yet
    question: 'What is the correct way to declare a variable in modern JavaScript?',
    options: [
      { text: 'var x = 5;', isCorrect: false },
      { text: 'const x = 5;', isCorrect: true },
      { text: 'variable x = 5;', isCorrect: false },
      { text: 'x := 5;', isCorrect: false }
    ],
    correctOption: 1,
    explanation: 'const is preferred in modern JavaScript because it prevents reassignment and creates block-scoped variables.'
  },
  {
    quizTitle: 'JavaScript Fundamentals',
    question: 'What does "this" refer to in an arrow function?',
    options: [
      { text: 'The object that called the function', isCorrect: false },
      { text: 'The parent scope at definition time', isCorrect: true },
      { text: 'The window object', isCorrect: false },
      { text: 'undefined', isCorrect: false }
    ],
    correctOption: 1,
    explanation: 'Arrow functions inherit "this" from the enclosing scope, not from how they are called.'
  },
  {
    quizTitle: 'JavaScript Advanced Concepts',
    question: 'What is a closure?',
    options: [
      { text: 'A function that closes other functions', isCorrect: false },
      { text: 'A function with access to outer scope variables', isCorrect: true },
      { text: 'A completed async operation', isCorrect: false },
      { text: 'A loop that has finished executing', isCorrect: false }
    ],
    correctOption: 1,
    explanation: 'A closure is when a function retains access to variables from its outer scope, even after that scope has executed.'
  },
  {
    quizTitle: 'Python Basics',
    question: 'What is the correct syntax for a list in Python?',
    options: [
      { text: 'list = {1, 2, 3}', isCorrect: false },
      { text: 'list = [1, 2, 3]', isCorrect: true },
      { text: 'list = (1, 2, 3)', isCorrect: false },
      { text: 'list = <1, 2, 3>', isCorrect: false }
    ],
    correctOption: 1,
    explanation: 'In Python, lists are created using square brackets [].'
  }
];
