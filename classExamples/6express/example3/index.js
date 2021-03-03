import Express from "express"

//dynamic route or variable route
// adding : to the path which means that it is looking for a pattern
// /:id
//adding a colon makes it a patter
//parameter within a route
//to access the id you write req.params.id

const App = Express();
const port = 45030;

App.get("/pokemon/:name", (req, res) => {
  //req.params.name
  res.send(req.params.name)
});

App.listen(port, () => {
  console.log("Server is running!")
});

//RESTful Design
//REpresentational State Transfer

/*An application programming interface (API) is said to be "RESTful" if it follows these rules:
  -Client-server architecture
    -one to many architectuer
    -seperate development
  -Uniform interface
    -connected with dynamix routes
    -uniform resource location (URL)
    -uniform resource identifier (URI)
    -Request Parameter + URI
    -basically pathes and routes
  -Statelessness
    -the server itself should not have state
    -clients will have state (react code using classes and components)
  -Cacheable
  -Layered system
    -systems that sit on top of other systems and each replying to each  other
    -cross origin resource sharing (middleware)
    - cross origin resource sharing (CORS)
  -Code on demand (optional)*/