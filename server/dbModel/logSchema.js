const mongoose=require('mongoose');
const schema=mongoose.Schema;
const logSchema=new schema({

result: {type:String, required:true},
stderr:{type:String},
stdout:{type:String},
code:{type:String},
status:{type:String}
})