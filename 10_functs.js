"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

function functDecl(flightNum, Name) {
  console.log("funct. declaration: " + this);
}

const functExpressNonArrow = function (flightNum, name) {
  console.log("funct. expression (non-arrow): " + this);
};

const functExpressArrow = (flightNum, name) => {
  console.log(`funct. expression (arrow):  ${this}`);
};

functDecl();
functExpressNonArrow();
functExpressArrow();

lufthansa.book(239, "Al Pizano");
lufthansa.book(635, "John Doe");
console.log(lufthansa);

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// store function in variable
const book = lufthansa.book;
