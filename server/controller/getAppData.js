const mongoModel=require('../dbModel/applicationSchema');
module.exports=function(req,res)
{
	const mongoModelList=new mongoModel();
	



mongoModel.find({},function(err,appSchema)

{
	console.log("getting Connection");

	if(err)throw error;
	if(appSchema)
	{
		console.log("getting"+appSchema);
		res.send(appSchema);
	}
	else
	{
		res.send("Doesn't exist");
	}


});

}
