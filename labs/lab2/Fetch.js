import axios from "axios";
import chalk from "chalk";

class Fetch{
    constructor(pokemon, color){
        this.pokemon = pokemon;
        this.color = color;
    }
    fetch(){
        axios("https://pokeapi.co/api/v2/pokemon/" + this.pokemon)
        .then((response) => {
            const pokemonData = response.data;

            console.log(chalk.hex(this.color)("This is a " + pokemonData.name + " and it's Pokemon ID is " + pokemonData.id));
        })
        .catch((error) => {
            console.log(chalk.red("Error:" + error + "!"));
        });
    }
}

export default Fetch;