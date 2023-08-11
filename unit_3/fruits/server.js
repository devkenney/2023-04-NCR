const express = require('express');
const app = express();
const fruits = require('./models/fruits')


app.get('/fruits', (req, res) => {
  res.send(fruits);
});

app.get('/fruits/:index', (req, res) => {
  res.send(fruits[req.params.index])
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});