"use strict";

const calcAverage = (scores1, scores2) => {
  let sum1 = 0;
  let sum2 = 0;

  scores1.forEach((element, index) => {
    sum1 += element;
    sum2 += scores2[index];
  });

  console.log(`Dolphins avg: ${sum1 / scores1.length}`);
  console.log(`Koalas avg: ${sum2 / scores2.length}`);

  // checkWinner is function expression but can be called first because inside calcAverage scope
  checkWinner(sum1 / scores1.length, sum2 / scores2.length);
};

const checkWinner = (dolphinsAvg, koalasAvg) => {
  if (dolphinsAvg > koalasAvg && dolphinsAvg >= koalasAvg * 2) {
    console.log("Dolpins win!!!");
  } else if (koalasAvg > dolphinsAvg && koalasAvg >= dolphinsAvg * 2) {
    console.log("Koalas win!!!");
  } else {
    console.log("There is no winner!");
  }
};

// test data 1
calcAverage([44, 23, 71], [65, 54, 49]);
calcAverage([85, 54, 41], [23, 34, 27]);
