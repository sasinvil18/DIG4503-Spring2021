import axios from "axios";
//use import to get info from other files/places

// Fetch this URL
axios('https://pokeapi.co/api/v2/pokemon/ditto')
// And then...
.then(function (response) {
    // Use the 'data'
    const pokemon = response.data;

    // In this example, the above URL will return an object
    //  with data on the Pokemon requested
    console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
})
.catch(function (error) {
    // handle error
    console.log("Error: " + error);
});

console.log('In the mean time...');
console.log('This code ran')









//INTRO TO NODE AND JS AS WELL AS WHY WE INSTALL CERTAIN NODE PACKAGES

//we use let to declare variables as well as const for variables that will not change

//we can save functions in variables

//anonymous functions are functions that dont have a name but they are still declared with the const keyword

//arrow functions
/*const funcExample = () => {

};*/

//node.js
//node, npm, nps?
//npm init , npm insatll

//we can run javascript files using the node command on the current directory
//node index.js runs the index folder of the current directory

//cd means change directory and can be used to change directories in the folder that youre in
//.. moves back up one directory
//./ in the current directory, look for something else
//../ go back one level and reference something from there

//add "type": "module" to the pakcage.json file
//npm install axios which is used for when we do promises