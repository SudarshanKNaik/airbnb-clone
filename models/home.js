
    const {objectId} = require('mongodb');
    const mongoose= require('mongoose');

    const houseSchema= new mongoose.Schema({
      houseName:{type:String,required:true},
      price:{type:Number,required:true},
      location:{type:String,required:true},
      rating:{type:Number,required:true},
      photoUrl:{type:String},
      description:{type:String},
    });
    module.exports=mongoose.model('Home',houseSchema);

