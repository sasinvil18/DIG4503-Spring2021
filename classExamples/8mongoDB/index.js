import MongoClient from "mongodb";

const URL = "mongodb+srv://SarahSinvil:XG33WSKyDgfTxRyp@cluster0.yuzwq.mongodb.net"

MongoClient.connect(URL, { useUnifoedTopology: true})
.then(connection => {
  let database = connection.db("sample_restaurants");
  let collection = database.collection("restaurants");

  //live version of the data
  //cursor has its own forEach() method
  let cursor = collection.find({"grades.grade": "A", cuisine: "Bakery"});

  cursor.forEach(document => {
    console.log(document.name);
  }, () => {
    //close the connection
    connection.close();
  });

})
.catch(error => {
  console.log("Error: " + error)
});