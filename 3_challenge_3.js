"use strict";

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    // arrow function doesn't have "this"; inherits from Window global object
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
};

// Copy function from Mark to John
john.calcBMI = mark.calcBMI;

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john["bmi"]) {
  console.log(
    `${mark.fullname}'s (${mark["bmi"]}) is higher than ${john.fullname}'s (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullname}'s BMI (${john["bmi"]}) is higher than ${mark.fullname}'s (${mark.bmi})`
  );
}
