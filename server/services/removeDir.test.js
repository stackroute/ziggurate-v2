var removeDir=require('./removeDir');

const directory = '/home/ebin/Documents/preProject/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
const repoPath=directory.concat('/'+repoName);

var test=removeDir(repoPath, (err, dir) => {
    if(err){console.log(err)}

    else{console.log(dir);}
});