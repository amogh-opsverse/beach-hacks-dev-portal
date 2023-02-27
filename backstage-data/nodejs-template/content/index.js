// Require the Express module
const express = require('express');

// Create a new Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
