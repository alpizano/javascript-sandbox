"use strict";

//alert("Hi");

// Uncaught ReferenceError because of Strict Mode
//randomThing = 42;
let anotherThing = 69;

//console.log(typeof randomThing);
console.log(typeof anotherThing);

const stuff = "Hello";
console.log(stuff);
// won't compile because attempting to mutate constant
//stuff = "Why";
//console.log(stuff);

// objects have properties
const someObject = {
  1: 69,
  firstName: "Alberto",
  lastName: "Pizano",
  age: 33,
  friends: ["Michael", "jerry", "john"],
};

console.log(someObject);

for (var key in someObject) {
  console.log(typeof key);
}

// can retrieve object property dynamically @ runtime using bracket notation
//const answer = prompt("What do you want to know about Al?");
//console.log(someObject[answer]);

console.log("Undefined is: " + undefined == true);
console.log("Undefined is: " + undefined == false);

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

// Uncaught ReferenceError because of Strict Mode
//anotherVar;
// undefined
let myStringTest;

console.log(myStringTest);
