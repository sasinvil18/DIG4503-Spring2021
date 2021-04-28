import Axios from "axios"
import { useState } from "react";

function PutBook(){
  const [addBook, setAddBook] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addAuthor, setAddAuthor] = useState("");
  const [addDes, setAddDes] = useState("");

  //change to async and await
  const createBook = (isbn) => {
    Axios.put("http://localhost:45030/books/" + isbn, {
      "title": addTitle,
      "author": addAuthor,
      "description": addDes
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Error: " + error)
    });
  }
  return(
    <div>
      <p><strong>Click Button to Add a Book</strong></p>
      <p>ISBN: </p><input type="text" onChange={(event) => setAddBook(event.target.value)}></input>

      <br></br>
    
      <p>Title: </p><input type="text" onChange={(event) => setAddTitle(event.target.value)}></input>
      <p>Author: </p><input type="text" onChange={(event) => setAddAuthor(event.target.value)}></input>
      <p>Description: </p><input type="text" onChange={(event) => setAddDes(event.target.value)}></input>
      <br></br><button onClick={() => {
          createBook(addBook, addTitle, addAuthor, addDes);
      }}>Add Book</button>
    </div>
  );
}

export default PutBook;