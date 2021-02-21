import Pokemon from "../Pokemon";
import {useState} from "react";
import Axios from "axios";

function Search(){
  
  const [pokemon, setPokemon] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(0);

  function searchMonster() {
    setLoading(true);

    Axios('https://pokeapi.co/api/v2/pokemon/' + search)
    .then((response) => {
      setPokemon(response.data);
      setLoading(false);
    })
    .catch(() => {
      console.log("Not Found!");
    })
  }

  return(
    <div>
      <input type="text" onChange={(event) => {
        setSearch(event.target.value);
        }
      }/>

      <button onClick={() => searchMonster()}>
        Search
      </button>

      {
        <p>Searched: {search} </p>
      }

      {
        (loading == true) ? (<p>Loading...</p>) 
        : (<Pokemon data = {pokemon}/>)
      }

    </div>

  );
}

export default Search;