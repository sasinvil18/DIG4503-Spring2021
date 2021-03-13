import Express from "express";

const App = Express();
const port = 45030;

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


App.get("/people/:person", (req, res) => {
  let result = {name: "not found"};

  names.forEach((value) => {
    if(value == req.params.person){
      result = {name: value};
    }
  });

  res.json(result);
});


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