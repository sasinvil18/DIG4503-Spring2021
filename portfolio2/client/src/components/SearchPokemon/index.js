import Axios from "axios";
import { useState } from "react";

function SearchPokemon(){
  const [search, setSearch] = useState("");


  const searchPokemon = (pokemon) => {
    Axios.get("http://localhost:45030/team/" + pokemon)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Error: " + error)
    });
  };
  return(
    <div>
      <input type="text" onChange={(event) => setSearch(event.target.value)}></input>
      <button onClick={() => {
          searchPokemon(search);
      }}>Search Pokemon</button>
    </div>
  );
}

export default SearchPokemon;