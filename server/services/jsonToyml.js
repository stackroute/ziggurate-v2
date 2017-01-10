YAML = require('yamljs');
var fs= require('fs');
var yml=require('./input.json');
const nativeObject = YAML.parse(JSON.stringify(yml));
const yamlString = YAML.stringify(nativeObject, 4);
fs.writeFileSync('outputfile.yml', yamlString);
console.log(yamlString);