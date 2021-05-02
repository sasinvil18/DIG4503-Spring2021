import logo from './logo.svg';
import './App.css';
import LogIn from "./components/LogIn"
import AddFav from './components/AddPokemon';
import UpdateFav from './components/UpdatePokemon';
import DeleteFav from './components/DeletePokemon';
import SearchPokemon from './components/SearchPokemon';

//Search for movies using the sample data with the ability to save favorites in a separate collection based on their username or identification.

function App() {

  return (
    <div className="App">
      <div>
        <h1>Pokemon Team</h1>
        <LogIn />
        <br></br>
        <AddFav />
        <br></br>
        <SearchPokemon />
        <br></br>
        <UpdateFav />
        <br></br>
        <DeleteFav />


      </div>
    </div>
  );
}

export default App;
