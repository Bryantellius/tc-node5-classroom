fetch("/pokemon")
  .then((res) => res.json())
  .then((data) => {
    displayPokemonCards(data);
  })
  .catch((err) => console.error(err));

function displayPokemonCards(list) {
  const pokemonContainer = document.querySelector(".pokemonContainer");

  for (let poke of list) {
    const col = document.createElement("div");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    col.classList.add("col-md-4")
    div.classList.add("card");

    img.src = poke.img;
    img.alt = "Image of " + poke.name;
    img.classList.add("img-fluid");
    h3.textContent = `${poke.num}\t${poke.name}`;

    div.append(img, h3);
    col.appendChild(div)
    pokemonContainer.appendChild(col);
  }
}
