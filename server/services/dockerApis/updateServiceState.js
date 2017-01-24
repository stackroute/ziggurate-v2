const client = require('./redisClient');
const async = require('async');

function updateServiceState(serviceName, replicaCountToIncrement, callback) {
		setServiceNameIfNotExists(serviceName, (err, response) => {
			if(err) {callback(err); return;}
			// Check whether service Exists or not 
			//If the service Not Exists
			else if(response === 1) {
				//Publish Two events 'One to create new Service and one to create New Container'
				async.series([
					publishToEventsChannel.bind(null, 'services', 1),
					publishToEventsChannel.bind(null, 'containers', 1)
					], (err,results) => {
						if(err) {callback(err); return;}
						callback(null);
				});
			}
			// IF The service Exists in redis
			else {
				setReplicaCountIfServiceExists(serviceName, replicaCountToIncrement, callback);
			}
		});		
}

// set the hashkey if that service doen't exists in Redis
function setServiceNameIfNotExists(serviceName, callback) {
	client.hsetnx('services:ziggV2', serviceName, 1, (err, res) => {
		if(err) {callback(err); return ;}
		callback(null, res);
	});
}

// set the no. of replicas of particular service 
function setReplicaCountIfServiceExists(serviceName, replicaCountToIncrement, callback) {
	client.hincrby('services:ziggV2', serviceName, replicaCountToIncrement, (err, res) => {
		if(err) {callback(err); return;}
		if(res === 0 ) {
			deleteServiceFromRedis(serviceName, callback);
		}
		else {
			publishToEventsChannel('containers', replicaCountToIncrement, callback);
		}
	});
}

// delete the service from redis if replicas reaches zero
function deleteServiceFromRedis(serviceName, callback) {
	client.hdel('services:ziggV2', serviceName, (err, res) => {
		if(err) {callback(err); return;}
		async.series([
			publishToEventsChannel.bind(null, 'services', -1),
			publishToEventsChannel.bind(null, 'containers', -1)
			], (err, results) => {
			if(err) {callback(err); return;}
			callback(null);
		});
	});
}

// Publish the events to the redis
function publishToEventsChannel(eventType, countToIncrement, callback) {
	let obj = {
		eventType: eventType,
		countToIncrement: countToIncrement
	}
	client.publish('events', JSON.stringify(obj), (err, res)=> {
		if(err) {callback(err); return;}
		callback(null);
	});
}

module.exports = updateServiceState;
