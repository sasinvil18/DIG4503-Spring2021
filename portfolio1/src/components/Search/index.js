import React from "react";
import Pokemon from "../Pokemon";
import {useState} from "react";
import Axios from "axios";


function Search(props){
  
  const [pokemon, setPokemon] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(0);
  const [nfound, setNfound] = useState(0);
  const [team, setTeam] = useState([]);

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
      <h1>Create Your Pokemon Dream Team</h1>

      <input type="text" onChange={(event) => {
        setSearch(event.target.value);
        }
      }/>

      <button onClick={() => {
        searchMonster();
        team.push(<div><Pokemon data = {pokemon}/></div>);
        setTeam(team);
        }}>
        Add to Team
      </button>

      {
        <div>
          <h2>Pokemon Team: </h2>
          <p>Recently added: {pokemon.name}</p>
        </div>
      }

      {
        (loading === true) ? (<p>Loading...</p>) 
        : (team.map(
            (count, key) => {
              return(
                <div>
                  {/*the placing of the pokemon in the team is delayed until the next one is
                  entered and I don't know how to fix that but I've tried offsetting the key to 
                  help adjust to that*/}
                  <p>{team[key + 1]}</p>
                </div>
              );
            }
            )
          )
      }

      {
        //<h3>{team}</h3>
        /*<div>{
          team.map(
              function(count, key){
                  return <p key = {key}><Pokemon count = {key}/></p>
              }
          )
      }</div>*/
      }

      {
        (loading === true) && (nfound === true) ? (<p>Not Found!</p>) : (<p></p>)
      }

    </div>

  );
}

export default Search;