"use strict";

// Uncaught ReferenceError because of Strict Mode
//randomThing = 42;
let anotherThing = 69;
let javascriptIsFun = true;

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
