const fetch = require("isomorphic-fetch");
const { createWriteStream } = require("fs");

const writePokemon = createWriteStream("./public/pokemon.json");

fetch(
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
)
  .then((res) => res.arrayBuffer())
  .then((data) => {
    console.log(data);
    writePokemon.write(Buffer.from(data));
  })
  .catch((err) => console.error(err));
