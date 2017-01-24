const async = require('async');
const getServicesFromDocker = require('./getServicesFromDocker');
const registerServiceToRedis = require('./registerServiceToRedis');

async.waterfall([
	getServicesFromDocker.bind(null),
	registerServiceToRedis.bind(null)
	], (err,results) => {
		console.log('Initial state set');
});