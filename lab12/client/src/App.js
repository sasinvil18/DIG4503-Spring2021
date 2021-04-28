import logo from './logo.svg';
import './App.css';
import PutBook from "./components/PutBook";
import PatchBook from "./components/PatchBook";
import GetBook from "./components/GetBook";
import DeleteBook from "./components/DeleteBook";

function App() {
  return (
    <div className="App">
      <PutBook />
      <PatchBook />
      <GetBook />
      <DeleteBook />
    </div>
  );
}

export default App;
