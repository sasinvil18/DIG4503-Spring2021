import Express from "express";

//use req query for post is req.params for the others in lab11

const App = Express();
const port = 45030;

App.use(Express.json())

App.put("/teams/:team", (req, res) => {
  res.json({
    body: req.body,
    requestParameters: req.params.team
  });
});

App.get("/teams/:team", (req, res) => {
  
});

//localhost:45030/teams/search?title=Dan&author=random
//this is the an example of URL query parameters
App.post("/teams/search", (req, res) => {
  res.json({
    URLParameters: req.query
  })
});

App.patch("/teams/:team", (req, res) => {
  res.json({
    body: req.body,
    requestParameters: req.params.team
  });
});

App.delete("/teams/:team", (req, res) => {
  
});

App.listen(port);