"use strict";

// OBJECTS
// objects have properties
const someObject = {
  1: 69,
  firstName: "Alberto",
  lastName: "Pizano",
  age: 33,
  friends: ["Michael", "Moe", "Dustin"],
};

console.log(someObject);
console.log(someObject["1"]);
console.log(someObject["lastName"]);

for (var key in someObject) {
  console.log(typeof key);
}

// Can retrieve object property dynamically @ runtime using bracket notation
// const answer = prompt("What do you want to know about Al?");
// console.log(someObject[answer]);

console.log("Undefined is: " + undefined == true);
console.log("Undefined is: " + undefined == false);

// Challenge
console.log(
  someObject.firstName +
    " has " +
    someObject.friends.length +
    " friends, and his best friend is called " +
    someObject.friends[0]
);

// cl -> tab to use console.log snippet
if (true) {
  console.log("sup homie");
}

// how does this work without a "key"?
const myRandomObject = {
  function() {
    console.log("My object's function");
  },
  // overwrites the first function EXPRESSION!
  function() {
    console.log("which one gets called?");
  },
};

myRandomObject.function();

const anotherObject = {
  doSomething: () => {
    console.log("Time to do something!");
  },
};

anotherObject.doSomething();

const processSomeData = (inputData) => {
  // loop through data and filter for even numbers (i.e. num % 2 == 0)
  inputData.filter((val) => val % 2 == 0);
};
const returnedData = processSomeData([5, 33, 42, 7, 100]);
// returns Undefined if void
console.log(`Returned data is: ${returnedData}`);
