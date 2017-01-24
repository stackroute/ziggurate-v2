const client = require('./redisClient').duplicate();
const async = require('async');

function registerServiceToRedis (servicesInfoArray, callback) {
	async.each(servicesInfoArray, (value, internalCallback) => {
		setHashMapToRedis(value.serviceName, value.replicas, internalCallback);
	}, callback(null));
}

function setHashMapToRedis (serviceName, replicas, internalCallback) {
	client.hmset("services:ziggV2", serviceName, replicas , (err, res) => {
		if(err) {internalCallback(err); return;}
		internalCallback(null);
	});
}

module.exports = registerServiceToRedis;
