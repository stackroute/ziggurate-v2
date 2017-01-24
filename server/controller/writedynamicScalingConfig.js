const dynamicConfig=require('../dbModel/logSchema');
module.exports=function()
{

	const dynamicScalingConfig=new dynamicConfig();

          dynamicScalingConfig.appName=appName;
          dynamicScalingConfig.serviceName=serviceName;
          dynamicScalingConfig.queueName=queueName;
          dynamicScalingConfig.minThreshold=minThreshold;
          dynamicScalingConfig.maxthreshold=maxthreshold;
          dynamicScalingConfig.minInstances=minInstances;
          }
          console.log("dynamicScalingConfig :"+dynamicScalingConfig);
          
          dynamicScalingConfig.save((err)=>
          {
            if(!err)
            {
              console.log("Saved dynamic scale config");
            }
            else
            {
              console.log("dynamic scale config Saving Failed");
            }
          });

}