import Express from "express";

const App = Express();
const port = 45030;

const arrayExample = [
  "hello",
  "hey",
  "hi",
  "howdy"
]

//: makes it a request parameter
App.get("/:id", (req, res) => {
  let result = "Not found!";

  arrayExample.forEach((value) => {
    if(req.params.id = value){
      result = value
    }
  });

  res.json(result);
});

App.listen(port, () => {
  console.log("Server is running!");
});

//use .push for the lab