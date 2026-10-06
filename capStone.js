console.log("Planetary Explorer Capstone Project");
const anurella = "https://anurella.github.io/json/planets.json";

fetch(anurella)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    console.log(data);
  });
