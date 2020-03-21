const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`<h2>Welcome to the homepage</h2>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
