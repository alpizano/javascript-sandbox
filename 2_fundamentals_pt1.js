"use strict";

// DATA TYPES
// Uncaught ReferenceError because of Strict Mode
let anotherThing = 69;
let javascriptIsFun = true;

//randomThing = 42;
//console.log(typeof randomThing);
console.log(typeof anotherThing);
console.log(javascriptIsFun);

const stuff = "Hello";
console.log(stuff);

// i.e. Dynamic typing; boolean => string
javascriptIsFun = "YES!";
console.log(javascriptIsFun);

// empty variable is undefined
let year;
console.log(year);
console.log(typeof year);

// Uncaught ReferenceError because of Strict Mode
// undefined
let myStringTest;

console.log(myStringTest);

year = 1991;

// won't compile because attempting to mutate constant
//stuff = "Why";
//console.log(stuff);

// type of null is object; error, should be Null
console.log(typeof null);

// TYPE CONVERSION / COERCION
const inputYear = "1991";

console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

// type coercion, + operator triggers type coercion (converts to string), but not -, /, or *, > (converts to numbers)
console.log("I am " + 23 + " years old");

// TRUTHY / FALSY
// falsy = 0, '', undefined, null, NaN
