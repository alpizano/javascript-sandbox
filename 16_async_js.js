"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
console.log(`CountriesContainer outside of function: ${countriesContainer}`);

function getCountries(country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  // Use callback function on event listener
  request.addEventListener("load", function () {
    // returns string
    //console.log(this.responseText);

    // Parse as JSON
    // Destructure array
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
  </div>
</article>`;

    console.log(`CountriesContainer inside of function: ${countriesContainer}`);

    // doesn't work
    countriesContainer.insertAdjacentHTML("beforeend", html);
    // document.querySelector(".countries").insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
    // document.querySelector(".countries").style.opacity = 1;
  });
}

getCountries("usa");
getCountries("portugal");
