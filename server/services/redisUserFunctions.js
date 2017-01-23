 const redis =require('redis');
 const redisPort = process.env.REDIS_PORT || 6379;
 const redisHost = process.env.REDIS_HOST || '172.23.238.251';
 const client=redis.createClient(redisPort, redisHost);

 var redisCompleteStore=function(value,callback)
 {
 	  client.on('error',function(error){
 	  	console.log("Error in Connection");
 	  });	

   	  client.lpush('ziggurateCompleteLog',value,function(err,reply){console.log(reply);});
   	  client.blpop('ziggurateCompleteLog',2,function(err,reply){
   	  	if(err){ throw err}
   	  	console.log(reply);	
   	  }); 
   	  //client.lrange('ziggurateCompleteLog',0,0,function(err,reply){console.log(reply);});


 }
 module.exports = redisCompleteStore;