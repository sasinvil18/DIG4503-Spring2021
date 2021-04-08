import MongoClient from "mongodb";

const URL = "mongodb+srv://SarahSinvil:XG33WSKyDgfTxRyp@cluster0.yuzwq.mongodb.net"

class Database {
  constructor(){
    this.connection = null;
    this.database = null;
    this.collection = null
  }

  async connect(database, collection){
    this.connection = await MongoClient.connect(URL);
    this.database = this.connection.db(database);
    this.collection = this.database.collection(collection);
  }

  close(){

  }

  createOne(){

  }

  readOne(){
    
  }

  async updateOne(id, title, rating, review){
    if(this.collection != null){
      const result = await this.collection.updateOne({"id": id}, {$set: {"title": title }});

      //not correct for lab
      return {"title": title};
    }
    else{
      //dont use null
      return null
    }
  }

  async deleteOne(id){
    if(this.collection != null){
      const result = await this.collection.deleteOne({"id": id});
      return {"deleted": result.deletedCount};
    }
    else{
      return {"deleted": 0};
    }
  }

}

export default Database;