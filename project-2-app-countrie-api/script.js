let infos = document.getElementById("infos");

var capitalDiv = document.createElement("div");
var flagDiv = document.createElement("div");
var countryDiv = document.createElement("div");
var continentDiv = document.createElement("div");

function search() {
  let textContry = document.querySelector(".text").value;
  countryDiv.innerHTML = `<span>pays</span><br> <p>${textContry}</p>`;

  let url = "https://restcountries.com/v3.1/name/" + textContry;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const country = data[0];
      console.log(country);
      const capital = country.capital;
      const continent = country.continents;
      const flag = country.flags.svg;

      capitalDiv.innerHTML = `<span>capitale</span><br> <p>${capital}</p>`;
      continentDiv.innerHTML = `<span>continent</span><br> <p>${continent}</p>`;
      flagDiv.innerHTML = `<span>drapeau</span><br> <img src="${flag}" alt="Flag of ${textContry}" />`;

      infos.appendChild(countryDiv);
      infos.appendChild(capitalDiv);
      infos.appendChild(continentDiv);
      infos.appendChild(flagDiv);
    })
  );
}
