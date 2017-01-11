var jsonToyml=function(jsonFilename, callback){
    YAML = require('yamljs');
    const yamlString = YAML.stringify(jsonFilename, 4);
    console.log("jsonToyml is done");
    callback(null);
}
module.exports= jsonToyml