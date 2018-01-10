


//exports.configVariableEntorno = function() {
exports.EnvironmentConfig = function() {
	
	console.log("[environmentConfig.js] Init in function EnvironmentConfig.");
	
	var environmentJSON = require('./environment.json');
	
	var node_env = process.env.NODE_ENV || 'development';
	//console.log("PORT is: "+ environmentJSON[node_env].PORT );
	
	console.log("[EnvironmentConfig.js] End of function EnvironmentConfig.");
	return environmentJSON[node_env];
}
