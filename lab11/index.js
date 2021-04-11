import Express from "express";
import CORS from "cors";
import Database from "./Database.js";

const App = Express();
const port = 45030;

App.use( Express.json() );
App.use( CORS() );


//Create a new database
const d = new Database();
//Database.connect()
d.connect("lab11", "books");

//PUT ( App.put() )-> database.createOne() -> collection.insertOne
App.put("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;

  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;

  const result = await d.createOne(ISBN, title, author, description);

  res.json({
    ISBN: ISBN,
    title: title,
    author: author,
    description:description
  });

});

//GET ( App.get() )-> database.readOne() -> collection.findOne()
App.get("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;

  const result = await d.readOne(ISBN);

  res.json(result)
});

App.post("/books/search", async (req, res) => {
  const title = req.query.title;
  const author = req.query.author;

  const result = await d.readMany(title, author);
  
  res.json(result);
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

//DELETE ( App.delete() )-> database.deleteOne() -> collection.deleteOne()
App.delete("/books/:ISBN", async (req, res) => {
  //Request Parameter
  const ISBN = req.params.ISBN;

  //Talk to database code
  const result = await d.deleteOne(ISBN);

  res.json(result);

});


App.listen(port, () => {
  console.log("Server is running!");
});