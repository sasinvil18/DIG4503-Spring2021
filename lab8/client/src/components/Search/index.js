import Axios from "axios";
import { useState } from "react";

function Search(){
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const getName = (person) => {
    Axios.get("http://localhost:45030/people/" + person)
    .then(response => {
      console.log(response.data);
      setSearchResult(response.data.person);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
  }

  return(
    <div>
      <input type="text" onChange={(event) => setSearchName(event.target.value)}></input>

      <button onClick={() => getName(searchName)}>Click to Search for a Name</button>

    </div>
  )
}

export default Search;