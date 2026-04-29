const express = require('express');

const app = express();

// Set up a route for the homepage (GET request)
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Web App!</h1>');  // Sends a simple HTML response
});

// Make the server listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});