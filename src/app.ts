/* const room: {
  quantity: number | null;
  pokemonName: string | null;
} = {
  quantity: 0,
  pokemonName: '',
}
 */
// const health: number[];

const waitingRoom = {
  quantity: 0,
  pokemonName: [],

}

const healthCenter = {
  quantity: 0,
  pokemonName: [],
  //healingPokemon: function ;
}

const enterBtnElt = document.querySelector('.pokemon_card .btn')!;
enterBtnElt.addEventListener("click", enterInCenter);

function enterInCenter() {
  const pokemonElt = document.getElementById('bulbi')!;
  pokemonElt.classList.add('hidePokemon');

  // console.log(pokemonElt);
  // const waitingroomElt = document.querySelector('#waiting-room')!;
  // waitingroomElt.appendChild(pokemonElt);
}

function enter() {

}
