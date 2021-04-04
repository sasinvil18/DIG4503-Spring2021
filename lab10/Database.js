import MongoClient from "mongodb";

const URL = "mongodb+srv://SarahSinvil:XG33WSKyDgfTxRyp@cluster0.yuzwq.mongodb.net"

class Database {
  constructor(){
    // Setup a default value for connection
    this.connection = null;
    // Setup a default value for database
    this.database = null;
    // Setup a default value for collection
    this.collection = null;

    this.person = null;
  }
  async connect() {
    this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
    this.datatbase = connection.db("lab10");
    this.collection = datatbase.collection("people");
  }
  async createOne(fName, lName, favColor){
    if(this.collection != null) {
      return await this.collection.insertOne(
        {
          "firstName": fName, 
          "lastName": lName, 
          "favoriteColor": favColor
        }
      );
    }
  }
  async readOne(findPerson){
    //let result = {person: "not found!"};
    let result = await this.collection.findOne({"firstName": findPerson});

    if(result == null){
      result = {person: "not found!"};
    }

    return result;
  }
  close() {
    if(this.collection != null) {
      this.connection.close();
    }
  }

}

export default Database;