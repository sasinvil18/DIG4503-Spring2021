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

  async connect(database, collection) {
    try{
      this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
      this.datatbase = this.connection.db(database);
      this.collection = this.datatbase.collection(collection);
    }
    catch(error){
      console.log("Error: " + error);
    }
  }

  close(){
    if(this.collection != null) {
      this.connection.close();
    }
  }

  async createOne(pokemon){
    if(this.collection != null) {
      const createResult = await this.collection.insertOne({
        pokemon: pokemon,
        id: id
      });

      return createResult;

    } 
  }

  async readOne(pokemon){
    if(this.collection != null){
      const result = null;
      const readResult = await this.collection.findOne({
        pokemon: pokemon
      });
      if(result != readResult){
        return (
          readResult
        );
      } else {
        return {"pokemon": "not found"};
      }
    }
  }

  async updateOne(pokemon, id){
    if(this.collection != null){
      const result = await this.collection.updateOne({"pokemon": pokemon}, 
      {"$set": {pokemon: pokemon, id: id, description: description}});

      return result;
    }
  }

  async deleteOne(pokemon){
    if(this.collection != null){
      const result = null;
      const readResult = await this.collection.deleteOne({
        pokemon: pokemon
      });
      if(result != readResult){
        return (
          readResult
        );
      } else {
        return {"pokemon": "not found"};
      }
    }
  }
}

export default Database;