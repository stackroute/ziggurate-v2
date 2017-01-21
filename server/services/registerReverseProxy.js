const proxy = require('redbird')({
    port: 80
  });

const redis =require('redis');
const redisPort = process.env.REDIS_PORT || 6379;
const redisHost = process.env.REDIS_HOST || '172.23.238.251';
const client= redis.createClient(redisPort, redisHost);

function registerReverseProxy(callback)
{
  client.on('error',function(error) {
  	console.log("Error in Connection");
  });
  client.brpop('reverseProxyWorker',0,function(err, reply) {
  	if(err){ throw err return ;}
    else
    {
      let domainName = JSON.parse(reply[1].domainName);
      let publishingIP = JSON.parse(reply[1].publishingIP);
      registerRedBirdProxy(domainName, publishingIP, callback);
    }
}

function registerRedBirdProxy(domainName, publishingIP, callback) {
  proxy.register(domainName, publishingIP);
  callback(null);
};
module.exports = registerReverseProxy;
