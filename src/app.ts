
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
  imageElt.setAttribute("src", "img/1_inside.png");

  waitingRoom.capacity++;

  const counter = document.querySelector("#counter");
  // counter.
  console.log(waitingRoom.capacity);
  // const waitingroomElt = document.querySelector('#waiting-room')!;
  // waitingroomElt.appendChild(pokemonElt);
}

function incrementCapacity() {

}
