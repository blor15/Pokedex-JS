const pokeContainer = document.getElementById("poke_container");
const pokemonNumber = 150;

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psyhic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonNumber; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");

  const pokemonTypes = pokemon.types.map((element) => element.type.name);
  const type = mainTypes.find((type) => pokemonTypes.indexOf(type) > -1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokeInnerHTML = `
  <div class="img-container">
   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">

  </div>
  <div class="info">
    <span class="number">${pokemon.id}</span>
    <h3> class="name>${name}</h3>
    <small class="type">Type:  <span>${type}</span></small>
  </div>
  ${name}`;

  pokemonElement.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonElement);
}
