import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import { useState } from "react";

//need two components, this is only one

//use concurrently to run both server and client at the same time

function App() {

  const [additionColor, setAdditionalColor] = useState("");
  const [searchColors, setSearchColors] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const putColor = (color) => {
    Axios.put("http://localhost:45030/colors/" + color)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log("Error: " + error)
    });
  };

  const getColors = (color) => {
    Axios.get("http://localhost:45030/search/" + color)
    .then(response => {
      console.log(response.data)
      setSearchResults(response.data.color);
    })
    .catch(error => {
      console.log("Error: " + error)
    });
  } 

  const deleteColor = (color) => {
    Axios.delete("http://localhost:45030/colors/" + color)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
      console.log("Error: " + error)
  });
  };

  return (
    <div className="App">
      <input type="text" onChange={(event) => setAdditionalColor(event.target.value)}></input>
      <button onClick={() => putColor(additionColor)}>Click to put color</button>
      <input type="text" onChange={(event) => setSearchColors(event.target.value)}></input>
      <button onClick={() => getColors(searchColors)}>Click to get colors</button>
      {
        searchResults.map((value, index) => {
          return <p key = {index}>{value}</p>
        })
      }
      <button onClick={() => deleteColor()}>Click to delete color</button>
    </div>
  );
}

export default App;
