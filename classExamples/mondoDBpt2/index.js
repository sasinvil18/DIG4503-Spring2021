import MongoClient from 'mongodb';

const URL = "mongodb+srv://SarahSinvil:XG33WSKyDgfTxRyp@cluster0.yuzwq.mongodb.net";

async function connect() {
  try{
    let connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
    let datatbase = connection.db("sample_mflix");
    let collection = datatbase.collection("movies");

    let results = await collection.find({year: {$gt: 2014}, rated: "R", genres: "Drama"}).toArray();
    console.log(results)
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