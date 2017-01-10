var pathCompose,path;
var findCompose=function(repoPath, callback) {
        const spawn=require('child_process').spawn;
        //ls -lh /usr
        //const repository = 'akanksha152/tasker';
        //const repoName = repository.split('/')[1];
        const compose1=spawn('find', ['-name','docker-compose.yml'], {cwd:repoPath});//find . -name docker-compose.yml

        compose1.stdout.on('data', (data)=> {
            pathCompose=`${data}`;
            path=repoPath.concat('/'+pathCompose.replace('/docker-compose.yml',''));
            console.log(path);
        });

        compose1.on('close', (code) => {
            console.log(`Status:${code}`);
            if(code !== 0) { callback(new Error('git clone exited with code', code)); return; }
            callback(null,path);
        });
}
module.exports = findCompose;