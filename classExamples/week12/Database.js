import MongoClient from "mongodb";

const URL = "mongodb+srv://SarahSinvil:XG33WSKyDgfTxRyp@cluster0.yuzwq.mongodb.net";

class Database {
  constructor(){
    // Setup a default value for connection
    this.connection = null;
    // Setup a default value for database
    this.database = null;
    // Setup a default value for collection
    this.collection = null;
  }

  //cant add async to a constructor
  async connect() {
    // Wait for the connect() method to finish.
    this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true });
    // Select a database.
    this.database = this.connection.db("<Database>");
    // Select a collection.
    this.collection = this.database.collection("<Collection>");
}


  async createOne(person) {
    // Test if collection is null or not.
    // If it is not null, it was overwritten internally and can be used.
    if(this.collection != null) {
      // Wait for the insertOne() method to finish.
      return await this.collection.insertOne(person);
    }
  
  }

  readOne(person) {

  }

  deleteMany(person) {

  }

  close() {
    if(this.collection != null) {
      this.connection.close();
    }
  }
}
//you can put the export default in front of the class if you want to
export default Database;