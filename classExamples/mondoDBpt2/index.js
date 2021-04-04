import MongoClient from 'mongodb';

const URL = "mongodb+srv://SarahSinvil:XG33WSKyDgfTxRyp@cluster0.yuzwq.mongodb.net";

async function connect() {
  try{
    let connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
    let datatbase = connection.db("lab10");
    let collection = datatbase.collection("people");

    let person = "Test";
    let results = await collection.findOne({firstName: person});
    //for .find, .toArray() must be added to the end

    console.log(results);

    let person2 = "Test";
    let lName = "Test2";
    let favColor = "Test3";
    let results2 = await collection.insertOne({firstName: person2, lastName: lName, favoriteColor: favColor});

    console.log(results2)
    /*let result = await collection.findOne({year: {$gt: 2010}});
    console.log(result);*/

    //used to check why fullplot wasnt working
    /*results.forEach(document => {
      console.log(document.fullplot);
    });*/

    let plotArray = results.filter(document => document.plot.includes("writers"))

    //console.log(plotArray)

    connection.close();
  }
    catch(error) {
      console.log("Error: " + error)
  }  
}

connect();


//*NOTES

//async needs to be used with a function and await needs to be used with async

//these only work with promises

//async is put before the function keyword

//await used for waiting for a promise to run

//asynchronously - out of time