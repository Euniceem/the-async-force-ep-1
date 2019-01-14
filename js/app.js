"use strict"

const oReqDarthVaderName = new XMLHttpRequest();

function darthVaderListener() {
  let darthVaderObj = JSON.parse(this.responseText);
  document.querySelector('#person4Name').innerHTML = darthVaderObj.name;

  const oReqDarthVaderSpecies = new XMLHttpRequest();

  function darthVaderHome() {
    let darthVaderHome = JSON.parse(this.responseText);
    document.querySelector('#person4HomeWorld').innerHTML = darthVaderHome.name;

    const oReqHanSoloName = new XMLHttpRequest;

    function hanSoloListener() {
      let sanHoloObj = JSON.parse(this.responseText);
      document.querySelector('#person14Name').innerHTML = sanHoloObj.name;

      const oReqHanSoloSpecies = new XMLHttpRequest;

      function hanSoloHome() {
        let hanSoloObj = JSON.parse(this.responseText);
        document.querySelector('#person14Species').innerHTML = hanSoloObj.name;
      }

      oReqHanSoloSpecies.addEventListener("load", hanSoloHome);
      oReqHanSoloSpecies.open("GET", "https://swapi.co/api/species/1/");
      oReqHanSoloSpecies.send();

    }
    oReqHanSoloName.addEventListener("load", hanSoloListener);
    oReqHanSoloName.open("GET", "https://swapi.co/api/people/14/")
    oReqHanSoloName.send();
  }
  oReqDarthVaderSpecies.addEventListener("load", darthVaderHome);
  oReqDarthVaderSpecies.open("GET", 'https://swapi.co/api/planets/1/')
  oReqDarthVaderSpecies.send();
}

oReqDarthVaderName.addEventListener("load", darthVaderListener);
oReqDarthVaderName.open("GET", "https://swapi.co/api/people/4/")
oReqDarthVaderName.send();


const allFilms = new XMLHttpRequest();
allFilms.open('GET', 'https://swapi.co/api/films/');
allFilms.send();
allFilms.addEventListener('load', function () {
  let filmObj = JSON.parse(this.responseText);
  let filmLiss = document.getElementById('filmList');

  for (let i = 0; i < filmObj.results.length; i++) {
    let listElements = document.createElement('li');
    listElements.innerHTML = filmObj.results[i].title;
    filmLiss.appendChild(listElements);

    for (let j = 0; j < filmObj.results[i].planets.length; j++) {
      const getPlanets = new XMLHttpRequest();
      getPlanets.open('GET', filmObj.results[i].planets[j]);
      getPlanets.send();

      getPlanets.addEventListener('load', function () {
        const planetObj = JSON.parse(this.responseText);
        let planetElement = document.createElement('ul');
        planetElement.innerHTML = planetObj.name;
        listElements.appendChild(planetElement);
      })
    }
  }
});



