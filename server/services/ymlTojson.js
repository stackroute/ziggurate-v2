var ymlTojson=function(dockerComposeFileName, callback){
   	console.log(dockerComposeFileName);
    YAML = require('yamljs');
    nativeObject = YAML.load(dockerComposeFileName);
    const yamlString = JSON.stringify(nativeObject);
    console.log('ymlTojson conversion done');
    callback(null, nativeObject);
}
module.exports =ymlTojson;