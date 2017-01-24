const mongoose=require('mongoose');
const schema=mongoose.Schema;

const applicationSchema=new schema({
deploymentId:{type:String, required:true},
appName: {type:String, required:true},
domainName:{type:String},
status:{type:String},
services:[{
	name:{type:String,required:true},
	config:[{
		key:{type:String,required:true},
		value:{type:String,required:true}
	}]
}]

})
module.exports=mongoose.model('apps',applicationSchema);
