
let pokemonList = [
    {name: "bulbasaur", height : 0.7 , types: "Grass"},
     {name: "Pikachu", height : 0.4 , types: "Electric"},
      {name: "Charmander", height : 0.6 , types: "Fire"},
      {name: "Mew", height : 1.04 , types: "synchronize"}
]
document.write("<div class='text'>");
// Putting this div outside of the loop ensurs that it does not creat a new class to go along with the content of text it creats
for (let i = 0 ; i < pokemonList.length; i++){
    //  i=0 because in an array the index starts at 0 
    // i < pokemonList.length is the condition. in this case it's untill i reaches the final index
    // length; i++ Is the action it adds 1 to i=0 untill the condition is met

    document.write("<p> " + pokemonList[i].name + ": ");
    document.write( ("( ") + pokemonList[i].height + "m )</p>");

    
    if (pokemonList[i].height > 1 ){
        // This checks height of each pokemon as it is still inside the for loop  and the incremetn of i++ still works 
        document.write("<p>The height of " + (pokemonList[i].name) + " exceeds 1m</p>");
    }
}
document.write("</div>");