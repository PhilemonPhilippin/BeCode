const baseURI =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const container = document.querySelector(".container");
for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("img");
  pokemon.setAttribute("src", baseURI + i + ".png");
  pokemon.setAttribute("alt", "Pokemon number " + i);
  container.appendChild(pokemon);
}
