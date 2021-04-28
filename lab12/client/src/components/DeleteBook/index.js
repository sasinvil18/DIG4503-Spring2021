import Axios from "axios"
import { useState } from "react";

function DeleteBook(){
  const [deleteBook, setDeleteBook] = useState("");

  //change to async and await
  const removeBook = (isbn) => {
    Axios.delete("http://localhost:45030/books/" + isbn)
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
      <p><strong>Click Button to Delete a Book</strong></p>
      <p>ISBN: </p><input type="text" onChange={(event) => setDeleteBook(event.target.value)}></input>
      <br></br>
      <button onClick={() => removeBook(deleteBook)}>Search for a Book</button>
      <br></br>
    </div>
  );
}

export default DeleteBook;