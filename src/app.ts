// import * as pokemonList from "./pokedex";
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

function isPlacesNumberNegative() {     // vérifie si nombre de places pas < 0
  if (waitingRoom.capacity < 0) {
    alert("Nombre de places négatif !");
    return true;
  }
}

function isPlacesNumberOverCapacity() {     // vérifie si nombre de places pas < 0
  if (waitingRoom.capacity >= maxCapacity) {
    alert("Plus de places disponibles !");
    return true;
  }
}

window.onload = (event) => {            // affiche le nombre de places dispo au chargement de la page
  // isPlacesNumberNegative();
  const counter: (HTMLElement | null) = document.querySelector("#counter")!;

  counter.textContent = waitingRoom.capacity.toString();
}


// Sélection du bouton d'entrée/sortie
const enterBtnElt = document.querySelector(".pokemonOut1 .btn")!;
// Vérifier si un événement de clic est déjà attaché
if (!enterBtnElt.hasAttribute("data-event-attached")) {
  enterBtnElt.setAttribute("data-event-attached", "true"); // Ajouter un attribut pour indiquer que l'événement est attaché
  enterBtnElt.addEventListener("click", togglePokemonLocation); // Ajout d'un écouteur d'événement sur le clic du bouton
}

// Sélection de l'élément du compteur
const counterElt = document.getElementById("counter")!;

// Sélection des éléments <li> correspondant aux emplacements de Pokémon dans la liste
const pokemonListItems = document.querySelectorAll(".nomPokemonsPresents li");

// Fonction pour changer l'emplacement du Pokémon entre l'intérieur et l'extérieur du centre de santé
function togglePokemonLocation() {
  if (isPlacesNumberNegative() || isPlacesNumberOverCapacity()) return;

  const pokemonElt = document.querySelector(".pokemonOut1")!; // Sélection de l'élément du Pokémon
  const pokemonContainer = pokemonElt.parentElement; // Sélection du conteneur du Pokémon

  // Vérification de l'emplacement actuel du Pokémon
  if (isInside) {
    // Le Pokémon est à l'intérieur
    const waitingPlace = document.querySelector(".pokemonOutside")!; // Sélection de l'emplacement à l'extérieur du centre
    waitingPlace.appendChild(pokemonElt); // Ajout du Pokémon à l'emplacement extérieur
    isInside = false; // Mise à jour de l'indicateur de position
    enterBtnElt.setAttribute("value", "Enter"); // Mise à jour de la valeur du bouton
    currentCapacity--; // Réduire la capacité actuelle

    // Retirer le nom du Pokémon de la liste
    const pokemonListItem = document.getElementById("pokemonItem1")!;
    pokemonListItem.textContent = "";
  } else {
    // Le Pokémon est à l'extérieur
    const waitingPlace = document.querySelector(".pokemonIn1"); // Sélection de l'emplacement d'attente dans le centre
    waitingPlace?.appendChild(pokemonElt); // Ajout du Pokémon à l'emplacement d'attente
    isInside = true; // Mise à jour de l'indicateur de position
    enterBtnElt.setAttribute("value", "Exit"); // Mise à jour de la valeur du bouton
    currentCapacity++; // Augmenter la capacité actuelle

    // Ajouter le nom du Pokémon à la liste
    const pokemonListItem = document.getElementById("pokemonItem1")!;
    pokemonListItem.textContent = bulbi.name;
  }
  // Mise à jour du compteur
  counterElt.textContent = currentCapacity.toString();
}
