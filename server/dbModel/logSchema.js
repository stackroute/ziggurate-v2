const mongoose=require('mongoose');
const schema=mongoose.Schema;

const logSchema=new schema({
deployementId:{type:String, required:true},
result: {type:String, required:true},
status:{type:String},
code:{type:String}

})
module.exports=mongoose.model('logs',logSchema);
