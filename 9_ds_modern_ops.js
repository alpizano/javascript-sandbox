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

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const map = new Map();

map.set("name", "Classico Italiano");

console.log(map);

const question = new Map([
  ["question", "What is the best programming lang?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt("Your answer"));

const message = question.get(answer === question.get("correct"));
console.log(message);
