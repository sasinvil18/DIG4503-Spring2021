import axios from "axios";
// gives us the ability to talk to web servers
import chalk from "chalk";

//callback functions

const arrayExample = [1, 2, 3, 4];
//has built in methods since everything is an object so you can use dot notation

function printValue(value){
    console.log(value);
}

arrayExample.forEach(function(value){
    printValue(value);
});
//for each element, run this action

//callback function hell is when you call a function, calling a function, calling a function, .etc

//promises were made to solve callback hells

const arrayEx = [1, 2, 3, 4];

//a promise says in the future something will happen

//go do something, and when youre done then I'll do something

//axios
axios("https://pokeapi.co/api/v2/pokemon/23").then(function(response){
    const pokemon = response.data;
    console.log(pokemon.name);
}).catch(function(error){
    console.log("Error happened!");
});
//we use the keyword .then() when using promises if they are fulfilled
//can use .catch() method for if there is an error/ if anything goes wrong
//concatinating null to the url in quotes causes an error and the promise goes to the catch

console.log("Pausing dramatically");
//a promise is a future thing and that is why it will print to the console AFTER this line of code even though it is written before this line

//pokemon api will allow you to look up pokemon by number

//if nothing goes wrong it will be fulfilled but if an error happens, it will be rejected


//application programming interface - API

