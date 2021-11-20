
 let pokemonRepo = (function (){
     let pokemonList = [
    {name: "Bulbasaur", height : 0.7 , types: "Grass"},
     {name: "Pikachu", height : 0.4 , types: "Electric"},
      {name: "Charmander", height : 0.6 , types: "Fire"},
      {name: "Mew", height : 1.04 , types: "Synchronize"}
];
/*
if (pokemonList.height >= 1){
    document.write("<p>The height of " + (pokemonList.name) + " exceeds 1m</p>");
}
QUESTION 
How can i make this if statement work ?


*/

function getAll(){
    return pokemonList;
}

function add(pokemon){
    pokemonList.push(pokemon)
}

return {
    getAll: getAll,
    add: add
};
// This marks the end of pokemonRepo
 })(); // This is the bit of code  that iniates the functin  ();
 document.write("<div class='text'>")

 pokemonRepo.getAll().forEach(function(pokemon){
 document.write("<p> Name:" +pokemon.name + " Height: (" + pokemon.height + ") Types:"+ pokemon.types + "</p>")
 })
document.write("</div>")
