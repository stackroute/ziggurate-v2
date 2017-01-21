const mongoModel=require('../dbModel/logSchema');
module.exports=function(req,res)
{
	const mongoModelList=new mongoModel();
	


mongoModel.find({deployementId:req.params.getid},function(err,logSchema)
{
	console.log("getting Connection");

	if(err)throw error;
	if(logSchema)
	{
		console.log("getting"+logSchema);
		res.send(logSchema);
	}
	else
	{
		res.send("Doesn't exist");
	}


});

}
