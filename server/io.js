const async = require('async');
const path = require('path');

const dockerEvents = require('./services/dockerApis/dockerEvents');
const setInitialState = require('./services/dockerApis/setInitialState');
const clone = require('./services/clone');
const compose = require('./services/compose');
const createDir = require('./services/createDir');
const checkOut = require('./services/checkOut');
const findCompose = require('./services/findCompose');
const ymlTojson =require('./services/ymlTojson');
const jsonToyml =require('./services/jsonToyml');
const deployResults=require('./controller/writeLogDatas');
const appDetails=require('./controller/writeAppData');

var deploymentId;
var serviceDetails;
var status;

//const mongoModel=require('./dbModel/logSchema');
// const mongoose=require('mongoose');
// const dbConnection=mongoose.connect('mongodb://localhost:27017/ziggurateTemp');
const logSchema=require('./dbModel/logSchema');
const gitModule = require('./services/gitModule');
const gitInitilize = require('./services/gitInitilize');
const gitUpdate = require('./services/gitUpdate');
const dockerBuild = require('./services/dockerBuild');
const dockerTag = require('./services/dockerTag');
const dockerPush = require('./services/dockerPush');
const dockerBundle = require('./services/dockerBundle');
const dockerDeploy = require('./services/dockerDeploy');
const replaceVersion = require('./services/replaceVersion');
const inspectService = require('./services/inspectService');
const publishIPToRedis = require('./services/publishIPToRedis');
const registerReverseProxy = require('./services/registerReverseProxy')();

function cloneRepo(repoName, branch, DeploymentId, owner, socket, repoPath, callback)
{
  
	async.waterfall([
    //   to MKDIR
    createDir.bind(null,repoPath),
    //  Clone a repository
    clone.bind(null, repoPath, owner, repoName),
    //  Checkout required branch
    checkOut.bind(null,repoPath,branch),
    //find gitmodule 
    gitModule.bind(null,repoPath),
    //  find docker-compose.yml file with command "find . -name docker-compose.yml"
    findCompose.bind(null, repoPath),
    // Convert YML to JSON
    ymlTojson.bind(null)  
  
  ], function(err, results) {
    if(err) { console.error('Cloning Failed with error', err); return; }
    console.log(JSON.stringify(results));

    socket.emit
    ('services',results);
  });

}

function configService(ServiceConfig, socket, repoPath, callback)
{
  let stackName = repoPath.split('/')
  stackName=stackName[stackName.length - 1];
  console.log('COnfiguring services');
	async.waterfall([
	//Connvert JSON to YML
    jsonToyml.bind(null, repoPath, ServiceConfig),
    dockerBuild.bind(null, repoPath),
    findCompose.bind(null, repoPath),
    ymlTojson.bind(null),
    replaceVersion.bind(null),
    jsonToyml.bind(null, repoPath),
    dockerDeploy.bind(null, repoPath, stackName)

  ], function(err, code, status, results) {
    if(err) { console.error('Deploy Failed with error', err);deployResults(deploymentId,code,err,results); }
     process.on('message', function(data){console.log(data)});
    deployResults(deploymentId,code,status,results);

    //if(err) { console.error('Deploy Failed with error', err); return; }
    // process.on('message', function(data){console.log(data)});
    console.log(results);
    
    socket.emit
    ('appCreates',results);
  });

}

function domainConfig(domainName, appName, repoPath, serviceNameToExpose,socket)
{
  let stackName = repoPath.split('/');
  stackName=stackName[stackName.length - 1];
  console.log("domain name :"+domainName);
  console.log("app name : "+appName);
  console.log("repo path :"+repoPath);
  console.log("service name to expose :"+serviceNameToExpose);

  async.waterfall([
    inspectService.bind(null, stackName, serviceNameToExpose),
    publishIPToRedis.bind(null, domainName)
    ], (err, results) => {
      if(err){console.log("Failed to configure reverse proxy due to"+err); status="Not Running"; return;}
        status="Running"
        console.log('Reverse Proxy Done');
      appDetails(deploymentId, domainName, appName, status, serviceDetails);
        socket.emit('lastStep',results);
      });

}

module.exports = function(http) {
  const io = require('socket.io')(http);
  let serviceNameToExpose;  
  io.on('connection', (socket) => {
    const repoPath=path.join('tmp/repositories').concat('/'+Math.floor(Math.random()*18371));
    console.log('A User connected');
    socket.on('clone',(data)=>{
      deploymentId=data.DeploymentId;
      console.log("ownername : "+data.owner)
      cloneRepo(data.repository,data.branch, data.DeploymentId, data.owner, socket,repoPath,(err,data) => {data});
  	});
  	socket.on('convert',(service)=>{

      serviceDetails=service.valueOfService;
      console.log("got the connection"+service.valueOfService);
      serviceNameToExpose = service.serviceNameToExpose;
      configService(service.valueOfService,socket,repoPath,(err,service)=>{service});
  	});
    socket.on('disconnect', () => {
      console.log('A User disconnected');
    });
    socket.on('domainConfig',(dconf) => {
      
      domainConfig(dconf.domainName,dconf.appName, repoPath, serviceNameToExpose, socket);

      console.log('configing domain');
    });
    require('./io/deploy')(socket);
  });
}
