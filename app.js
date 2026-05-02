// app.js
const express = require('express');
const path = require('path');

const homeRoutes = require('./routes/homeRouter');
const subjectRoutes = require('./routes/subjectRouter');
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
app.use('/subjects', subjectRoutes);

app.use((req, res) => {
  res.status(404).render('error', { message: 'Page not found' });
});

// Make the server listen on port 3000
app.listen(port, () => {
  console.log('Server running on http://localhost:3000');
});