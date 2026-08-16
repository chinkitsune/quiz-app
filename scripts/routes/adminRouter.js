// routes/adminRouter.js
// Lets you create quizzes and add questions directly to MongoDB
// through a simple form, instead of editing data files and
// re-running the seed script every time.
const express = require('express');
const router = express.Router();
const slugify = require('slugify');

const subjectDB = require('../models/subject');
const quizDB = require('../models/quiz');
const questionDB = require('../models/question');

// GET /admin - show the "create quiz" and "add questions" forms
router.get('/', async (req, res) => {
  try {
    const subjects = await subjectDB.find().sort({ title: 1 });
    const quizzes = await quizDB.find().populate('subject').sort({ title: 1 });

    res.render('admin', {
      title: 'Admin',
      subjects,
      quizzes,
      success: req.query.success,
      error: req.query.error
    });
  } catch (err) {
    res.status(500).render('error', { message: 'Failed to load admin page: ' + err.message });
  }
});

// POST /admin/quizzes - create one quiz, slug generated automatically
router.post('/quizzes', async (req, res) => {
  try {
    const { subjectName, title, description, tagA, tagB } = req.body;

    if (!subjectName || !title || !description) {
      return res.redirect('/admin?error=' + encodeURIComponent('Subject, title and description are required'));
    }

    const subject = await subjectDB.findOne({ name: subjectName });
    if (!subject) {
      return res.redirect('/admin?error=' + encodeURIComponent(`Subject "${subjectName}" not found`));
    }

    const slug = slugify(title, { lower: true, strict: true, trim: true });

    const existing = await quizDB.findOne({ slug });
    if (existing) {
      return res.redirect('/admin?error=' + encodeURIComponent(`A quiz with slug "${slug}" already exists`));
    }

    const quiz = await quizDB.create({
      subject: subject._id,
      title,
      slug,
      description,
      tagA,
      tagB
    });

    res.redirect('/admin?success=' + encodeURIComponent(`Quiz "${quiz.title}" created (slug: ${quiz.slug}). Now add its questions below.`));
  } catch (err) {
    res.redirect('/admin?error=' + encodeURIComponent(err.message));
  }
});

// POST /admin/questions - bulk-insert questions (pasted as JSON) into a chosen quiz
router.post('/questions', async (req, res) => {
  try {
    const { quizId, questionsJson } = req.body;

    if (!quizId) {
      return res.redirect('/admin?error=' + encodeURIComponent('Pick a quiz first'));
    }

    const quiz = await quizDB.findById(quizId);
    if (!quiz) {
      return res.redirect('/admin?error=' + encodeURIComponent('Quiz not found'));
    }

    let parsed;
    try {
      parsed = JSON.parse(questionsJson);
    } catch (e) {
      return res.redirect('/admin?error=' + encodeURIComponent('That is not valid JSON: ' + e.message));
    }

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return res.redirect('/admin?error=' + encodeURIComponent('JSON must be a non-empty array of question objects'));
    }

    // Basic shape check with a helpful error instead of a generic Mongoose one
    for (let i = 0; i < parsed.length; i++) {
      const q = parsed[i];
      if (!q.question || !Array.isArray(q.options) || typeof q.correctOption !== 'number' || !q.explanation) {
        return res.redirect('/admin?error=' + encodeURIComponent(
          `Question at index ${i} is missing one of: question, options (array), correctOption (number), explanation`
        ));
      }
    }

    const questionsToInsert = parsed.map(q => ({
      quiz: quiz._id,
      question: q.question,
      options: q.options,
      correctOption: q.correctOption,
      explanation: q.explanation
    }));

    const created = await questionDB.insertMany(questionsToInsert);

    quiz.questionCount = await questionDB.countDocuments({ quiz: quiz._id });
    await quiz.save();

    res.redirect('/admin?success=' + encodeURIComponent(`Added ${created.length} question(s) to "${quiz.title}"`));
  } catch (err) {
    res.redirect('/admin?error=' + encodeURIComponent(err.message));
  }
});

// GET /admin/quizzes/:id/edit - show the edit form for one quiz
router.get('/quizzes/:id/edit', async (req, res) => {
  try {
    const quiz = await quizDB.findById(req.params.id).populate('subject');
    if (!quiz) {
      return res.status(404).render('error', { message: 'Quiz not found' });
    }
    const subjects = await subjectDB.find().sort({ title: 1 });

    res.render('admin-edit-quiz', {
      title: 'Edit Quiz',
      quiz,
      subjects,
      error: req.query.error
    });
  } catch (err) {
    res.status(500).render('error', { message: 'Failed to load quiz: ' + err.message });
  }
});

// POST /admin/quizzes/:id - apply edits, slug is regenerated if the title changed
router.post('/quizzes/:id', async (req, res) => {
  try {
    const { subjectName, title, description, tagA, tagB } = req.body;

    if (!subjectName || !title || !description) {
      return res.redirect(`/admin/quizzes/${req.params.id}/edit?error=` + encodeURIComponent('Subject, title and description are required'));
    }

    const subject = await subjectDB.findOne({ name: subjectName });
    if (!subject) {
      return res.redirect(`/admin/quizzes/${req.params.id}/edit?error=` + encodeURIComponent(`Subject "${subjectName}" not found`));
    }

    const slug = slugify(title, { lower: true, strict: true, trim: true });

    // Make sure the new slug doesn't collide with a *different* quiz
    const existing = await quizDB.findOne({ slug, _id: { $ne: req.params.id } });
    if (existing) {
      return res.redirect(`/admin/quizzes/${req.params.id}/edit?error=` + encodeURIComponent(`A different quiz already uses slug "${slug}"`));
    }

    const quiz = await quizDB.findByIdAndUpdate(
      req.params.id,
      { subject: subject._id, title, slug, description, tagA, tagB },
      { new: true, runValidators: true }
    );

    if (!quiz) {
      return res.status(404).render('error', { message: 'Quiz not found' });
    }

    res.redirect('/admin?success=' + encodeURIComponent(`Quiz "${quiz.title}" updated (slug: ${quiz.slug})`));
  } catch (err) {
    res.redirect(`/admin/quizzes/${req.params.id}/edit?error=` + encodeURIComponent(err.message));
  }
});

// POST /admin/quizzes/:id/delete - delete a quiz and all of its questions
router.post('/quizzes/:id/delete', async (req, res) => {
  try {
    const quiz = await quizDB.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.redirect('/admin?error=' + encodeURIComponent('Quiz not found'));
    }

    const { deletedCount } = await questionDB.deleteMany({ quiz: quiz._id });

    res.redirect('/admin?success=' + encodeURIComponent(`Deleted quiz "${quiz.title}" and its ${deletedCount} question(s)`));
  } catch (err) {
    res.redirect('/admin?error=' + encodeURIComponent(err.message));
  }
});

module.exports = router;
