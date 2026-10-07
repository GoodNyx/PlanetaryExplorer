console.log("Planetary Explorer Capstone Project");
const anurella = "https://anurella.github.io/json/planet.json";

const planetName = document.querySelector("#planet-name");
const planetType = document.querySelector("#planet-type");
const planetDescription = document.querySelector("#planet-description");
const planetGravity = document.querySelector("#planet-gravity");
const planetMass = document.querySelector("#planet-mass");
const planetPeriod = document.querySelector("#planet-period");
const plantTemperature = document.querySelector("#planet-temperature");
const plantMoon = document.querySelector("#planet-moons");
const plantDistance = document.querySelector("#planet-distance");

function fetchPlanets() {
  fetch(anurella)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      displayPlanet(data);
    });
}

function displayPlanet(data) {
  planetName.textContent = data[0].name;
  planetType.textContent = data[0].type;
  planetDescription.textContent = data[0].description;
  planetGravity.textContent = data[0].gravity;
  planetMass.textContent = data[0].mass;
  planetPeriod.textContent = data[0].period;
  plantTemperature.textContent = data[0].temperature;
  plantMoon.textContent = data[0].moons;
  plantDistance.textContent = data[0].distanceFromSun;
}

fetchPlanets();
