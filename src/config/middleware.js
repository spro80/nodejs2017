// middleware.js
var jwt = require('jwt-simple');
var moment = require('moment');

var ConfigEntorno = require('./environmentConfig.js');
let ConfigEntornoAmbiente = ConfigEntorno.EnvironmentConfig();
console.log( ConfigEntornoAmbiente.PORT );
console.log( ConfigEntornoAmbiente.SERVERURL );
console.log( ConfigEntornoAmbiente.TOKEN_SECRET );

var configTokenSecret = ConfigEntornoAmbiente.TOKEN_SECRET;


exports.ensureAuthenticated = function(request, response, next) {
  
/*
  if(!request.headers.authorization) {
    return response
      .status(403)
      .send({message: "Tu petición no tiene cabecera de autorización"});
  }
  
  
  var token = request.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);
  
  if(payload.exp <= moment().unix()) {
     return res
     	.status(401)
        .send({message: "El token ha expirado"});
  }
  */
  //request.user = payload.sub;
  next();
  
  //return next;
}
