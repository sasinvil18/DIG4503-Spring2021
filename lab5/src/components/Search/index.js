import Pokemon from "../Pokemon";
import {useState} from "react";
import Axios from "axios";

function Search(props){
  
  const [pokemon, setPokemon] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(0);
  const [nfound, setNfound] = useState(0);

  function searchMonster() {
    setLoading(true);

    Axios('https://pokeapi.co/api/v2/pokemon/' + search)
    .then((response) => {
      setPokemon(response.data);
      setLoading(false);
    })
    .catch(() => {
      setNfound(true);
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
        (loading === true) ? (<p>Loading...</p>) 
        : (<Pokemon data = {pokemon} />)
      }
      {
        (loading === true) && (nfound === true) ? (<p>Not Found!</p>) : (<p></p>)
      }

    </div>

  );
}

export default Search;