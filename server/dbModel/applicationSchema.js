const mongoose=require('mongoose');
const schema=mongoose.Schema;

const applicationSchema=new schema({
deploymentId:{type:String, required:true},
appName: {type:String, required:true},
domainName:{type:String},
status:{type:String},
services:[{
	name:{type:String},
	config:[{
		key:{type:String},
		value:{type:String}
	}]
}]

})
module.exports=mongoose.model('apps',applicationSchema);
