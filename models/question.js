// models/question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'quiz',
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subject',
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: {
      type: [String],
      required: true
  },
  correctOption: {
    type: Number,
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('question', questionSchema);