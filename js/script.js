
 let pokemonRepository = (function () {
     let repository = [
    {
    name: "Bulbasaur",
    height : 0.7 ,
    types: "Grass",
    },
     {
         name: "Pikachu",
          height : 0.4 , 
          types: "Electric"
        },
      {
          name: "Charmander",
           height : 0.6 , 
           types: "Fire"
        },
      {
          name: "Mew",
           height : 1.04 , 
           types: "Synchronize"
        },
];


function add(pokemon){
    repository.push(pokemon)
}

function getAll(){
    return repository;
}

function addListItem(pokemon){
let pokemonList = document.querySelector(".pokemon-list");
let listItem = document.createElement("li");
// creats an elemnt of li and a button 
let button = document.createElement("button")
button.innerHTML = pokemon.name;
// sets up my button to the name of the pokemon
button.classList.add("button");
listItem.appendChild(button);
// Append meaning add. This is then added to the html or in differnt word being used.
pokemonList.appendChild(listItem);

button.addEventListener("click",function()
{
    return showDetails(pokemon);
    // returns the function showDetails which shows an alert as of right now
});
function showDetails (pokemon){
     console.log(pokemon.name);
   
    // This function will eventually be rewritten to disply bio description of the pokemon
}

}

return {
    getAll: getAll,
    add: add,
    addListItem:addListItem,
  
};

// This marks the end of pokemonRepo
 })(); // This is the bit of code  that iniates the functin  ();
 pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon)
 })
