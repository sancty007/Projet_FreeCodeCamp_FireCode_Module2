document.getElementById("search-button").addEventListener("click", () => {
  // Get the input value
  const inputValue = document
    .getElementById("search-input")
    .value.toLowerCase();

  if (!inputValue) return;

  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputValue}`)
    .then((response) => {
      if (!response.ok) {
        alert("Pokémon non trouvé");
        return;
      }
      return response.json();
    })
    .then((data) => {
      // update pokemon
      updatePokemonInfo(data);

      const sprite = document.getElementById("sprite");
      sprite.src = data.sprites.front_default;
      sprite.alt = data.name;

      const typesContainer = document.getElementById("types");
      typesContainer.innerHTML = "";

      data.types.forEach((type) => {
        const typeElement = document.createElement("p");
        typeElement.textContent = type.type.name.toUpperCase();
        typesContainer.appendChild(typeElement);
      });
    })
    .catch((error) => {
      alert(`Erreur: ${error.message}`);
      document.getElementById("pokemon-name").textContent = "";
    });
});

function updatePokemonInfo(data) {
  const elements = {
    "pokemon-name": data.name.toUpperCase(),
    "pokemon-id": `#${data.id}`,
    weight: `Poids: ${data.weight}`,
    height: `Taille: ${data.height}`,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    "special-attack": data.stats[3].base_stat,
    "special-defense": data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
  };

  for (const id in elements) {
    document.getElementById(id).textContent = elements[id];
  }
}
