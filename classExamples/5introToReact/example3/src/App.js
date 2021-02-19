import {useState} from "react";

//weve been creating objects using import statements
//instead of writing React we write {useState} which is a method from react and we just want that
//we write React because we want everything

//react hooks
//hook into how react handles rendering
//functions dont have access to setState or the constructor
//if it starts with use, it is a react hook
//hooks only work with function components

//destructuring assignment
function App() {

  //this is a destructed assignment
  //whatever is returned from useState returns an array and from what this array returns assign two variables
  
  /*
  this is what happens in the destrure

    const counter = array[0]
    const setcounter = array[1]
  */


 const [counter, setCounter] = useState(0); //technically React.useState;
 //each time you want to track something, you have to create a new useState


  return (
    <div className="App">
      <button onClick = {() => {
        setCounter(5);
        console.log(counter)
      }}>
        Click Me
      </button>
      {counter}
    </div>
  );
}

/*
import { Component } from "react";

this just imports the component element that we use from react

class App extends Component{

}
*/

export default App;

/* Notes

Mounting/Starting Up - putting it on the page

when the mounting phase ends you can use componentDidMount()

is pass tense because it already happened

data should be loaded during this phase
even though it takes a long time, its better to take longer in the beginning and work quickly after, than for it to be slow all the time


Updating/Running - waiting for the interaction

anything that has to do with setState() or render()


Unmounting/Shutting Down - taking the elements off the page

componentWillUnmount()
will in the futere, hasn't done it yet

for functions:
mounting - useEffect()
updating - whatever it returns
unmounting - useEffects

 */
//this is help for lab 5
//refer to modules about desstructuring arrays
//useState returns an array
/*
import {useState} from"react";
import Axios from "axios";

function App(){
  setLoading(true);

  const [search, setSearch] = useState("");
  //use setCounter to change counter and use counter when you want to view its value

  const [pokemon, setPokemon] = useState({});

  const [loading, setLoading] = useState(false);

  //use captial A for axios
  //copy code from lab2 but not ditto, for what the user types
  //will get a lot of errors with onChange because it checks for everytime you type
  function searchMonsters(){
    Axios()
    .then(should contain setLoading(false) after setPokemon(response.data))
    .catch();
  }
  //add image is : then the sprite image
  setPokemon(response.data)

  return(
    <div>
      //events happen at the document level
      //use onChange instead of onClick so it updates whenever it changes
      <input type="text" onChange={ (event) => {
        setSearch(event.target.value); //anytime you click on the target, give me its current value
       }} />
       <button onClick= { () => searchMonsters()
       }>
       Search</button
       {
         <p> Searched: {search}</p>
       }
       {
         //conditional operarot in week 6
         //use ? and : for if else
         (loading == true) ? (
           <p> Loading...</p>
         ) : (
          <div>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.id</p>
            <img src ={pokemon.sprities.front_default} />
          </div>
         )
        }
    </div>
  );
}


*/

//npm update to check packages and get the lastest version sof them