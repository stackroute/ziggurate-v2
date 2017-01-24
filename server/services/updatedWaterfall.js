
const async = require('async');

const clone = require('./clone');
const compose = require('./compose');
const createDir = require('./createDir');
const checkOut = require('./checkOut');
const findCompose = require('./findCompose');
const ymlTojson =require('./ymlTojson');
const jsonToyml =require('./jsonToyml');
const findModule=require('./findModule');
const gitModule=require('./gitModule');
const gitInitilize=require('./gitInitilize');
const gitUpdate=require('./gitUpdate');
const dockerBuild=require('./dockerBuild');
const dockerTag=require('./dockerTag');
const dockerPush=require('./dockerPush');
const dockerBundle=require('./dockerBundle');
const dockerDeploy=require('./dockerDeploy');

const directory = '/home/ebin/Documents/updatedServices';
const repository = 'stackroute/quizztack';
//const repository='akanksha152/tasker';
const repoName = repository.split('/')[1];
const repoPath=directory.concat('/'+Math.floor(Math.random()*18371));
const branchName = 'dev-wave11';
//const branchName = 'docker-integration';
var path,pathCompose;

 async.waterfall([
    //  MKDIR
    createDir.bind(null,repoPath),
    // Clone a repository
    clone.bind(null, repoPath, repository),
    // TODO: Checkout required branch
    checkOut.bind(null,repoPath,branchName),
    // Find gitmodule
    gitModule.bind(null,repoPath),
    // TODO: find docker-compose.yml file with command "find . -name docker-compose.yml"
    findCompose.bind(null, repoPath),
    ymlTojson.bind(null),
    jsonToyml.bind(null),
    dockerBuild.bind(null, repoPath),
    findCompose.bind(null, repoPath),
    ymlTojson.bind(null),
    replaceVersion.bind(null),
    jsonToyml.bind(null, repoPath),
    dockerDeploy.bind(null, repoPath, stackName)

   // compose.bind(null,repoPath)
    
  
  ], (err, results) => {
    if(err) { console.error('Deploy Failed with error', err); return; }
    console.log('deploy successfully');
  });
