// const MongoClient = require ('mongodb').MongoClient;

const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err)
{
  return console.log('unable to connect the mongo db server');
}
console.log('Connect to Mongodb server');
// db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
//   console.log(result);
// });
// db.collection('user').deleteOne({location:'Mumbai'}).then((result)=>{
//   console.log(result);
// });

db.collection('user').findOneAndDelete({ _id : ObjectId("5965ee469bc6b44848d4f173"),}).then((result)=>{
  console.log(result);
  console.log(JSON.stringify(result,undefined,2));
});
});
