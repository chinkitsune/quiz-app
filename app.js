// app.js
// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const User = require('./models/User');
const subject = require('./models/subject');

const homeRoutes = require('./routes/homeRouter');
const subjectsRoutes = require('./routes/subjectsRouter');
const userRoutes = require('./routes/userRouter');

const app = express();

const port = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  


app.set('views', './views');
app.set('view engine', 'pug'); 


// Mount Routes
// All requests starting with '/' go to homeRoutes
app.use('/', homeRoutes); 
app.use('/subjects', subjectsRoutes);
app.use('/users', userRoutes);
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