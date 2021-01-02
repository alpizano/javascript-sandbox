"use strict";

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
  friends: ["Tommy", "John", "Mark", "Flavius"],
  odds: {
    x: "Hey",
    y: "Hi",
    z: "There",
  },
  doSomething() {
    console.log("I'm a function in an object that does something!");
  },
};

person.doSomething();

const {
  odds: { x: P, y: Q, z: R },
} = person;
console.log(P, Q, R);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
// For-of with index
for (const [index, val] of game.scored.entries()) {
  console.log(`Goal ${index + 1} by ${val}`);
}

// Task 2
console.log(Object.values(game.odds));

let sum = 0;
for (const val of Object.values(game.odds)) {
  sum += val;
}
console.log(`Average odd: ${sum / Object.values(game.odds).length}`);

// using higher order functions
let anotherSum = 0;

Object.values(game.odds).forEach((element) => {
  console.log(`element: ${element}`);
  anotherSum += element;
});

console.log(`Average odd: ${anotherSum / Object.values(game.odds).length}`);

// Task3
//console.log(Object.entries(game.odds));

for (const [key, val] of Object.entries(game.odds)) {
  // nullish coalescence operator
  console.log(`Odds of victory ${game[key] ?? "draw"}: ${val} `);
}

const scorers = {
  [game.scored[0]]: 1,
  [game.scored[1]]: 1,
  [game.scored[3]]: 2,
};

//console.log(scorers);

const anotherScorers = {};
console.log(Object.keys("Hummels"));

game.scored.forEach((element) => {
  //if (!anotherScorers[element]) {
  if (!Object.keys(element)) {
    anotherScorers[element] = 1;
  } else {
    anotherScorers[element] = anotherScorers[element] + 1;
  }
});
console;
console.log(anotherScorers);
