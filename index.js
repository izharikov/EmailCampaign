// Add Express
const express = require("express");
const path = require('path');

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use(express.static(path.join(__dirname, 'public')));

app.get("/templates/sample", (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/sample/index.html'));
})

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;