const mongoModel=require('../dbModel/applicationSchema');
module.exports=function(deploymentId,domainName,appName,status,serviceDetails)
{

	/*const appDetails=new mongoModel();

          console.log("idd"+deploymentId);
          appDetails.deployementId=deploymentId;
          appDetails.appName=appName;
          appDetails.domainName=domainName;
          appDetails.status=status;
          console.log("ObjectGot"+serviceDetails);*/
          //let servicesEnv=serviceDetails.services.tasker.environment;
          

          // console.log("ServiceName "+serviceNames);
          // console.log("ServiceEnv"+servicesEnv);

          //TODO: Get List of Services
          const serviceNames = Object.keys(serviceDetails.services);
          var configArray=[];
          const services = serviceNames.map((serviceName) => {
            const service = serviceDetails.services[serviceName];
              if(Object.hasOwnProperty(service.environment)) 
              
              {

            const configKeys = Object.keys(service.environment);

            configArray = configKeys.map((key) => {
              return {
                key: key,
                value: service.environment[key]
              };
            });
          }
          else
          {
            configArray:[];
          }
            return {
              name: serviceName,
              config: configArray
            };
          });

          const appDetails=new mongoModel({
            deploymentId: deploymentId,
            appName: appName,
            domainName: domainName,
            status: status,
            services: services
          });

          console.log('Saving App Details:', JSON.stringify(appDetails));

          appDetails.save((err, savedApp) => {
            if(err) { console.log('Saving App Details Failed with error', err); return; }
            console.log('App Details Saved:', savedApp);
          });
         /*serviceNames.map((serviceName) => {

                         let dbValue='',dbKey='';
                         console.log(serviceName);
                         
                         appDetails.services.name=serviceName;
                         //console.log('serviceDetails.services.'+serviceName+'.environment');
                         let serviceEnv=Object.keys(serviceDetails.services[serviceName].environment);
                        
                          console.log(serviceEnv);
                           serviceEnv.map((data) => {
                          

                         let value=serviceDetails.services[serviceName].environment[data];
                         console.log("data"+data+" value"+value);
                        // dbValue=dbValue.concat('--'+value);
                         //dbKey=dbKey.concat('--'+data);
                         appDetails.services.config.key=data;
                         appDetails.services.config.value=value;
                         
                         

                        // appDetails.services.config.key=
                     });
                        // appDetails.services.confi'g.key=
                      
                });*/
            
                   

             

         
          

}