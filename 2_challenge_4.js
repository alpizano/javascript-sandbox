"use strict";

let bills = [275, 40, 430];

function calcTip(bills) {
  bills.forEach((element) => {
    let tip = 300 >= element && element >= 50 ? element * 0.15 : element * 0.2;
    console.log(
      `For $${element} bill, tip is $${tip} for a total value of $${
        element + tip
      }`
    );
  });
}

calcTip(bills);
