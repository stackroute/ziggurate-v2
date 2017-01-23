 var redis =require('redis');
 const redisPort = process.env.REDIS_PORT || 6379;
 const redisHost = process.env.REDIS_HOST || '172.23.238.251';
 var client=redis.createClient(redisPort, redisHost);

 var redisStore=function(value,callback)
 {
 	  client.on('error',function(error){
 	  	console.log("Error in Connection");
 	  });	

   	  client.lpush('ziggurateMainLog',value,function(err,reply){console.log(reply);});


 }
 module.exports = redisStore;