"use strict";

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcAverage = (arr) => {
  let sum = 0;

  arr.forEach((element) => {
    sum += element;
  });

  return sum / arr.length;
};

const calcTip = (bills) => {
  bills.forEach((element) => {
    let tip = 300 >= element && element >= 50 ? element * 0.15 : element * 0.2;
    // console.log(
    //   `For $${element} bill, tip is $${tip} for a total value of $${
    //     element + tip
    //   }`
    // );
    totals.push(element + tip);
    tips.push(tip);
  });
};

calcTip(bills);
console.log(`Tips are: ${tips}`);
console.log(`Totals are: ${totals}`);

console.log(calcAverage(totals));
