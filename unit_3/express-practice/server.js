// Require Modules
const express = require('express');
const fs = require('fs');

// Create the Express App
const app = express();
app.engine('madeline', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)

    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#', '<div>' + options.content + '</div>')
      return callback(null, rendered)
  })
})

// Configure the App (app.set)
app.set('views', './views')
app.set('view engine', 'madeline')

// Mount the Middleware (app.use)



// Mount routes
app.get('/', (req, res) => {
  res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the boss ricky boss'})
});

app.get('/home', (req, res) => {
  res.send({
    info: "Homepage"
  })
})

// Tell the app to listen on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000')
});