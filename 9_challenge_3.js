"use strict";

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Task 1
// convert map to array
const events = [...gameEvents.values()];
// convert array to set then back to array
console.log(events);
const eventsSet = new Set(events);
//console.log(eventsSet.size);

const eventsNoDups = [...new Set(events)];

console.log(eventsNoDups);

// Task 2
gameEvents.delete(64);
console.log(gameEvents);

// Task 3
console.log(gameEvents.size);
const message = `An event happened, on average, every ${
  90 / gameEvents.size
} minutes`;
console.log(message);

// Task 4
for (const [key, val] of gameEvents) {
  if (key > 45) {
    console.log(`[SECOND HALF] ${key}: ${val}`);
  } else {
    console.log(`[FIRST HALF] ${key}: ${val}`);
  }
}
