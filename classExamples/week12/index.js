import Express from 'express';
import Database from "./Database.js"

const App = Express();
const port = 45030;

const d = new Database();

//Create
App.put("/people/:person", (req, res) => {

    // Set a default (search failed) result
    let person = req.params.person;

    d.createOne(person);

    res.json(result);
});

//Read
App.get("/people/:person", (req, res) => {

  // Set a default (search failed) result
  let person = req.params.person;

  let result = d.readOne(person);
  
  res.json(result);
});

//Delete
App.delete("/people/:person", (req, res) => {

  // Set a default (search failed) result
  let person = req.params.person;

  d.deleteMany(person);
  
  res.json(result);
});

// Listen on a port.
App.listen(port, () => {
    console.log("Server running!");
});