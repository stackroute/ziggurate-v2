var jsonToyml=function(repoPath, jsonObject, callback) {
    YAML = require('yamljs');
    const fs = require('fs');
    const yamlString = YAML.stringify(jsonObject, 4);
    console.log("jsonToyml is done");
    fs.writeFile(repoPath.concat('/')+'docker-compose.yml', yamlString, function (err) {
  		 if (err)
     		return console.log(err);
			});
    callback(null);
}
module.exports= jsonToyml