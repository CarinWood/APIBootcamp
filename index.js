/*  Exercise 1 */

let pokemons = document.querySelector(".pokemons");

fetch("https://majazocom.github.io/Data/pokemons.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {

    data.forEach((element) => {
      let pokemon = document.createElement("p");
      pokemon.innerText = element.name + " ";
      pokemons.appendChild(pokemon);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

/* Exercise 2 */
let dogs = document.querySelector('.dogs')

fetch("https://majazocom.github.io/Data/dogs.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    return res.json();
  })
  .then((data) => {
    data.forEach((dog) => {
      let newDog = document.createElement('p')
      newDog.innerText = dog.name
      dogs.appendChild(newDog)
    });
  });


/*   Exercise 3 */


