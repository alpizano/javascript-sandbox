"use strict";

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.92;

const calcBmi = (mass, height) => {
  return mass / (height * height);
};

console.log(`Mark BMI: ${calcBmi(markWeight, markHeight)}`);
console.log(`Mark BMI: ${calcBmi(johnWeight, johnHeight)}`);

let markHigherBMI =
  calcBmi(markWeight, markHeight) > calcBmi(johnWeight, johnHeight);
console.log(`Mark has a higher BMI: ${markHigherBMI}`);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

console.log(`Mark BMI: ${calcBmi(markWeight, markHeight)}`);
console.log(`Mark BMI: ${calcBmi(johnWeight, johnHeight)}`);

markHigherBMI =
  calcBmi(markWeight, markHeight) > calcBmi(johnWeight, johnHeight);
console.log(`Mark has a higher BMI: ${markHigherBMI}`);
