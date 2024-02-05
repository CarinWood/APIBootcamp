let pokemons = document.querySelector(".pokemons");

fetch("https://majazocom.github.io/Data/pokemons.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    /*   data.map((item) => {
      return console.log(item);
    }); */

    data.forEach((element) => {
      let pokemon = document.createElement("p");
      pokemon.innerText = element.name + " ";
      pokemons.appendChild(pokemon);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
