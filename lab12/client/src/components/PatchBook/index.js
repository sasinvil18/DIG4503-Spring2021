import Axios from "axios";
import { useState } from "react";

function PatchBooks(){
  const [updateBook, setUpdateBook] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateAuthor, setUpdateAuthor] = useState("");
  const [updateDes, setUpdateDes] = useState("");

  const patchBook = async(isbn) => {
    //usually do + whatever variable
    const response = await Axios.patch("http://localhost:45030/books/" + isbn, {
      "title": updateTitle,
      "author": updateAuthor,
      "description": updateDes
  });
    console.log(response.data);
  }


  return(
    <div>
      <br></br>
      <p><strong>Click Button to Update Book Information</strong></p>
      <p>ISBN: </p><input type="text" onChange={(event) => setUpdateBook(event.target.value)}></input>
      <p>Title: </p><input type="text" onChange={(event) => setUpdateTitle(event.target.value)}></input>
      <p>Author: </p><input type="text" onChange={(event) => setUpdateAuthor(event.target.value)}></input>
      <p>Description: </p><input type="text" onChange={(event) => setUpdateDes(event.target.value)}></input>
      <br></br>
      <button onClick = {() => {
        {patchBook(updateBook)}
      }}>Update Book</button>
    </div>
  );
}

export default PatchBooks;