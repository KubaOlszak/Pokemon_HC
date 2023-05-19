const cards = document.querySelector(".card");

const animalsToAdopt = [
  {
    name: "pikachtu",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    energie: 10

  },
  {
    name: "Salamandre",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    energie:5

  },
  {
    name: "drako",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    energie:15


  },
  {
    name: "mike",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    energie:7

  },
  {
    name: "pika",
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    energie:8

  }
];
function grandir (){
  var elem = document.getElementById("laBarre")
  var largeur = 15;
  var id = setInterval(progression,50 );

    function progression() 
    { 
      if (largeur < 100)
      largeur++;
      elem.style.width = largeur +"%";
      elem.innerText = largeur + "%";

     }
     ifelse
      { 
      clearInterval(id);
      elem.innerText="Traitement terminé";

     }
}


function createCard(title, imageUrl,energie,) {
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
    const cardButton = document.createElement('button');
    cardButton.classList.add('card-button');
    cardButton.textContent = 'entrer';
    cardBody.appendChild(cardButton);
    const cardEnergie = document.createElement ('energie');
    cardEnergie.classList.add ('energie');
    cardEnergie.textContent = animalsToAdopt[2].energie ;
  // Step1: Create the cardBody div, add the class card-body and add it to the card
  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the “title” parameter of this function
  // and add it to the cardBody
  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be “Adopt Now”
  // and add it to the cardBody
};
// Sample array

 
  
  // Function to create a card
 
createCard();
  
  // For loop to iterate over the array
  for (let i = 0; i < animalsToAdopt.length; i++) {
    let item = animalsToAdopt[i];
    createCard(item.name, item.picture);
  }
    // Step1: Create the cardBody div, add the class card-body and add it to the card

  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody

  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody


/* Step 4: Create a for loop, for each element of the array, 
 call the function createCard with the corresponding parameter */
