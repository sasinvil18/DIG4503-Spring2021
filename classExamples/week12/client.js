import Axios from "axios";

//data any when hovering over put because that is the rules while insomia would allow it to be get even though its against the rules
//can work with request body with put, patch, and post NOT get
Axios.put("http://localhost:45030/sas", {
  name: "Sarah",
  thing: 4
})
.then(response => {
  console.log(response.data);
});

Axios.put("/:id", (req, res) => {
  req.json(
    {
      body: req.body
    }
  );
});