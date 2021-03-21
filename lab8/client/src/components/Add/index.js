import Axios from "axios";
import { useState } from "react";

function Add(){
  const [addName, setAddName] = useState("");
  const [added, setAdded] = useState([]);

  const putName = (name) => {
    Axios.put("http://localhost:45030/people/" + name)
    .then(response => {
      console.log(response.data);
      setAdded(response.data.person);
    })
    .catch(error => {
      console.log("Error: " + error)
    });
  }
  return(
    <div>
      <input type="text" onChange={(event) =>       setAddName(event.target.value)}></input>
      <button onClick={() => {
          putName(addName);
      }}>Click to Add a Name</button>

    </div>
  );
}

export default Add;