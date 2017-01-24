const Docker = require('dockerode');
const docker = new Docker({socketPath: '/var/run/docker.sock'});

function getServicesFromDocker (callback) {
	docker.listServices((err, res) => {
		if(err) { callback(err); process.exit(0); return ;}
		let services = res.map((value, index) => {
			let obj = {
				serviceName: value.Spec.Name,
				serviceId: value.ID,
				replicas: value.Spec.Mode.Replicated.Replicas
			}
		return obj;
		});
		callback(null, services);
	});
}

module.exports = getServicesFromDocker;
