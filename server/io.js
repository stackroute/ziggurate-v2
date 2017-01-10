module.exports = function(http) {
  const io = require('socket.io')(http);
  io.on('connection', (socket) => {
    console.log('A User connected');
    socket.on('disconnect', () => {
      console.log('A User disconnected');
    });

    require('./io/deploy')(socket);

  });
}
