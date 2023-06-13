// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 200; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i <= 200; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i);
  }
}

combineCats(
  combineCats(
    combineCats(cat1, cat2),
    combineCats(cat1, cat2)
  ),
  combineCats(
    combineCats(cat1, cat2),
    combineCats(cat1, cat2)
  )
)