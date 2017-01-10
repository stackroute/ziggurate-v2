const async = require('async');

const clone = require('./clone');
const compose = require('./compose');
const removeDir = require('./removeDir');
const checkOut = require('./checkOut');
const findCompose = require('./findCompose');

const directory = '/home/akanksha/Documents/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
const repoPath=directory.concat('/'+Math.floor(Math.random()*18371));
const branchName = 'docker-integration';
var path,pathCompose;

async.waterfall([
       // TODO: Execute rmdir command
        removeDir.bind(null,repoPath),
       //TODO: Clone a repository
       clone.bind(null, repoPath, repository),
       // TODO: Checkout required branch
       checkOut.bind(null,repoPath,branchName),
       // TODO: find docker-compose.yml file with command "find . -name docker-compose.yml"
       function(callback)
       {
           pathCompose=findCompose(repoPath,(err, dir) => {
               if(err){console.log(err)}
                else{callback(null,dir);}
                        
       });
       }, (callback, pathCompose) => {
       //TODO: compose the docker-compose.yml file
       console.log("pathCompose", pathCompose);
       compose.bind(null, pathCompose());
       
             
   },
   
   
   ], (err, results) => {
       if(err) { console.error('Deploy Failed with error', err); return; }
       console.log('deploy successfully');
});