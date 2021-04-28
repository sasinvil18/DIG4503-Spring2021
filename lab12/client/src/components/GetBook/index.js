import Axios from "axios"
import { useState } from "react";

function GetBook(){
  const [lookupBook, setLookupBook] = useState("");

  //change to async and await
  const getBook = (isbn) => {
    Axios.get("http://localhost:45030/books/" + isbn)
    .then(response => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
  }

  return(
    <div>
      <br></br>
      <p><strong>Click Button to Search for a Book</strong></p>
      <p>ISBN: </p><input type="text" onChange={(event) => setLookupBook(event.target.value)}></input>
      <br></br>
      <button onClick={() => getBook(lookupBook)}>Search for a Book</button>
      <br></br>
    </div>
  );
}

export default GetBook;