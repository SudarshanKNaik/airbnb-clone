const mongodb= require('mongodb');
const MongoClient = mongodb.MongoClient;
const MONGO_URL = 'mongodb+srv://root:root@completecoding1.k2ocptn.mongodb.net/?retryWrites=true&w=majority&appName=CompleteCoding1';
let _db;
const mongoConnect=(callback)=>
{
 MongoClient.connect(MONGO_URL).then(client => {
  //console.log('Connected to MongoDB');
  callback();
  _db=client.db('airbnb');
  

 }).catch(err=>
 {
  console.error('Failed to connect to MongoDB', err);
 }
 )
};
const getDB=()=>
{
  if(!_db)
  {
    throw new Error('No database found!');

  }
  return _db;
}
  //const db = client.db('airbnb');
  // module.exports = {
  //   execute: (query, params) => {
  //     return db.collection('homes').find(query, params).toArray();
  //   },
  //   insert: (collection, data) => {
  //     return db.collection(collection).insertOne(data);
  //   },
  //   update: (collection, query, data) => {
  //     return db.collection(collection).updateOne(query, { $set: data });
  //   },
  //   delete: (collection, query) => {
  //     return db.collection(collection).deleteOne(query);
  //   }
  // };
  exports.mongoConnect =mongoConnect;
  exports.getDB = getDB;