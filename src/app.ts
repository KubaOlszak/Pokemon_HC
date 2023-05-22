
// Déclaration des constantes et variables
const maxCapacity = 6; // Capacité maximale du centre de santé
let currentCapacity = 0; // Capacité actuelle du centre de santé
let isInside = false; // Indicateur pour suivre si le Pokémon est à l'intérieur ou à l'extérieur

// Objet représentant la salle d'attente
const waitingRoom = {
  capacity: currentCapacity, // Capacité actuelle de la salle d'attente
};

// Objet représentant le centre de santé
const healthCenter = {
  capacity: 0, // Capacité actuelle du centre de santé
  // healingPokemon: function ; // Fonction de soin des Pokémon (à ajouter ultérieurement)
};

// Objet représentant le Pokémon Bulbizarre
const bulbi = {
  name: "Bulbizarre", // Nom du Pokémon
  health: 10, // Santé du Pokémon
  isInside: false, // Indicateur pour suivre si le Pokémon est à l'intérieur ou à l'extérieur
};

const pokemonList = [                                  // Liste des pokémons
  {
    name: "Reptincel",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    energie: 30

  },
  {
    name: "Florizarre",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    energie: 5

  },
  {
    name: "Herbizarre",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    energie: 15
  },
  {
    name: "Bulbizarre",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    energie: 7
  },
  {
    name: "Salamèche",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    energie: 8
  },
  {
    name: "Drakaufeu",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    energie: 25
  },
  {
    name: "Carapuce",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    energie: 19
  }
];

let pokemonNames = function getNames() {
  let pokeNames = [];
  for (let i = 0; i < pokemonList.length; ++i) {
    pokeNames[i] = pokemonList[i].name;
  }
  return pokeNames;
}

const cards = document.querySelector(".pokemonOutside")!;


function createCard(title: string, imageUrl: string, energie: number): void {    // Générer les cartes pokémons
  const card = document.createElement('div');
  // card.setAttribute("id", title);
  card.classList.add('card');
  cards.appendChild(card);

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  card.appendChild(cardHeader);

  const cardImg = document.createElement('div');
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add('card-img');
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = title;
  cardBody.appendChild(cardTitle);

  const divAuCentre = document.createElement('div');
  divAuCentre.classList.add('auCentre');
  cardBody.appendChild(divAuCentre);

  const healBarre = document.createElement('div');
  healBarre.setAttribute("id", title);
  healBarre.classList.add('barre');
  divAuCentre.appendChild(healBarre);

  const cardEnergie: HTMLElement = document.querySelector('#' + title)!;
  // cardEnergie.classList.add ('energie');
  cardEnergie.textContent = energie.toString();
  cardEnergie.style.width = energie + "%";

  const healButton = document.createElement('button');
  healButton.classList.add('btn');
  healButton.classList.add('heal-btn');
  healButton.setAttribute("onclick", `soigner('${title}', ${energie})`);
  healButton.textContent = 'Soigner';
  cardBody.appendChild(healButton);

  const cardButton = document.createElement('button');
  cardButton.classList.add('card-button');
  cardButton.setAttribute("onclick", `togglePokemonLocation('${title}')`);
  cardButton.textContent = 'entrer';
  cardBody.appendChild(cardButton);

};

function soigner(title: number, energie: number) {
  const titleElt: HTMLElement = document.querySelector('#' + title)!;
  let largeur = energie;
  let id = setInterval(progression, 20);

  function progression() {
    if (largeur < 100) {
      largeur++;
      titleElt.style.width = largeur + "%";
      titleElt.innerText = largeur + "%";
    }
    else {
      clearInterval(id);
      titleElt.innerText = "Soigné";
    }
  }
}


const generateBtnElt = document.getElementById("add-poke-btn")!;
generateBtnElt.addEventListener("click", generatePokemons);

function generatePokemons() {                          // Bouton "Ajouter Pokémons"
  for (let i = 0; i < pokemonList.length; i++) {
    let item = pokemonList[i];
    createCard(pokemonNames()[i], item.picture, item.energie);
  }
}


function isPlacesNumberNegative() {                    // vérifie si nombre de places pas < 0
  if (waitingRoom.capacity < 0) {
    alert("Nombre de places négatif !");
    return true;
  }
}

function isPlacesNumberOverCapacity() {                // vérifie si nombre de places pas > maxCapacity
  if (waitingRoom.capacity >= maxCapacity) {
    alert("Plus de places disponibles !");
    return true;
  }
}

window.onload = (event) => {                           // affiche le nombre de places dispo au chargement de la page
  // isPlacesNumberNegative();
  const counter: (HTMLElement | null) = document.querySelector("#counter")!;

  counter.textContent = waitingRoom.capacity.toString();
}

const enterBtnElt = document.querySelector(".pokemonOut1 .btn")!;
// Vérifier si un événement de clic est déjà attaché
/*if (!enterBtnElt.hasAttribute("data-event-attached")) {
  enterBtnElt.setAttribute("data-event-attached", "true");        // Ajouter un attribut pour indiquer que l'événement est attaché
  enterBtnElt.addEventListener("click", togglePokemonLocation(pokename: string));   // Ajout d'un écouteur d'événement sur le clic du bouton
}
 */

const counterElt = document.getElementById("counter")!;

const pokemonListItems = document.querySelectorAll(".nomPokemonsPresents li");

function togglePokemonLocation(pokeName: string) {

  if (isPlacesNumberNegative() || isPlacesNumberOverCapacity()) return;

  const pokemonElt = document.querySelector(`${pokeName}`)!;
  // const pokemonContainer = pokemonElt.parentElement; // Sélection du conteneur du Pokémon

  if (isInside) {
    // Le Pokémon est à l'intérieur
    const waitingPlace = document.querySelector("pokemonOutside")!;
    waitingPlace.appendChild(pokemonElt);
    isInside = false;
    enterBtnElt.setAttribute("value", "Enter");
    currentCapacity--;

    const pokemonListItem = document.getElementById("pokemonItem1")!;
    pokemonListItem.textContent = "";
  } else {
    // Le Pokémon est à l'extérieur
    const waitingPlace = document.querySelector(".pokemonInside")!;
    waitingPlace.appendChild(pokemonElt);
    isInside = true;
    enterBtnElt.setAttribute("value", "Exit");
    currentCapacity++;

    const pokemonListItem = document.getElementById("pokemonItem1")!;
    pokemonListItem.textContent = bulbi.name;
  }

  counterElt.textContent = currentCapacity.toString();
}
