import Axios from "axios";
import { useState } from "react";

function AddPokemon(){
  const [addPoke, setAddPoke] = useState("");


  const getPokemon = (name) => {
    Axios.put("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(response => {

      let pokeName = response.data.name;
      let pokeId = response.data.id;

      return (pokeName, pokeId)
    })
    .catch(error => {
      console.log("Error: " + error)
    });
  }

  //use the pokeapi and place the data in the mongodb database
  const createPokemon = (pokemon) => {
    Axios.put("https://localhost:45030/team/" + pokemon)
    .then(response => {
      const gettinginfo = getPokemon(pokemon)

      response.data.pokemon = gettinginfo.name;
      response.data.id = gettinginfo.id;

      console.log(response.data.pokemon);
      console.log(response.data.id);
    })
    .catch(error => {
      console.log("Error: " + error)
    });
  }
  return(
    <div>
      <input type="text" onChange={(event) =>       setAddPoke(event.target.value)}></input>
      <button onClick={() => {
          createPokemon(addPoke);
      }}>Add Pokemon</button>
    </div>
  );
}

export default AddPokemon;