const express = require('express');

const app = express();

const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  
app.set("view engine","pug"); 


// Set up a route for the homepage (GET request)
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Web App!</h1>');  // Sends a simple HTML response
});

// Make the server listen on port 3000
app.listen(port, () => {
  console.log('Server running on http://localhost:3000');
});