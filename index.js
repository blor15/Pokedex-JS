const pokeContainer = document.getElementById("poke_container");
const pokemonNumber = 251;

// Colors are used for the Pokemon typing
const colors = {
  fire: "#FDDFDF",
  grass: "#2ff736",
  electric: "#e3b520",
  water: "#1ea8e8",
  ground: "#9c5636",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#83f00e",
  dragon: "#97b3e6",
  psychic: "#ca44db",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  rock: "#6e4401",
  dark: "#3d3933",
  ghost: "#77588c",
};

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonNumber; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then(createPokemonCard);
};

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");

  const pokemonTypes = pokemon.types.map((element) => element.type.name);
  const type = mainTypes.find((type) => pokemonTypes.indexOf(type) > -1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const color = colors[type];

  pokemonElement.style.backgroundColor = color;

  const pokeInnerHTML = `
  <div class="img-container">
   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
     pokemon.id
   }.png">

  </div>
  <div class="info">
    <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;

  pokemonElement.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonElement);
}
