const async = require('async');
const path = require('path');

const clone = require('./services/clone');
const compose = require('./services/compose');
const createDir = require('./services/createDir');
const checkOut = require('./services/checkOut');
const findCompose = require('./services/findCompose');
const ymlTojson =require('./services/ymlTojson');
const jsonToyml =require('./services/jsonToyml');
const gitModule=require('./services/gitModule');
const gitInitilize=require('./services/gitInitilize');
const gitUpdate=require('./services/gitUpdate');
const dockerBuild=require('./services/dockerBuild');
const dockerTag=require('./services/dockerTag');
const dockerPush=require('./services/dockerPush');
const dockerBundle=require('./services/dockerBundle');
const dockerDeploy=require('./services/dockerDeploy');

function cloneRepo(repoName,branch,socket,repoPath,callback)
{
	async.waterfall([
    //   to MKDIR
    createDir.bind(null,repoPath),
    //  Clone a repository
    clone.bind(null, repoPath, repoName),
    //  Checkout required branch
    checkOut.bind(null,repoPath,branch),
    //find gitmodule 
    gitModule.bind(null,repoPath),
    //  find docker-compose.yml file with command "find . -name docker-compose.yml"
    findCompose.bind(null, repoPath),
    // Convert YML to JSON
    ymlTojson.bind(null)  
  
  ], function(err, results) {
    console.log(JSON.stringify(results));
    socket.emit
    ('services',results);
  });

}

function configService(ServiceConfig,socket,repoPath,callback)
{
	async.waterfall([
	//Connvert JSON to YML
    jsonToyml.bind(null,ServiceConfig,repoPath),
    dockerBuild.bind(null,repoPath),
    dockerTag.bind(null,repoPath),
    dockerPush.bind(null),
    dockerBundle.bind(null,repoPath),
    dockerDeploy.bind(null,repoPath)
    
  
  ], function(err, results) {
    //if(err) { console.error('Deploy Failed with error', err); return; }
    // process.on('message', function(data){console.log(data)});
    console.log(results);
    socket.emit
    ('appCreates',results);
  });

}


module.exports = function(http) {
  const io = require('socket.io')(http);
  io.on('connection', (socket) => {
    const repoPath=path.join('tmp/repositories').concat('/'+Math.floor(Math.random()*18371));
    console.log('A User connected');
    socket.on('clone',(data)=>{
      cloneRepo(data.repository,data.branch,socket,repoPath,(err,data)=>{data});
  	});
  	socket.on('convert',(service)=>{
      console.log("got the connection"+service.valueOfService)
      configService(service.valueOfService,socket,repoPath,(err,service)=>{service});
  	});
    socket.on('disconnect', () => {
      console.log('A User disconnected');
    });

    require('./io/deploy')(socket);

  });
}
