"use strict";

// ARRAY DESTRUCTING
const arr = [2, 3, 4];

//const [x, y, z] = arr;
//console.log(x, y, z);

const something = {
  randomArray: ["italian", "pizzeria", "vegetarian"],
};

// switching variables
let [x, , y] = something.randomArray;
[y, x] = [y, x];
console.log(y, x);

// OBJECT DESTRUCTURING
const someObject = {
  aName: "something",
  age: 1993,
  doSomething: function () {
    console.log("I'm a function that does something!");
  },
};

let { aName, doSomething } = someObject;
console.log(aName, doSomething);

// change the variable names
let { aName: newName, doSomething: coolNewFunction } = someObject;
console.log(newName, coolNewFunction);

let a = 111;
let b = 999;

const obj = {
  a: 1,
  b: 9,
  c: 33,
};

({ a, b } = obj);
console.log(a, b);

// SPREAD OPERATOR
const anotherArr = [7, 8, 9];

const newArr = [1, 2, ...anotherArr];
console.log(newArr);

const starterMenu = ["Chips", "Water", "Pizza"];
const mainMenu = ["Fish", "Hamburger", "Steak"];

const menu = [...starterMenu, ...mainMenu];
console.log(menu);

// only use spread operator when BUILDING array or PASSING ARGUMENTS into function
console.log(undefined || 0);
