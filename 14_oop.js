"use strict";

// constructor function
const Person = function (firstName, lastName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;

  // Don't add methods to objects created by constructor function
};

// "this" is undefined when called as function
//console.log(Person());

// 1. new object is created
// 2. function is called, "this" refers to object
// 3. object linked to prototype
// 4. function return object

const al = new Person("Al", "Pizano", 1987);
console.log(al);

// Prototypes
Person.prototype.calcAge = function () {
  console.log("Calling the calcAge function!");
};

al.calcAge();
