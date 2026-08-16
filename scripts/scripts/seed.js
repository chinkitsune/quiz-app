// scripts/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const slugify = require('slugify');

// Import your models
const subjectDB = require('../models/subject');
const quizDB = require('../models/quiz');
const questionDB = require('../models/question');

// Import your data files
const subjectsData = require('../data/subjectsData');
const quizzesData = require('../data/quizzesData');
const questionsData = require('../data/questionsData');

// Connection string
const MONGODB_URI = process.env.MONGO_URI ;

async function seedDatabase() {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✓ Connected to MongoDB');

    // 2. Clear existing data (optional - comment out to preserve)
    await subjectDB.deleteMany({});
    await quizDB.deleteMany({});
    await questionDB.deleteMany({});
    console.log('✓ Cleared existing data');

    // 3. Insert Subjects
    const createdSubjects = await subjectDB.insertMany(subjectsData);
    console.log(`✓ Inserted ${createdSubjects.length} subjects`);

    // 4. Insert Quizzes with generated slugs
    const quizzesWithSlugs = quizzesData.map(quiz => {
      const slug = slugify(quiz.title, {
        lower: true,
        strict: true,
        trim: true
      });

      // Find the subject _id by name
      const subject = createdSubjects.find(s => s.name === quiz.subjectName);

      return {
        ...quiz,
        slug,
        subject: subject._id,
        subjectName: undefined  // Remove temporary reference
      };
    });

    const createdQuizzes = await quizDB.insertMany(quizzesWithSlugs);
    console.log(`✓ Inserted ${createdQuizzes.length} quizzes with slugs`);

    // 5. Insert Questions
    const questionsWithQuizRefs = questionsData.map(question => {
      // Find the quiz _id by title
      const quiz = createdQuizzes.find(q => q.title === question.quizTitle);
      const subject = createdSubjects.find(s => 
        createdQuizzes.some(q => q._id.equals(quiz._id) && q.subject.equals(s._id))
      );

      return {
        ...question,
        quiz: quiz._id,
        subject: subject._id,
        quizTitle: undefined  // Remove temporary reference
      };
    });

    const createdQuestions = await questionDB.insertMany(questionsWithQuizRefs);
    console.log(`✓ Inserted ${createdQuestions.length} questions`);

    // 6. Update quiz questionCount
    for (let quiz of createdQuizzes) {
      const count = createdQuestions.filter(q => q.quiz.equals(quiz._id)).length;
      await quizDB.findByIdAndUpdate(quiz._id, { questionCount: count });
    }
    console.log('✓ Updated quiz question counts');

    console.log('\n✅ Database seeding completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding database:', err);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();
