import Express from "express";

//this just creates the Express server
const App = Express();

//multiple servers cant listen on the same port
//huge apt complex, we need to knwo which one to go to
const port = 9000;

const objectExample = {
  firstName: "Sarah"
}

//setting up the route
//needs to know path and what to do with it
//for every request, there has to be a response
//this is passed through the function and then use the response.send() method tp send the response
App.get("/", function(request, response){
  console.log("Got a request!");
  //response.send("Hi!");
  response.json(objectExample);
});


//can use an arrow function
//listen happens last ALWAYS
App.listen(port, function(){
  console.log("Server is running!");
});