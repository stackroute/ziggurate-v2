const async = require('async');
const path = require('path');

const clone = require('./services/clone');
const compose = require('./services/compose');
const createDir = require('./services/createDir');
const checkOut = require('./services/checkOut');
const findCompose = require('./services/findCompose');
const ymlTojson =require('./services/ymlTojson');
const jsonToyml =require('./services/jsonToyml');

const repoPath=path.join('tmp/repositories').concat('/'+Math.floor(Math.random()*18371));

function cloneRepo(repoName,branch,socket,callback)
{
	async.waterfall([
    //   to MKDIR
    createDir.bind(null,repoPath),
    //  Clone a repository
    clone.bind(null, repoPath, repoName),
    //  Checkout required branch
    checkOut.bind(null,repoPath,branch),
    //  find docker-compose.yml file with command "find . -name docker-compose.yml"
    findCompose.bind(null, repoPath),
    // Convert YML to JSON
    ymlTojson.bind(null)
    //jsonToyml.bind(null)
   // compose.bind(null,repoPath)
    
  
  ], function(err, results) {
    //if(err) { console.error('Deploy Failed with error', err); return; }
    console.log(JSON.stringify(results));
    socket.emit
    ('services',results);
  });

}


module.exports = function(http) {
  const io = require('socket.io')(http);
  io.on('connection', (socket) => {
    console.log('A User connected');
    socket.on('clone',(data)=>{
      cloneRepo(data.repository,data.branch,socket,(err,data)=>{console.log("Completed"+data.nativeObject)});
  	});
    socket.on('disconnect', () => {
      console.log('A User disconnected');
    });

    require('./io/deploy')(socket);

  });
}
