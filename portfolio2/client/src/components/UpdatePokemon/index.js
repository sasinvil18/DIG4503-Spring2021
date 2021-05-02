import Axios from "axios";
import { useState } from "react";

function UpdatePokemon(){
  const [updatePokeName, setUpdatePokeName] = useState("");
  const [updatePokeId, setUpdatePokeId] = useState("");

  const updatePokemon = (pokemon) => {
    Axios.patch("http://localhost:45030/team/" + pokemon)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Error: " + error)
    });
  }
  return(
    <div>
      <input type="text" onChange={(event) =>       setUpdatePokeName(event.target.value)} placeholder="Pokemon Name"></input>
      <input type="text" onChange={(event) =>       setUpdatePokeId(event.target.value)} placeholder = "ID"></input>
      <button onClick={() => {
          updatePokemon(updatePokeName);
      }}>Update Pokemon Team</button>
    </div>
  );
}

export default UpdatePokemon;