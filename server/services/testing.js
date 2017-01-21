const ymlToJson = require('./ymlTojson');
const replaceVersion = require('./replaceVersion');

ymlToJson('./docker-compose.yml', replaceVersion);