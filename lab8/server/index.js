import Express from "express";
import CORS from "cors";

const App = Express();
const port = 45030;

App.use(CORS());

const names = [
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

//Add new name
App.put("/people/:person", (req,res) => {
  let result = req.params.person;
  names.push(req.params.person);

  res.json({name: result})

});

//Responds with the exact name if it's found in the array
App.get("/people/:person", (req, res) => {
  let result = {name: "not found"};

  names.forEach((value) => {
    if(value == req.params.person){
      result = {name: value};
    }
  });

  res.json(result);
});

//Responds with all the names containing that specific character
App.get("/search/:name", (req, res) => {
  let result = {search: "not found"};
  let searchArray = [];

  names.forEach((value) => {
    if(value.includes(req.params.name)){
      searchArray.push(value);
    }
  });

  if(searchArray.length > 0){
    result = {serach: searchArray};
  }

  res.json(result);
});


App.listen(port, () => {
  console.log("Server is running!")
});