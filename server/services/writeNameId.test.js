const writeNameId = require('./writeNameId');

const sName='ebin1';
const dName='project1.com';

var test=writeNameId(sName, dName, (err,conf)=>{
	if(err){console.log(err)}
	else{
		console.log(conf);
	}
});