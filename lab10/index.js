import Express from "express";
import Database from "./Database.js";

const App = Express();
const port = 45030;

const d = new Database();

App.use(Express.json());

App.put("/people/create", (req, res) => {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const favColor = req.body.favoriteColor;

  d.createOne(fName, lName, favColor);

  res.json(
    {
      firstName: fName,
      lastName: lName,
      favoriteColor: favColor
    }
  );

  d.close();
});

App.get("/people/:person", (req, res) => {

  let person = req.params.person;
  
  let result = d.readOne(person);

  res.json(result);
});

/*let person = "Test";
let result = d.readOne(person);

  console.log(result);*/


App.listen(port, () => {
  console.log("Server is running!")
})