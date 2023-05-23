interface PokemonData {
  name: string;
  picture: string;
  health: number;
  maxHealth: number;
  isInside: boolean;
}

const pokemonsData: PokemonData[] = [                                  // Données des pokémons
  {
    name: "Reptincel",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    health: 30,
    maxHealth: 100,
    isInside: false,
  },
  {
    name: "Florizarre",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    health: 5,
    maxHealth: 100,
    isInside: false,
  },
  {
    name: "Herbizarre",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    health: 15,
    maxHealth: 100,
    isInside: false,
  },
  {
    name: "Bulbizarre",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    health: 7,
    maxHealth: 100,
    isInside: false,
  },
  {
    name: "Salamèche",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    health: 8,
    maxHealth: 100,
    isInside: false,
  },
  {
    name: "Dracaufeu",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    health: 25,
    maxHealth: 100,
    isInside: false,
  },
  {
    name: "Carapuce",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    health: 19,
    maxHealth: 100,
    isInside: false,
  },
  {
    name: "Carabaffe",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    health: 34,
    maxHealth: 100,
    isInside: false,
  },
  {
    name: "Tortank",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    health: 40,
    maxHealth: 100,
    isInside: false,
  },
];



class Pokemon {

  public get getName(): string {
    return this.name;
  }

  public get getPicture(): string {
    return this.picture;
  }

  public get getHealth(): number {
    return this.health;
  }

  public set setHealth(value: number) {
    this.health = value;
  }

  public get getMaxHealth(): number {
    return this.health;
  }

  public get getIsInside(): boolean {
    return this.isInside;
  }

  public set setIsInside(value: boolean) {
    this.isInside = value;
  }

  constructor(private name: string, private picture: string, private health: number, private maxHealth: number, private isInside: boolean) { }

  createPokemon() {
    createCard(this.name, this.picture, this.health);
  }

  enterRoom() {

  }

  exitRoom() {

  }
}


/*           ***********************************************            */




const cards = document.querySelector(".pokemonOutside") as HTMLElement;

function createElement(element: string, className: string, parent: HTMLElement) {
  const elt = document.createElement(element);
  elt.classList.add(className);
  parent.appendChild(elt);
  return elt;
}

function createCard(title: string, imageUrl: string, energie: number): void {    // Générer les cartes pokémons

  const card = createElement("div", "card", cards);
  card.setAttribute("id", title);

  const cardHeader = createElement("div", "card-header", card);

  const cardImg = createElement("div", "card-img", cardHeader);
  cardImg.style.backgroundImage = `url(${imageUrl})`;

  const cardBody = createElement("div", "card-body", card);

  const cardTitle = createElement("h2", "card-title", cardBody);
  cardTitle.textContent = title;

  const divHealth = createElement("div", "health", cardBody);

  const healBarre = createElement("div", "barre", divHealth);
  healBarre.setAttribute("id", title + "_health");

  const cardEnergie: HTMLElement = document.querySelector('#' + title + "_health")!;
  cardEnergie.innerHTML = energie.toString();
  cardEnergie.style.width = energie + "%";

  const healButton = createElement("button", "btn", cardBody);
  healButton.classList.add("heal-btn");
  healButton.setAttribute("onclick", `soigner('${title}', ${energie})`);
  healButton.textContent = 'Soigner';

  const cardButton = createElement("button", "card-button", cardBody);
  cardButton.setAttribute("onclick", `togglePokemonLocation('${title}')`);
  cardButton.setAttribute("value", "Enter");
  cardButton.textContent = 'entrer';

};

/* 
function generatePokemons() {
  pokemonsData.forEach((pokemonData: PokemonData) => {
    createCard(pokemonData.name, pokemonData.picture, pokemonData.health)
  });
}
 */


const pokemons: Pokemon[] = [];

pokemonsData.forEach((pokemonData: PokemonData) => {
  pokemons.push(new Pokemon(pokemonData.name, pokemonData.picture, pokemonData.health, pokemonData.maxHealth, pokemonData.isInside));
});

function generatePokemons() {
  pokemons.forEach((pokemon: Pokemon) => {
    pokemon.createPokemon();
  })
};