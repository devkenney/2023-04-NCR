require('dotenv').config();
const express = require('express');
const app = express();
const fruits = require('./models/fruits')
const mongoose = require('mongoose');
const Fruit = require('./models/Fruit');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
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
app.delete('/fruits/:id', (req, res) => {
  Fruit.deleteOne({ _id: req.params.id })
    .then(info => {
      console.log(info)
      res.redirect('/fruits')
    })
    .catch(error => console.log(error))
})

// Update
app.put('/fruits/:id', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruit.updateOne({ _id: req.params.id }, req.body)
    .then(info => {
      console.log(info);
      res.redirect(`/fruits/${req.params.id}`)
    })
})

// Create
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruit.create(req.body)
    .then((createdFruit) => {
      res.redirect('/fruits')
    })
    .catch(error => {
      console.error(error)
    })
});

app.get('/fruits/seed', (req, res) => {
  Fruit.insertMany([
    {
      name: 'grapefruit',
      color: 'pink',
      readyToEat: true
    },
    {
      name: 'grape',
      color: 'purple',
      readyToEat: false
    },
    {
      name: 'avocado',
      color: 'green',
      readyToEat: true
    }
  ])
})

// Edit
app.get('/fruits/:id/edit', (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then(foundFruit => {
      res.render(
        'Edit',
        {
          fruit: foundFruit
        }
      )
    })
    .catch(error => console.log(error))
})

// Show
app.get('/fruits/:id', (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      res.render('Show', {
        fruit: foundFruit
      })
    })
    .catch(error => {
      console.error(error)
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});