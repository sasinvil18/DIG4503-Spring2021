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
    try{
      this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
      this.datatbase = this.connection.db("lab10");
      this.collection = this.datatbase.collection("people");
    }
    catch(error){
      console.log("Error: " + error);
    }
  }

  async createOne(){
    
  }

  async readOne(){
    
  }

  async readMany(){
    
  }

  async updateOne(){
    
  }

  async deleteOne(){
    
  }

  close() {
    if(this.collection != null) {
      this.connection.close();
    }
  }

}

export default Database;