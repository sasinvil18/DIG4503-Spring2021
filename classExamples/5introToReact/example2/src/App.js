//import HomePage from "./components/HomePage";
//default is a functoin but technically a functoin is an object
//doen't need to extend react like in a class
//functions don't need to have render method like a class, just a return
/*function App(){

  let lastName = "Sinvil";

  return (
  <div>
    <p>My name is :</p>
    <HomePage firstName = "Sarah" />
    <p>{lastName}</p>
  </div>
  );
}
*/
//you can only have one root element which is why it's best to have <div> tags surrounding everything
//you cant write the <HomePage /> element and then have a <p> tag because of the "only one root element" rule

/* 

for classes

constructor(props){
  super(props);
  this.exampleProperty = 5;
  //this is the equivalent of a variable in a function
}
render(){
  return(

  );
}


*/

import React from "react";
//state 
//can compare it to a vending machine
//set up the data, swipe the card, then worry about the interactions after that
class App extends React.Component{
  //must pass props to the constructor because it expects it
  //constructor passes props to super
  constructor(props){
    super(props);
    
    //React expects this.state
    this.state = {
      coins: []
    };
  }
  
  render(){
    return(
      <div>
        <h2>Click this to add a coin</h2>
        <button onClick = {() => {
          const coins = this.state.coins;
          this.state.coins.push("Coin");
          this.setState({coins: coins})
        }
        }>
          Click Me
        </button>
        <div>{
          this.state.coins.map(
            function(item, index){
              return <p key = {index}>{item}{index}</p>
            }
          )
        }</div>
      </div>
    );
  }
}
//interaction changes the data, the events change the state
//addEventLister()
//events happen at the document level
//onClick =
//this.setState()
//arrow functions arent objects so they dont have a this as in this.object
//array
//.map returns something, .forEach does not
export default App;