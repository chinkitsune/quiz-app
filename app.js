// app.js
// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const user = require('./models/user');
const subject = require('./models/subject');


const homeRoutes = require('./routes/homeRouter');
const subjectsRoutes = require('./routes/subjectsRouter');
const quizRouter = require('./routes/quizRouter');
const userRoutes = require('./routes/userRouter');

const app = express();

const port = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  


app.set('views', './views');
app.set('view engine', 'pug'); 


// ARCHITECTURAL ADDITION: Global Navigation Middleware
app.use(async (req, res, next) => {
  try {
    // Fetch all subjects from MongoDB, sorted by title
    const allSubjects = await subject.find().sort({ title: 1 });

    // Group subjects by their level: { '2': [...], '3': [...] }
    const categorizedLevels = {};
    allSubjects.forEach(sub => {
      if (!categorizedLevels[sub.level]) {
        categorizedLevels[sub.level] = [];
      }
      categorizedLevels[sub.level].push(sub);
    });

    // res.locals makes 'navLevels' automatically visible to all Pug templates
    res.locals.navLevels = categorizedLevels;
    next();
  } catch (err) {
    console.error('Failed to load navbar categories:', err.message);
    res.locals.navLevels = {}; // Fallback so the app doesn't crash
    next();
  }
});

// Mount Routes
// All requests starting with '/' go to homeRoutes
app.use('/', homeRoutes); 
app.use('/subjects', subjectsRoutes);
app.use('/users', userRoutes);
app.use('/quizzes', quizRouter);

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page not found' });
});


// using mongoose to connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB Atlas!');
  app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
  });
})
.catch((err) => {
  console.error('Connection failed:', err.message);
});