const {MongoClient}=require('mongodb')

 const client=new MongoClient("mongodb://127.0.0.1:27017")



const connection=async()=>{
    try{
      await  client.connect()
      console.log("Connected to DB");
    }
    catch(err){
        console.log(err,"Error in Connecting Database");
    }
}

const databasename=client.db("handson2")
module.exports={connection,databasename}