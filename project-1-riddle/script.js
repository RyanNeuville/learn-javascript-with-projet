// declaration des variables (venant de l'index)
let button = document.getElementById("button");
let form = document.getElementById("form");
let message = document.getElementById("message");
let link = document.getElementById("link");

// nombre aleatoire a deviner (secretNumber)
const secretNumber = Math.floor(Math.random() * 100);
let attemps = 3;

button.onclick = function () {
  const input = document.getElementById("input");

  if (input.value != "") {
    // verifi la corespondance entre input et secretNumber
    if (input.value < secretNumber) {
      message.innerText = "Le nombre est plus grand que " + input.value + "";
      message.style.color = "#999";
    } else if (input.value > secretNumber) {
      message.innerText = "Le nombre est plus petit que " + input.value + "";
      message.style.color = "#999";
    }

    // nombre de chance epuisee
    if (attemps == 0) {
      message.innerText =
        "Vous avez perdu , il fallait trouve " + secretNumber + "";
      message.style.color = "red";
      form.style.display = "none";
      link.style.display = "flex";
    }

    attemps--;

    // il a trouver le nuombre
    if (input.value == secretNumber) {
      message.innerText =
        "Bravo vous avez trouve le nombre qui est  " + secretNumber + "";
      message.style.color = "green";
      form.style.display = "none";
      link.style.display = "flex";
    }

    // au cas ou le input est vide
  } else {
    message.innerText = "Veuillez entrer un nombre !";
    message.style.color = "red";
  }
};
