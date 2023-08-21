require('dotenv').config();
const express = require('express');
const app = express();
const fruits = require('./models/fruits')
const mongoose = require('mongoose');
const Fruit = require('./models/Fruit');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// INDUCES

// Index
app.get('/fruits', (req, res) => {
  Fruit.find({})
    .then((allFruits) => {
      console.log(allFruits);
      res.render('Index', { fruits: allFruits });
    })
    .catch(error => {
      console.error(error)
    })
});

// New
app.get('/fruits/new', (req, res) => {
  res.render('New')
})

// Delete

// Update

// Create
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruit.create(req.body)
    .then((createdFruit) => {
      res.send(createdFruit)
    })
    .catch(error => {
      console.error(error)
    })
});

// Edit

// Show
app.get('/fruits/:index', (req, res) => {
  res.send(fruits[req.params.index])
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});