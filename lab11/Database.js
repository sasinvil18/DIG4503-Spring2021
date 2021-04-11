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

  //Will show up in database but when searched, the data for this document comes up null even though all of the fields are listed in the database
  async createOne(ISBN, title, author, description){
    if(this.collection != null) {
      const createResult = await this.collection.insertOne({
        IBSN: ISBN,
        title: title,
        author: author,
        description: description
      });

      return createResult;

    } 
  }

  //Working
  async readOne(ISBN){
    if(this.collection != null){
      const result = null;
      const readResult = await this.collection.findOne({
        ISBN: ISBN
      });
      if(result != readResult){
        return readResult;
      } else {
        return {"book": "not found"};
      }
    }
  }

  async readMany(title, author){
    if(this.collection != null){
      const result = await this.collection.find({"title": title}, {"author": author }).toArray({"books":[]});

      return (result);
    }
    else{
      return {books: ["not found"]};
    }
  }

  async updateOne(ISBN, title, author, description){
    if(this.collection != null){
      const result = await this.collection.updateOne({"ISBN": ISBN}, 
      {$set: {"title": title}},
      {$set: {"author": author}},
      {$set: {"description": description}});

      //not correct for lab
      return result;
    }
    else{
      //dont use null
      return null
    }
  }

  //Haven't tested yet because I don't want to delete someon eles's document that they created
  async deleteOne(ISBN){
    if(this.collection != null){
      const result = await this.collection.deleteOne({"ISBN": ISBN});
      return {"deleted": result.deletedCount};
    }
    else{
      return {"deleted": 0};
    }
  }

}

export default Database;