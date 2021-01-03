"use strict";

let arr = ["a", "b", "c", "d", "e"];

// starts at index 2 to end
console.log(arr.slice(2));

// start (inclusive), end (exclusive)
console.log(arr.slice(2, 4));

// goes in reverse
console.log(arr.slice(-1));

console.log(arr.slice(2, -1));

console.log(arr.indexOf("b"));

console.log(arr.includes("e"));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// forEach is higher-order function. it takes a callback-function as argument
movements
  .filter((val) => val > 0)
  .forEach((val, i) => console.log(`val: ${val}, at index: ${i}`));
