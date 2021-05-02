import Express from "express";
import CORS from "cors";
import Database from "./Database.js";

const App = Express();
const port = 45030;

App.use( Express.json() );
App.use( CORS() );

const accounts = [
  {
    "username": "Test1",
    "password": "password1"
  },
  {
    "username": "Test2",
    "password": "password2"
  },
  {
    "username": "Test3",
    "password": "password3"
  }
];

//Create a new database
const d = new Database();
//Database.connect()
d.connect("portfolio2", "SarahSinvil");


//GET ( App.get() )
//finding username in the incorporated array
App.get("/accounts/:username", async (req, res) => {
  const username = req.params.username;
  const password = req.body.password;

  let result = {user: "not found"};

  accounts.forEach((value) => {
    if(value.username === username){
      if(value.password === password){
        result = {
          username: username,
          password: password
        }
        console.log(value.password)
      }
    }
  });

  res.json(
    {
      username: username,
      password: password
    }
  );

});

//GET ( App.get() )
//finding pokemon in the database
App.get("/team/:pokemon", async (req, res) => {
  const pokemon = req.params.pokemon;

  const result = await d.readOne(pokemon);

  res.json(result);

});

//PUT ( App.get() )-> database.createOneMovie() -> collection.insertOneMovie
//Adding Pokemon to mongodb database
App.put("/team/:pokemon", async (req, res) => {
  const pokemon = req.params.pokemon;

  const result = await d.insertOne(pokemon);

  res.json(result);

});

//PATCH ( App.patch() )-> database.updateOne() -> collection.updateOne
App.patch("/team/:pokemon", async (req, res) => {
  const pokemon = req.params.pokemon;

  const id = req.body.id;

  const result = await d.updateOne(pokemon, id);

  res.json({
    username: username,
    password: password,
    name: name
  });

});

//DELETE ( App.delete() )-> database.deleteOne() -> collection.deleteOne()
App.delete("/team/:pokemon", async (req, res) => {
  //Request Parameter
  const pokemon = req.params.pokemon;

  //Talk to database code
  const result = await d.deleteOne(pokemon);

  res.json(result);

});

/*//GET ( App.get() )-> database.readOne() -> collection.findOne()
App.get("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;

  const result = await d.readOne(ISBN);

  res.json(result)
});

/*App.post("/books/search", async (req, res) => {
  const searchQuery = req.query;

  const result = await d.readMany(searchQuery);
  

  res.json({books: result});
});

//PATCH ( App.patch() )-> database.updateOne() -> collection.updateOne()
App.patch("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;

  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;

  const result = await d.updateOne(ISBN, title, author, description);

  res.json(result);
});

*/


App.listen(port, () => {
  console.log("Server is running!");
});