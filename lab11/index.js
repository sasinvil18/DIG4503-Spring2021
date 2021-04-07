import Express from "express";
import CORS from "cors";
import Database from "./Database.js";

const App = Express();
const port = 45030;

App.use(Express());
//use CORS
App.use(CORS());

App.put("/books/:ISBN", (req, res) => {
  const ISBN = req.params.ISBN;
});

App.get("/books/:ISBN", (req, res) => {

});

App.post("/books/search", (req, res) => {

});

App.patch("/books/:ISBN", (req, res) => {

});

App.delete("/books/:ISBN", (req, res) => {

});

App.listen(port, () => {
  console.log("Server is running!");
})