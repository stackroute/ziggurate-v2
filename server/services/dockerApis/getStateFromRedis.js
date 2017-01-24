const client = require('./redisClient');
const async = require('async');

function getServices(callback) {
	client.hkeys('services:ziggV2', (err, services) => {
		if(err) {callback(err); return ;}
		callback(null, services.length);
	});
}

function getContainers(callback) {
	client.hvals('services:ziggV2', (err, values) => {
		if(err) {callback(err); return; }
		if(values.length !== 0 ) {
			let sum = values.reduce((a, b) => {
				return (parseInt(a) + parseInt(b));
			});
			callback(null, sum);			
		}
		else {
			callback(null, 0);
		}
	});
}

function getStateFromRedis(callback) {
	async.series([
		getServices.bind(null),
		getContainers.bind(null)
		], (err, results) => {
				callback(null, {
					services: results[0],
					containers: results[1]
				});
	});
}

module.exports = getStateFromRedis;