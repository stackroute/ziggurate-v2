var dockerCompose=require('./compose');

const directory = '/home/akanksha/Documents/reactProject/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
var test=dockerCompose(directory.concat('/'+repoName), (err, dir) => {
    if(err){console.log(err)}

    else{console.log(dir);}
});
