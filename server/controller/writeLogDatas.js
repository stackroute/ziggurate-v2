const mongoModel=require('../dbModel/logSchema');
module.exports=function(deploymentId,code,status,results)
{

	const deployResults=new mongoModel();

          console.log("idd"+deploymentId);
          deployResults.deployementId=deploymentId;
          if(code==0)
          {
          deployResults.result='Success';
          deployResults.status=status;
          }
          else
          {
          deployResults.result='Fail';
          deployResults.status='Failed to to exicute with '+code;
          }
          console.log(status);
          
          deployResults.code=code;
          deployResults.save((err)=>
          {
            if(!err)
            {
              console.log("Saved");
            }
            else
            {
              console.log("Saving Failed");
            }
          });

}