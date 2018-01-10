var jwt = require('jwt-simple');  
var moment = require('moment');  
//var config = require('./config');

var ConfigEntorno = require('./environmentConfig.js');
let ConfigEntornoAmbiente = ConfigEntorno.EnvironmentConfig();
console.log( ConfigEntornoAmbiente.PORT );
console.log( ConfigEntornoAmbiente.SERVERURL );
console.log( ConfigEntornoAmbiente.TOKEN_SECRET );


var configTokenSecret = ConfigEntornoAmbiente.TOKEN_SECRET;


exports.createToken = function( user ) {  
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  //return jwt.encode(payload, config.TOKEN_SECRET);
  return jwt.encode( payload, configTokenSecret );
};
