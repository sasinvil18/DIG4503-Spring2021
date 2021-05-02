import logo from './logo.svg';
import './App.css';
import LogIn from "./components/LogIn"
import AddFav from './components/AddPokemon';
import UpdateFav from './components/UpdatePokemon';
import DeleteFav from './components/DeletePokemon';
import SearchPokemon from './components/SearchPokemon';

//Building Pokemon team by connecting PokeAPI to MongoDB

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
