const redis =require('redis');
const redisPort = process.env.REDIS_PORT || 6379;
const redisHost = process.env.REDIS_HOST || 'localhost';

function publishIPToRedis (domainName, port, callback) {
	const client= redis.createClient(redisPort, redisHost);
	let obj = {
		domainName: domainName,
		publishingIP: 'http://127.0.0.1:'+ port
	}
	client.lpush('reverseProxyWorker', JSON.stringify(obj), (err, res) => {
		if(err) {process.exit(0); return;}
		client.quit();
		callback(null);
	});
}

module.exports = publishIPToRedis;
