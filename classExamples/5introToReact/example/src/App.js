import React from "react";
//uppercase object lowercase package?
import ExampleComponent from "./components/ExampleComponent"

class App extends React.Component {
  //must have render method to run and must return XML/JSX
  render(){
    return(
      //this is a class that is treated like an element because it has to be JSX which will later be converted to JS
      //the capital letter shows that it's not a normal tag
      <ExampleComponent name = "Sarah"/>
    );
  }
}

export default App;

//use npm run start to run the localhost
//this will keep running
//ctrl c will break the connection or you can just kill the terminal by clicking the trash can

//created a new components folder in src folder