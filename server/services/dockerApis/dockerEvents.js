const Docker = require('dockerode');
const docker = new Docker({socketPath: '/var/run/docker.sock'});
const updateServiceState = require('./updateServiceState');
const client = require('./redisClient');

docker.getEvents({filters: {type: ['container'], event: ['start', 'destroy']}}, (err, res) => {
	res.on('data', (eventString) => {
		let eventObject = JSON.parse(eventString.toString());
		let serviceName = eventObject.Actor.Attributes['com.docker.swarm.service.name'];
		if(eventObject.status === 'destroy' && serviceName) {
			updateServiceState(serviceName, -1, (err) => {
				if(err) {process.exit(0); return ;}
			});
		}
		else if(eventObject.status === 'start' && serviceName) {
			updateServiceState(serviceName, 1, (err) => {
				if(err) {process.exit(0); return ;}
			});
		}
	});
});
