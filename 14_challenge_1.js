"use strict";

// Constructor function to implement Car
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

console.log(Car);

Car.accelerate = function () {
  this.speed = Number(this.speed) + 10;
  console.log(`New speed: ${this.speed}`);
};

Car.brake = function () {
  this.speed = Number(this.speed) - 5;
  console.log(`New speed: ${this.speed}`);
};

let car1 = new Car("BMW", "120");
let car2 = new Car("Mercedes", "95");

console.log(car1);
console.log(car2);

car1.accelerate();
