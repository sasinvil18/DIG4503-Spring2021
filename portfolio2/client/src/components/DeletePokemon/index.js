import Axios from "axios";
import { useState } from "react";

function DeletePokemon(){
  const [deletePoke, setDeletePoke] = useState("");


  const deletePokemon = (pokemon) => {
    Axios.delete("http://localhost:45030/team/" + pokemon)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Error: " + error)
    });
  }
  return(
    <div>
      <input type="text" onChange={(event) =>       setDeletePoke(event.target.value)}></input>
      <button onClick={() => {
        deletePokemon(deletePoke);
      }}>Delete Pokemon</button>
    </div>
  );
}

export default DeletePokemon;