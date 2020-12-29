"use strict";

let scores = [96, 108, 89];

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

// Test data 1
let dolphinsAvg = calcAvg([96, 108, 89]);
console.log(`Dolphins avg: ${dolphinsAvg}`);
let koalasAvg = calcAvg([88, 91, 110]);
console.log(`Koalas avg: ${koalasAvg}`);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("Dolpins win!!!");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("Koalas win!!!");
} else if (
  koalasAvg === dolphinsAvg &&
  koalasAvg >= 100 &&
  dolphinsAvg >= 100
) {
  console.log("It's a draw!!!");
} else {
  console.log("No team wins!!!");
}

// Test data 2

dolphinsAvg = calcAvg([97, 112, 101]);
console.log(`Dolphins avg: ${dolphinsAvg}`);
koalasAvg = calcAvg([109, 95, 123]);
console.log(`Koalas avg: ${koalasAvg}`);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("Dolpins win!!!");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("Koalas win!!!");
} else if (
  koalasAvg === dolphinsAvg &&
  koalasAvg >= 100 &&
  dolphinsAvg >= 100
) {
  console.log("It's a draw!!!");
} else {
  console.log("No team wins!!!");
}
// Test data 3

dolphinsAvg = calcAvg([97, 112, 101]);
console.log(`Dolphins avg: ${dolphinsAvg}`);
koalasAvg = calcAvg([109, 95, 106]);
console.log(`Koalas avg: ${koalasAvg}`);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("Dolpins win!!!");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("Koalas win!!!");
} else if (
  koalasAvg === dolphinsAvg &&
  koalasAvg >= 100 &&
  dolphinsAvg >= 100
) {
  console.log("It's a draw!!!");
} else {
  console.log("No team wins!!!");
}
