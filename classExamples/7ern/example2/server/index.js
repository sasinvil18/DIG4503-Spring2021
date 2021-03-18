import Express from "express";
import CORS from "cors";

const App = Express()
const port = 45030;

//allow server to talk across ports
App.use(CORS());

let colors = [
  "red",
  "green",
  "purple",
  "maroon"
];

//Create
App.put("/colors/:color", (req, res) => {
  const color = req.params.color;
  colors.push(color);

  res.json({color: color})
});

//Read
//idk why get isn't working
App.get("/search/:color", (req, res) => {
  const color = req.params.color;
  const results = colors.filter(value => value.includes(color));

  res.json({color: results})
});

//Delete
App.delete("/colors/:color", (req, res) => {
  const color = req.params.color;
  colors = colors.filter(value => value != color);

  res.json({color: color})
});


App.listen(port, () => {
  console.log("Server is running!")
});