const mongoose=require('mongoose');
const schema=mongoose.Schema;

const dynamicScaleingConfig=new schema
	({
		appName:{type:String},
		serviceName: {type:String},
		queueName:{type:String},
		minThreshold:{type:Number},
		maxthreshold:{type:Number},
		minInstances:{type:Number}
	})
module.exports=mongoose.model('dynamicScaleingConfig',dynamicScaleingConfig);
