"use strict";

function calcAvg(scores) {
  let sum = 0;
  scores.forEach((element) => {
    sum += element;
  });
  // scores
  //   .filter((x) => x > 100)
  //   .forEach((element) => {
  //     sum += element;
  //   });
  return sum / scores.length;
}

function getWinner(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("Dolpins win!!!");
  } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log("Koalas win!!!");
  } else if (
    koalasAvg === dolphinsAvg &&
    koalasAvg >= 100 &&
    dolphinsAvg >= 100
  ) {
    console.log("It's a draw and both win trophy!!!");
  } else {
    console.log("No team wins!!!");
  }
}

// Test data 1
console.log(`Dolphins avg: ${calcAvg([96, 108, 89])}`);
console.log(`Koalas avg: ${calcAvg([88, 91, 110])}`);
getWinner(calcAvg([96, 108, 89]), calcAvg([88, 91, 110]));

console.log("----------------------------------------------------");

// Test data 2
console.log(`Dolphins avg: ${calcAvg([97, 112, 101])}`);
console.log(`Koalas avg: ${calcAvg([109, 95, 123])}`);
getWinner(calcAvg([97, 112, 101]), calcAvg([109, 95, 123]));
console.log("----------------------------------------------------");

// Test data 3
console.log(`Dolphins avg: ${calcAvg([97, 112, 101])}`);
console.log(`Koalas avg: ${calcAvg([109, 95, 106])}`);
getWinner(calcAvg([97, 112, 101]), calcAvg([109, 95, 106]));
