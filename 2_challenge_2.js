"use strict";

// data set 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.92;

const calcBmi = (mass, height) => {
  return mass / (height * height);
};

let markHigherBMI =
  calcBmi(markWeight, markHeight) > calcBmi(johnWeight, johnHeight);

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${calcBmi(
      markWeight,
      markHeight
    )}) is higher than John's (${calcBmi(johnWeight, johnHeight)})!`
  );
} else {
  console.log(
    `Mark's BMI (${calcBmi(
      markWeight,
      markHeight
    )}) is higher than John's (${calcBmi(johnWeight, johnHeight)})!`
  );
}

// data set 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markHigherBMI =
  calcBmi(markWeight, markHeight) > calcBmi(johnWeight, johnHeight);

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${calcBmi(
      markWeight,
      markHeight
    )}) is higher than John's (${calcBmi(johnWeight, johnHeight)})!`
  );
} else {
  console.log(
    `Mark's BMI (${calcBmi(
      markWeight,
      markHeight
    )}) is higher than John's (${calcBmi(johnWeight, johnHeight)})!`
  );
}
