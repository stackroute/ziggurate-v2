var status;
var dockerDeploy=function(repoPath , stackName, callback) {
        const spawn=require('child_process').spawn;
        const path = require('path');
        //ls -lh /usr
        const dkrDeploy=spawn('docker', ['stack','deploy', '--compose-file', 'docker-compose.yml', stackName], {cwd:repoPath});

        dkrDeploy.stderr.on('data', (data)=> {
             status=`${data}`;
             console.log(`${data}`);
        });

        dkrDeploy.stdout.on('data', (data)=> {
            status=`${data}`;
            console.log(`${data}`);
        });

        dkrDeploy.on('close', (code) => {
            console.log(`Status:${code}`);
            if(code !== 0) { callback(new Error('"docker Deploy" exited with code', code)); return; }
             
            callback(null,code,status,'completed');
        });
}
module.exports = dockerDeploy;