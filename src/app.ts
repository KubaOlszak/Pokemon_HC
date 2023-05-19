const maxCapacity = 6;
let currentCapacity = 0;
const isInside: boolean = false;

const waitingRoom = {
  capacity: 0,
};

const healthCenter = {
  capacity: 0,
  //healingPokemon: function ;
};

interface Pokemon {

}

const bulbi = {
  name: "Bulbizarre",
  health: 10,
  isInside: false,
};

const enterBtnElt = document.querySelector(".pokemonOut1 .btn")!;
enterBtnElt.addEventListener("click", enterInCenter);

function enterInCenter() {
  const pokemonElt = document.querySelector(".pokemonOut1")!;
  const pokemonEltClone = pokemonElt.cloneNode(true);
  pokemonElt.classList.add("hidePokemon");

  const waitingPlace = document.querySelector(".pokemonIn1");
  waitingPlace?.appendChild(pokemonEltClone);
  const imageElt = document.querySelector("#bulbi")!;
  imageElt.removeAttribute("src");
  imageElt.setAttribute(
    "src",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
  );

  waitingRoom.capacity++;

  const counter = document.querySelector("#counter");

  if (counter) {
    counter.textContent = waitingRoom.capacity.toString();
  }

  const pokemonList = document.querySelector(".nomPokemonsPresents ul");
  if (pokemonList) {
    let pokemonElt = document.createElement("li");
    pokemonElt.textContent = bulbi.name;
    pokemonList.appendChild(pokemonElt);
  }

  console.log(waitingRoom.capacity);
}
