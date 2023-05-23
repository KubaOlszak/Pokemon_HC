
const maxCapacity = 6;
let currentCapacity = 0;
let isInside = false;


const waitingRoom = {
  capacity: currentCapacity, // Capacité actuelle de la salle d'attente
};

const healthCenter = {
  capacity: 0, // Capacité actuelle du centre de santé
  // healingPokemon: function ; // Fonction de soin des Pokémon (à ajouter ultérieurement)
};

const pokemon = {
  name: "",
  health: 0,
  isInside: false,
};

let reptincel = Object.create(pokemon);
let florizarre = Object.create(pokemon);
let herbizarre = Object.create(pokemon);
let bulbizarre = Object.create(pokemon);
let salamèche = Object.create(pokemon);
let drakaufeu = Object.create(pokemon);
let carapuce = Object.create(pokemon);
let carabaffe = Object.create(pokemon);
let tortank = Object.create(pokemon);

let pokemonObjects: any = [];


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
    name: "Dracaufeu",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    energie: 25
  },
  {
    name: "Carapuce",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    energie: 19
  },
  {
    name: "Carabaffe",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    energie: 34
  },
  {
    name: "Tortank",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    energie: 40
  },
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
  card.setAttribute("id", title);
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
  healBarre.setAttribute("id", title + "_health");
  healBarre.classList.add('barre');
  divAuCentre.appendChild(healBarre);

  const cardEnergie: HTMLElement = document.querySelector('#' + title + "_health")!;
  // cardEnergie.classList.add('energie');
  cardEnergie.innerHTML = energie.toString();
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
  cardButton.setAttribute("value", "Enter");
  cardButton.textContent = 'entrer';
  cardBody.appendChild(cardButton);

};

function soigner(title: number, energie: number) {
  const titleElt: HTMLElement = document.querySelector('#' + title + "_health")!;
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


// const generateBtnElt = document.getElementById("add-poke-btn")!;
// generateBtnElt.addEventListener("click", generatePokemons);

function createPokemonObjects() {                          // Bouton "Ajouter Pokémons"
  for (let i = 0; i < pokemonList.length; i++) {
    let item = pokemonList[i];
    pokemonObjects.push({ name: pokemonNames()[i], img: item.picture, health: item.energie, isInside: isInside });
  }
}

function generatePokemons() {
  createPokemonObjects();                        // Bouton "Ajouter Pokémons"
  for (let i = 0; i < pokemonObjects.length; i++) {
    // let item = pokemonList[i];
    createCard(pokemonObjects[i].name, pokemonObjects[i].img, pokemonObjects[i].health);
  }

}
const healAllBtnElt = document.getElementById("heal-all-btn")!;
healAllBtnElt.addEventListener("click", healAllPokemons);
function healAllPokemons() {
  for (let i = 0; i < pokemonObjects.length; i++) {
    const pokemon = pokemonObjects[i];
    const healthBarElt = document.getElementById(pokemon.name + "_health")!;
    let width = pokemon.health;
    let id = setInterval(progress, 20);

    function progress() {
      if (width >= 100) {
        clearInterval(id);
        healthBarElt.innerText = "Soigné";
      } else {
        width++;
        healthBarElt.style.width = width + "%";
        healthBarElt.innerText = width + "%";
      }
    }
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


// Vérifier si un événement de clic est déjà attaché
/*if (!enterBtnElt.hasAttribute("data-event-attached")) {
  enterBtnElt.setAttribute("data-event-attached", "true");        // Ajouter un attribut pour indiquer que l'événement est attaché
  enterBtnElt.addEventListener("click", togglePokemonLocation(pokename: string));   // Ajout d'un écouteur d'événement sur le clic du bouton
}
 */

const counterElt = document.getElementById("counter")!;

const pokemonListItems = document.querySelector(".nomPokemonsPresents ul")!;
console.log(pokemonListItems);

function togglePokemonLocation(pokeName: string) {
  if (isPlacesNumberNegative() || isPlacesNumberOverCapacity()) return;

  const enterBtnElt = document.querySelector(`#${pokeName} .card-button`)!;
  const pokemonElt = document.querySelector(`#${pokeName}`)!;

  const pokemon = pokemonObjects.find((pokemon: any) => pokemon.name === pokeName);

  if (!pokemon.isInside) {
    // Le Pokémon est à l'extérieur
    if (currentCapacity >= maxCapacity) {
      alert("Plus de places disponibles !");
      return;
    }

    const waitingPlace = document.querySelector(".pokemonInside")!;
    waitingPlace.appendChild(pokemonElt);
    pokemon.isInside = true;
    enterBtnElt.textContent = 'Exit';
    enterBtnElt.setAttribute("value", "Exit");
    currentCapacity++;

    // Add Pokémon name to nomPokemonsPresents
    const pokemonListItem = document.createElement("li");
    pokemonListItem.setAttribute("id", `${pokeName}-list`);
    pokemonListItem.textContent = pokeName;
    pokemonListItems.appendChild(pokemonListItem);
  } else {
    // Le Pokémon est à l'intérieur
    const waitingPlace = document.querySelector(".pokemonOutside")!;
    waitingPlace.appendChild(pokemonElt);
    pokemon.isInside = false;
    enterBtnElt.textContent = 'Enter';
    enterBtnElt.setAttribute("value", "Enter");
    currentCapacity--;

    // Remove Pokémon name from nomPokemonsPresents
    const pokemonListItem = document.getElementById(`${pokeName}-list`);
    if (pokemonListItem) {
      pokemonListItem.remove();
    }
  }

  counterElt.textContent = currentCapacity.toString();
}
