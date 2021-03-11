//plural and singular - collection and resource
//collection/reseouce pattern

import Express from "express";

const App = Express();
const port = 45030;

const bookArray = [
  {
    name: "Harry Potter",
    year: 2001
  },
  {
    name: "The Magicians",
    year: 2009
  },
  {
    name: "Blood of Elves",
    year: 1994
  }
];

//you can always add to the path to make them more unique
//%20 equals a space in a path so Harry%20Potter
App.get("/books/name/:name", (req,res) => {
  
  let result = {name: "Not Found!"};

  bookArray.forEach((value) => {
    if(value.name == req.params.name){
        result = {name: value};
    }
  });

  res.json(result);

});

//this part needs to be fixed, idk why it's not working so try to play around with it
App.get("/books/year/:year", (req,res) => {
  
  let result = {year: "Not Found!"};
  let arrayResult = [];

  bookArray.forEach((value) => {
    if(value.year == req.params.year){
      arrayResult.push(value);
    }

  });

  if(arrayResult > 0){
    result = {year: arrayResult};
  }

  res.json(result);

});


/*const arrayExample = [
  "hello",
  "hey",
  "hi",
  "howdy"
]

//: makes it a request parameter
App.get("/:collection/:resource", (req, res) => {
  let result = {names: "Not found!"};

  let arrayResult = [];

  //Overwrite request parameter
  result = req.params.resource;

  arrayExample.forEach((value) => {
    /*if(value == req.params.resource){
      result = {names: value};
    }

    if(value.includes(req.params.resource)){
      arrayResult.push(value);
    }
    
  });

  if(arrayResult.length > 0){
    result = {names: arrayResult};
  }

  res.json(result);
});*/


App.listen(port, () => {
  console.log("Server is running!");
});
