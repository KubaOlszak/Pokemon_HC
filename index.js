const cards = document.querySelector(".cards");

const animalsToAdopt = [
  {
    name: "pikachtu",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    energie: 30

  },
  {
    name: "Salamandre",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    energie: 5

  },
  {
    name: "drako",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    energie: 15
  },
  {
    name: "mike",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    energie: 7
  },
  {
    name: "pika",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    energie: 8
  }
];

function createCard(title, imageUrl, energie,) {
  const card = document.createElement('div');
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

  const cardEnergie = document.querySelector('#' + title);
  // cardEnergie.classList.add ('energie');
  cardEnergie.textContent = energie;
  cardEnergie.style.width = energie + '%';

  const healButton = document.createElement('button');
  healButton.classList.add('btn');
  healButton.setAttribute("onclick", `grandir('${title}', ${energie})`);
  healButton.textContent = 'Soigner';
  cardBody.appendChild(healButton);

  const cardButton = document.createElement('button');
  cardButton.classList.add('card-button');
  cardButton.textContent = 'entrer';
  cardBody.appendChild(cardButton);

};



function grandir(title, energie) {
  const elem = document.querySelector('#' + title);
  let largeur = energie;
  let id = setInterval(progression, 20);

  function progression() {
    if (largeur < 100) {
      largeur++;
      elem.style.width = largeur + "%";
      elem.innerText = largeur + "%";
    }
    else {
      clearInterval(id);
      elem.innerText = "Soigné";
    }
  }
}

/* 
function grandir() {
  let elem = document.getElementById("laBarre");
  // console.log(elem);
  // return;
  let largeur = 15;
  // elem.style.width.textContent = largeur;
  let id = setInterval(progression, 50);
 
  function progression() {
    if (largeur < 100)
      largeur++;
    elem.style.width = largeur + "%";
    elem.innerText = largeur + "%";
  }
  ifelse
  {
    clearInterval(id);
    elem.innerText = "Traitement terminé";
 
  }
} */

function generatePokemons() {
  for (let i = 0; i < animalsToAdopt.length; i++) {
    let item = animalsToAdopt[i];
    createCard(item.name, item.picture, item.energie);
  }
}
