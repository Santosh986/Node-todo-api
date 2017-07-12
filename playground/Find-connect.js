// const MongoClient = require ('mongodb').MongoClient;

const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err)
{
  return console.log('unable to connect the mongo db server');
}
console.log('Connect to Mongodb server');
db.collection('user').find({}).toArray().then((docs)=>{
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
console.log('unable To find The data',err);
});


});
