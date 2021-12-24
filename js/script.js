/* eslint-disable no-undef */
let pokemonRepository = (function () {
    // Start of the IIFE function
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
      // Start of  add pokemon function
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    // Checks for object and name and pushes it to pokemon if valid and throws as error on console if it does't meet either of those expectations
    } else {
      console.log("pokemon is not correct");
    }
  }// End of Add Function
  function getAll() {
    return pokemonList;
    
}

  function addListItem(pokemon) {
      // Start of addListItem function
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    // Creats a list and a button element
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    //  console.log(pokemon.name);
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    // Append meaning add. This is then added to HTML
    pokemonList.appendChild(listpokemon);

    button.addEventListener("click", function() {
      showDetails(pokemon);
      
    });
  }// End of addListItem Function

  function loadList() {
      // start of loadList  function
    return fetch(apiUrl).then(function (response) {
        // Fetches the api of the url
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        // console.log(pokemon);
      });
      // .catch will catch any errors that did not pass through .then promise function
    }).catch(function (e) {
      console.error(e);
    })
  }// End of loadList  function

  function loadDetails(item) {
      // start of loadDetails Function 
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
     // This loads the details and is available on click of the button
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }// End of loadDetails Funcion


  function showDetails(pokemon) {
    
      // Start of showDetails Function
    loadDetails(pokemon).then(function () {

      // This grabs the details from the loadDetails function and log's them in console on click 
      showModal(pokemon);
        
      
    });
  }// End of showDetails Function

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    // eslint-disable-next-line no-undef
    let modalTitle = $(".modal-title");
    modalTitle.empty();
    modalBody.empty();



//Create a name element to display in the console
  let nameElement = $("<h1 class=\"text-capitalize\">" + pokemon.name + "</h1>");
  // Image element
  let imageElement = $("<img class=\"modal-img\" src=\"\" >");
  imageElement.attr("src", pokemon.imageUrl);
  // Height
  let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");


    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);

    $("#pokedex").modal();
    }

  return {
    // This is where all the function is returned
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
   
   
  };



})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
