"use strict";

// put scores to 0
// make dice dissapear

const score = document.querySelectorAll(".score");
const dice = document.querySelector(".dice");

const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");

console.log("loading....");

score.forEach((element) => (element.textContent = 0));

// use hidden class instead of manually setting CSS
//dice.style.display = "none";
dice.classList.add("hidden");
