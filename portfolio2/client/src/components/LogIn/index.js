import Axios from "axios";
import { useState } from "react";

function LogIn(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (username, password) => {
    Axios.get("http://localhost:45030/accounts/" + username)
    .then(response => {
      const userName = response.data.username;
      const userPass = response.data.password;
      const enteredPass = password;
      let greeting = "User was not found";

      if(userName !== "not found"){
        if(userPass === enteredPass){
          greeting = "Hello " + userName;
          console.log(greeting);
        }
        else{
          console.log(greeting);
        }
      }
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
  }

  return(
    <div>
      <input type="text" placeholder="Username" onChange={(event) => setUsername(event.target.value)}></input>
      <input text="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input>
      <button onClick={() => {
        logIn(username, password);
      }
      }>Log In</button>
    </div>
  );
}

export default LogIn;