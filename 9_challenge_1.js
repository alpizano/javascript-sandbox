"use strict";

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
// array destructuring
const [players1, players2] = game.players;
console.log(players1);
// Task 2
// rest operator
const [gk, ...fieldPlayers] = players1;

// Task 3
// spread operator
const allPlayers = [...players1, ...players2];

// Task 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// Task 5
// object destructuring ; assignment with declaration
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Task 6
const printGoals = (...names) => {
  let goalsScored = 0;
  names.forEach((val) => {
    console.log(val);
    goalsScored++;
  });
  console.log(`There were ${names.length} total goals scored!`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmic");
printGoals(...game.scored);

// Task 7
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
