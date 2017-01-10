var checkOut=require('./checkOut');

const directory = '/home/akanksha/Documents/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
const branchName = 'docker-integration';
const repoPath=directory.concat('/'+repoName);

var test=checkOut(repoPath,branchName,(err, dir) => {
    if(err){console.log(err)}

    else{console.log(dir);}
});
