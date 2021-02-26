import Express from "express";

const App = Express();
const port = 45000;

const cat = {
  color: "white",
  name: "Fifi",
  legs: 4
};

//req is request, res is response
App.get("/", function(req, res){
  //res.send("Hi");
  //use .json to send back a JS notation (object)
  res.json(cat);
});

App.listen(port, function(){
  console.log("Server is running!")
});

//npm install nodemon
//watches all the files and watches for changes
// added "server": "nodemon index.js" to script in section of package.json

//origin (http) - protocol, server, port 
//not a route

//CORS - cross-origin resource sharing
//you cant talk across ports unless both the server and client agree to it

//Access-Control-Allow-Origin: *
//allows to talk across servers/ports