var redis =require('redis');
const redisPort = process.env.REDIS_PORT || 6379;
const redisHost = process.env.REDIS_HOST || '172.23.238.251';
var client=redis.createClient(redisPort, redisHost);
function writeNameId (imageName, domainName, callback)
{
      client.on('error', function(error) {
          console.log("Error in Connection");
      });
      let obj = {domainName:domainName, imageName:imageName};
        client.lpush('reverseProxyWorker', JSON.stringify(obj), function(err, reply) {
        	console.log(reply);
        });
}
module.exports = writeNameId;