"use strict";

// function expression
const calcAgeExpression = function (birthYear) {
  // "this" is undefined
  console.log(this);
  return 2020 - birthYear;
};

calcAgeExpression(1987);

// arrow function
const calcAgeArrow = (birthYear) => {
  // "this" is the parent/Lexical Window object
  console.log(this);
  return 2020 - birthYear;
};

calcAgeArrow(1987);

// calling function within object/as method
const al = {
  year: 1987,
  calcAge: function () {
    console.log(this);
    // "year" throws Uncaught ReferenceError; needs this.year
    return 2020 - this.year;
  },
};

al.calcAge();
