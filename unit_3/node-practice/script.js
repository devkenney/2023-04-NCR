const daysOfWeek = require('./days-of-week');

console.log(daysOfWeek.getWeekday(5));

// const request = require('request');
// request(
//   'http://jsonplaceholder.typicode.com/users',
//   (err, res, body) => {
//     console.log(body)
//   }
// )

// const random = require('./random');
// for (let i = 0; i < 10; i++) {
//   console.log(random(100, 200))
// }

const circle = require('./circle');
console.log(circle.area(10))
console.log(circle.circumference(10))