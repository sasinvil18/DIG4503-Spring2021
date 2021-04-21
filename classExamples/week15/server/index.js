import Express from "express";
import CORS from "cors";

const App = Express();
const port = 45030;

App.use(CORS());
App.use(Express.json());

//PUT: "/parts/:sku" (Request Body)
App.put("/parts/:sku", (req, res) => {
  const sku = req.params.sku;
  const title = req.body.title;
  const description = req.body.description;
  //req.body

  //dont do this part in your code
  res.json({
    sku: sku,
    title: title,
    description: description
  });
})

//GET: "/parts/:sku"
App.get("/parts/:sku", (req, res) => {
  const sku = req.params.sku;
  res.json({sku: sku});
})

//PATCH: "/parts/:sku" (Request Body)
App.patch("/parts/:sku", (req, res) => {
  const sku = req.params.sku;
  const title = req.body.title;
  const description = req.body.description;
  //req.body
  res.json({ROUTE: "PATCH"});
})

//DELETE: "/parts/:sku"
App.delete("/parts/:sku", (req, res) => {
  const sku = req.params.sku;
  //req.body
  res.json({ROUTE: "DELETE"});
})

App.listen(port, () => {
  console.log("Server is running")
})