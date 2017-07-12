// const MongoClient = require ('mongodb').MongoClient;

const {MongoClient,ObjectId} = require('mongodb');

var obj=new ObjectId();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err)
{
  return console.log('unable to connect the mongo db server');
}

// db.collection('TodoApp').insertOne({
// text:'Something to do',
// completed:false
//
// },(err,result)=>{
//   if(err) {
//       return console.log('unable to insert todo',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });
// console.log('Connect to mongodb database');

// db.collection('user').insertOne({
//   name:'Santosh',
//   age:'20',
//   location:'Mumbai'
// },(err,result)=>{
// if(err){
//   return console.log('unable to Connect',err);
// }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });

db.close();
});
