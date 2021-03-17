import Axios from "axios";

Axios.put("http://localhost:45030/people/Sarah")
.then((response) => {
  console.log(response.data)
})
.catch((error) => {
  console.log("The error was " + error)
});