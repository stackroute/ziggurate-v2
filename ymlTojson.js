YAML = require('yamljs');
var fs= require('fs');
nativeObject = YAML.load('outputfile.yml');
const yamlString = JSON.stringify(nativeObject);
fs.writeFileSync('outputfile1.json', yamlString);
console.log(yamlString);