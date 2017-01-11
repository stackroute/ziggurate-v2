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

function cloneRepo(repoName,branch)
{
	async.waterfall([
    // TODO: Change RMDIR to MKDIR
    createDir.bind(null,repoPath),
    // TODO: Clone a repository
    clone.bind(null, repoPath, repoName),
    // TODO: Checkout required branch
    checkOut.bind(null,repoPath,branch),
    // TODO: find docker-compose.yml file with command "find . -name docker-compose.yml"
    findCompose.bind(null, repoPath),
    ymlTojson.bind(null)
    //jsonToyml.bind(null)
   // compose.bind(null,repoPath)
    
  
  ], (err, results) => {
    if(err) { console.error('Deploy Failed with error', err); return; }
    console.log('converted successfully', + results);
  });

}


module.exports = function(http) {
  const io = require('socket.io')(http);
  io.on('connection', (socket) => {
    console.log('A User connected');
    socket.on('clone',(data)=>{
      cloneRepo(data.repository,data.branch,function(err,data){console.log("Completed"+data)});
  	});
    socket.on('disconnect', () => {
      console.log('A User disconnected');
    });

    require('./io/deploy')(socket);

  });
}
