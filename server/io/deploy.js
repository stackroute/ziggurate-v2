const getDeploymentId = require('../services/getDeploymentId');
const getStateFromRedis = require('../services/dockerApis/getStateFromRedis');
const client = require('../services/dockerApis/redisClient').duplicate();

module.exports = function(socket) {
  let obj ={};
  client.subscribe('events');
  client.on('message', (channel, message) => {
    let jsonMessage = JSON.parse(message);
    obj[jsonMessage.eventType] = obj[jsonMessage.eventType] + jsonMessage.countToIncrement;
    socket.emit('dashboard', obj);
  });

  socket.on('getDeploymentId', () => {
    const deploymentId = getDeploymentId();
    socket.emit('deploymentIdAssigned', deploymentId);
  });

  socket.on('getDashboardData', () => {
  	const stateFromRedis = getStateFromRedis((err, stateFromRedis) => {
      obj = stateFromRedis;
  		if(err) {process.exit(0); return; }
	  	socket.emit('dashboard', stateFromRedis);
  	});
  });
}