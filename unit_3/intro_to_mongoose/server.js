require('dotenv').config()
const mongoose = require('mongoose');
const Tweet = require('./Tweet')

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

db.on('error', err => console.log(err.message + " is mongod not running?"));
db.on('open', () => console.log('mongo connected!'));
db.on('close', () => console.log('mongo disconnected'));

// const myFirstTweet = {
//   title: "Deep Thoughts",
//   body: "Friends, I am the realest coder alive",
//   author: "Arthur"
// };

// Tweet.create(myFirstTweet)
//   .then(tweet => console.log(tweet))
//   .catch(error => console.log(error))
//   .finally(() => db.close())

// const manyTweets = [
//   {
//     title: "Deep Thoughts",
//     body: "Friends, I am the realest coder alive",
//     author: "Arthur",
//   },
//   {
//     title: "Sage Advice",
//     body: "Friends, I am awesome and you are too",
//     author: "Arthur",
//     likes: 20,
//   },
//   {
//     title: "Is TI the Jadakiss of the South",
//     body: "TI is severely underrated and we need to fix that expeditiously",
//     author: "Arthur",
//     likes: 40,
//   },
//   {
//     title: "Crypto",
//     body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
//     author: "Arthur",
//     likes: 162,
//   },
//   {
//     title: "Confusion",
//     body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
//     author: "Arthur",
//     likes: -100,
//   },
//   {
//     title: "Vespa",
//     body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
//     author: "Arthur",
//     likes: 2,
//   },
//   {
//     title: "Licensed",
//     body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
//     author: "Arthur",
//     likes: 3,
//   },
//   {
//     title: "Water",
//     body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
//     author: "Arthur",
//   },
// ];

// Tweet.insertMany(manyTweets)
//   .then(tweets => console.log(tweets))
//   .catch(error => console.log(error))
//   .finally(() => db.close())

// Tweet.find({})
//   .then(tweets => console.log(tweets))
//   .catch(error => console.log(error))
//   .finally(() => db.close());

// Tweet.findOne({ title: "Water" })
//   .then(tweet => console.log(tweet))
//   .catch(error => console.log(error))
//   .finally(() => db.close())

// Tweet.find({ likes: { $gte: 20 } })
//   .then(tweets => console.log(tweets))
//   .catch(error => console.log(error))
//   .finally(() => db.close())

// Tweet.deleteMany({ title: "Deep Thoughts" })
//   .then(info => console.log(info))
//   .catch(error => console.log(error))
//   .finally(() => db.close())

// Tweet.deleteOne({ likes: -100 })
//   .then(info => console.log(info))
//   .catch(error => console.log(error))
//   .finally(() => db.close())

// Tweet.updateOne(
//   { title: 'Vespa' },
//   { sponsored: true },
//   { new: true }
// )
//   .then(info => console.log(info))
//   .catch(error => console.log(error))
//   .finally(() => db.close())

// Tweet.countDocuments({ likes: { $gte: 20 } })
//   .then(count => console.log(count))
//   .catch(error => console.log(error))
//   .finally(() => db.close())

// Tweet.find({ likes: { $gte: 20 } }, "title -_id")
//   .limit(2)
//   .sort("title")
//   .exec()
//   .then(tweets => console.log(tweets))
//   .catch(error => console.log(error))
//   .finally(() => db.close())

// -------------------------

// CREATE ROUTE:
// Model.create(req.body OR whatever data you want to create with)
// Model.insertMany(req.body OR an array of objects to create)

// -------------------------

// READ ROUTE:
// Model.find({key: value} of MANY things to find. use just {} if you want all)
// Model.findOne({key:value} of ONE thing to find)

// -------------------------

// UPDATE ROUTE
// Model.updateOne(<{key: value} of ONE thing to find>, <req.body OR whatever info you want to update it with>, {new: true})
// Model.updateMany(<{key: value} of MANY things to find>, <req.body OR whatever info you want to update them with>, {new: true})

// -------------------------

// DELETE
// Model.deleteOne({key: value} of ONE thing to delete)
// Model.deleteMany({key: value} of MANY things to delete)

// -------------------------

// after ANY mongoose operation, to use the result, you must dot chain on .then, and .catch.
// EXAMPLE:
// Model.findOne({_id: req.params.id})
//   .then(foundModel => res.send(foundModel))
//   .catch(error => console.error(error))

// NOTE: NORMALLY YOU DO NOT NEED db.close(). THAT IS JUST FOR THE PURPOSES OF THIS EXERCISE