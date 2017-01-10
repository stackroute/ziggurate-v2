var status;
var gitRemove=function(repoPath,callback) {
        const spawn=require('child_process').spawn;
        //ls -lh /usr
        //const repository = 'akanksha152/tasker';
        //const repoName = repository.split('/')[1];
        const rmDir=spawn('mkdir', [ repoPath]);
        console.log(repoPath);
        rmDir.stderr.on('data', (data)=> {
             status=`${data}`;
             console.log(status);
             
    
        });

        rmDir.stdout.on('data', (data)=> {
            status=`${data}`;
            console.log(status);

        
        });
        
        rmDir.on('close', (code) => {
            console.log(`Status:${code}`);
            if(code !== 0) { callback(new Error('Remove Directory exited with code', code)); return; }
            callback(null);
        });            
}
module.exports = gitRemove;