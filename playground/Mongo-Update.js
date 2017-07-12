// const MongoClient = require ('mongodb').MongoClient;

const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err)
{
  return console.log('unable to connect the mongo db server');
}
console.log('Connect to Mongodb server');
db.collection('user').findOneAndUpdate({_id : ObjectId("5965ee8e9bc6b44848d4f19f")},{

  $set:{
    name:'Monty'
  },
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});
});
