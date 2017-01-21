var replaceVersion=function(nativeObject1, callback) {
	console.log(nativeObject1);
	nativeObject1.version = "3";
	let services = Object.keys(nativeObject1.services);

	for(let i = 0; i < services.length; i = i + 1) {
		let deployReplicas = {
			mode: 'replicated',
			replicas: 3
		}
		nativeObject1.services[services[i]]['deploy'] = deployReplicas;
		delete nativeObject1.services[services[i]].build;
	}
	callback(null, nativeObject1);
}
module.exports=replaceVersion;