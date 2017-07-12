var mongoose=require('mongoose');
var user=mongoose.model('user',{
  Email:{
    type:String,
    require:true,
    trim:true,
    minlength:1,
  }
});


module.exports={user};
