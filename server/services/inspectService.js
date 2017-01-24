const Docker = require('dockerode');
const docker = new Docker({socketPath: '/var/run/docker.sock'});

function inspectService(stackName, serviceNameToExpose, callback) {
	let serviceName = stackName + '_' + serviceNameToExpose;
	const serviceInfo = docker.getService(serviceName);
	console.log("servicename :"+serviceName);
	serviceInfo.inspect((err, res) => {
		const port = JSON.stringify(res.Endpoint.Ports[0].PublishedPort);
		callback(null, port);
	});
}

module.exports = inspectService;