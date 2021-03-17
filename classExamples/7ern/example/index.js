import Express from "express";
import CORS from "cors";

const App = Express();
const port = 45030;

//installed and imported CORS
//must do this before any other routes
//this tells the server to accept any origin which means we can talk across ports, paths, domains, etc.
//allows react code to talk to express code
App.use(CORS());

let arrayExample2 = [
  'Cortney',
  'Dewayne',
  'Trenton',
  'Pamala',
  'Ettie',
  'Errol',
  'Lorrie',
  'Hang',
  'Lauryn',
  'Caterina',
  'Isa',
  'Marcela'
];

App.get("/people/:person", (req,res) => {
  let person = req.params.person;
  let result = {person: "Not found!"};

  arrayExample2.forEach((value) => {
    if(value == person){
      result = {person: value};
    }
  });

  res.json(result)
});


App.put("/people/:person", (req,res) => {
  let person = req.params.person;
  let result = {person: person};

  arrayExample2.push(person);

  res.json(result)
});


App.patch("/people/:person", (req,res) => {
  let person = req.params.person;
  let result = {person: "Not found!"};

  res.json(result)
});


App.delete("/people/:person", (req,res) => {
  let person = req.params.person;
  let result = {person: "Not found!"};

  arrayExample2 = arrayExample2.filter((value) => {
    return value != person;
  });

  res.json(result)
});

App.listen(port, () => {
  console.log("Server is running!");
});






//create an array
let arrayEample = [1, 2, 3, 4];

//read each entry
arrayEample.forEach((value) => {
  console.log(value);
});

const searchValue = 3;

//update/delete
//kinda works like forEach() or map()
//returns a new array based off of the old array
//created a new array of all the entries not equal to 3
const newArray = arrayEample.filter((value) => {
  return value != 3;
});

console.log(newArray);