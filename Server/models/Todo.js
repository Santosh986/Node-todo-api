var mongoose=require('mongoose');

var Todo= mongoose.model('Todo',{
  text:{
     type:String,
    reuire:true,
    trim:true,
    minlength:1

  },
  Completed:
  {
    type:Boolean,
    default:false
  },
  compltedAt:{
    type:Number,
    default:null
  }
}) ;

module.exports={Todo};
