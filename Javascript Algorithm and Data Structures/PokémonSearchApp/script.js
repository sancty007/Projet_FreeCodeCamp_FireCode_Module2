document.getElementById("search-button").addEventListener("click", () => {
  // Get the input value
  const inputValue = document
    .getElementById("search-input")
    .value.toLowerCase();

  // Check if input is empty
  if (!inputValue) return;

  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputValue}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokémon non trouvé");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("pokemon-name").textContent =
        data.name.toUpperCase();
      document.getElementById("pokemon-id").textContent = `#${data.id}`;
      document.getElementById("weight").textContent = `Poids: ${data.weight}`;
      document.getElementById("height").textContent = `Taille: ${data.height}`;

      document.getElementById("hp").textContent = data.stats[0].base_stat;
      document.getElementById("attack").textContent = data.stats[1].base_stat;
      document.getElementById("defense").textContent = data.stats[2].base_stat;
      document.getElementById("special-attack").textContent =
        data.stats[3].base_stat;
      document.getElementById("special-defense").textContent =
        data.stats[4].base_stat;
      document.getElementById("speed").textContent = data.stats[5].base_stat;

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
