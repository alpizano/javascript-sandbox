"use strict";

// AJAX
// let request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

const something = document.querySelector(".countries");

console.log(document.querySelector("something"));

//const renderCountry = (data, className = "") => {
const renderCountry = (data, [className = ""]) => {
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
      </div>
    </article>`;

  document.querySelector(".countries").insertAdjacentHTML("beforeend", html);
  document.querySelector(".countries").style.opacity = 1;
};

const getData = (data, ...neighbour) => {
  console.log(neighbour);
  console.log(data);
  renderCountry(data, neighbour);
};

// FETCH API
const getCountryData = (country) => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      getData(data[0]);

      const neighbours = data[0].borders[0];
      if (!neighbours) return;

      // arrow function with { } need return
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbours}`);
    })
    .then((response) => response.json())
    .then((data) => getData(data, "neighbour"));
};

// returns Promise
//console.log();

// 1. call get neighbors in getCountry()
// 2. chain fetch call to current chain

getCountryData("usa");
