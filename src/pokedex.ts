export const pokemonList = [
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

const cards = document.querySelector(".cards")!;

export function createCard(title: string, imageUrl: string, energie: number,) {
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

  const cardEnergie: HTMLElement = document.querySelector('#' + title)!;
  // cardEnergie.classList.add ('energie');
  cardEnergie.textContent = energie.toString();
  cardEnergie.style.width = `${title} + %`;

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


export function grandir(title: number, energie: number) {
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

export function generatePokemons() {
  for (let i = 0; i < pokemonList.length; i++) {
    let item = pokemonList[i];
    createCard(item.name, item.picture, item.energie);
  }
}
