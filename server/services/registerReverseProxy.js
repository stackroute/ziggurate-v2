const proxy = require('redbird')({
  port: 80
});
const redis =require('redis');
const redisPort = process.env.REDIS_PORT || 6379;
const redisHost = process.env.REDIS_HOST || 'localhost';
const client= redis.createClient(redisPort, redisHost);

function registerReverseProxy() {
  client.on('error',function(error) {
  	console.log("Error in Connection");
  });

  client.brpop('reverseProxyWorker',0,function(err, reply) {
  	if(err){ throw err; return ;}
    let domainName = JSON.parse(reply[1]).domainName;
    let publishingIP = JSON.parse(reply[1]).publishingIP;
    registerRedBirdProxy(domainName, publishingIP);
  });
}

function registerRedBirdProxy(domainName, publishingIP) {
  proxy.register(domainName, publishingIP);
  console.log("publish ip :"+publishingIP);
  setTimeout(registerReverseProxy);
}

module.exports = registerReverseProxy;
