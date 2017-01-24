var status;
var redisStore =require('./redisFunctions');
var redisCompleteStore=require('./redisUserFunctions');

var gitclone=function(repoPath, ownerName, repoName, callback) {
        const spawn=require('child_process').spawn;
       

        //ls -lh /usr
        var res = repoName.split("/");
        res=res[res.length-1];

        var path=repoPath.replace(res,'');

        //const parent=spawn('pwd',{cwd: path});
        //const gitclone1=spawn('git', ['clone', 'https://github.com/'+repoName+'/.'],{cwd:path});
        console.log( "owner name :"+ownerName);

         const gitclone1=spawn('git', ['clone', 'https://github.com/'+ownerName+'/'+repoName, '.'],{cwd:path});
        gitclone1.stderr.on('data', (data)=> {
             status=`${data}`;
             redisCompleteStore(status);
             // console.log(status);

        });

        gitclone1.stdout.on('data', (data)=> {
            status="Sucess";
        
        });
        
        gitclone1.on('close', (code) => {
            console.log(`Status:${code}`);
            if(code !== 0) { 
                redisCompleteStore('Cloning exited with code '+code);
                callback(new Error('git clone exited with code', code)); return; 
            }
            redisStore('Cloning Part Done..');
            callback(null);
            
        });            
}
module.exports = gitclone;