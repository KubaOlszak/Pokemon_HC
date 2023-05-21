
const maxCapacity = 6;
let currentCapacity = 0;
const isInside: (boolean) = false;

const waitingRoom = {
  capacity: 0,
}

const healthCenter = {
  capacity: 0,
  //healingPokemon: function ;
}

const bulbi = {
  name: "Bulbizarre",
  health: 10,
  isInside: false,
}

function isPlacesNumberNegative() {     // vérifie si nombre de places pas < 0
  if (waitingRoom.capacity < 0) {
    alert("Nombre de places négatif !");
    return true;
  }
}

function isPlacesNumberOverCapacity() {     // vérifie si nombre de places pas < 0
  if (waitingRoom.capacity >= 6) {
    alert("Plus de places disponibles !");
    return true;
  }
}

window.onload = (event) => {            // affiche le nombre de places dispo au chargement de la page
  // isPlacesNumberNegative();
  const counter: (HTMLElement | null) = document.querySelector("#counter")!;
  counter.textContent = waitingRoom.capacity.toString();
}

const enterBtnElt = document.querySelector(".pokemonOut1 .btn")!;
enterBtnElt.addEventListener("click", enterInCenter);

function enterInCenter() {
  if (isPlacesNumberNegative() || isPlacesNumberOverCapacity()) return;

  const pokemonOutElt = document.querySelector(".pokemonOut1")!;
  const pokemonEltClone = pokemonOutElt.cloneNode(true);
  pokemonOutElt.classList.add("hidePokemon");

  const waitingPlace = document.querySelector(".pokemonIn1")!;
  waitingPlace.appendChild(pokemonEltClone);
  const imageElt = document.querySelector("#bulbi")!;
  imageElt.removeAttribute("src");
  imageElt.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png");

  waitingRoom.capacity++;

  const counter: (HTMLElement | null) = document.querySelector("#counter")!;
  counter.textContent = waitingRoom.capacity.toString();

  const pokemonList = document.querySelector(".nomPokemonsPresents ul")!;
  const pokemonInElt = document.createElement("li");
  pokemonInElt.textContent = bulbi.name;
  pokemonList.appendChild(pokemonInElt);
}
