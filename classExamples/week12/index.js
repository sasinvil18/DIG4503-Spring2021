import Express from 'express';
/*import Database from "./Database.js"*/

const App = Express();
const port = 45030;

//add this for the lab and it will give you access to req.body
App.use(Express.json());

//url parameters are written ?blank=blank
App.get("/:id", (req, res) => {
  res.json(
    {
      query: req.query
    }
  );
});
/*App.put("/:id", (req, res) => {
  res.json(
    {
      id: req.params.id,
      body: req.body
    } 
  );
});*/

App.listen(port);

//database incorporation
/*const d = new Database();

//Create
App.put("/people/:person", (req, res) => {

    let person = req.params.person;

    d.createOne(person);

    res.json(result);
});

//Read
App.get("/people/:person", (req, res) => {

  let person = req.params.person;

  let result = d.readOne(person);
  
  res.json(result);
});

//Delete
App.delete("/people/:person", (req, res) => {

  let person = req.params.person;

  d.deleteMany(person);
  
  res.json(person);
});

// Listen on a port.
App.listen(port, () => {
    console.log("Server running!");
});
*/