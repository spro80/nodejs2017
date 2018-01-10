'use strict'

const jwt = require("jwt-simple");
const moment = require("moment");
//const config = require("../config/config");

//function isAuth( request, response, next ){
//exports.isAuth = function(req, res, next) {
module.exports = function(request, response, next) {
	
	/*console.log("request.headers.authorization:");
	//console.log( request.headers.authorization );
	console.log( request.headers );
	
	console.log("x-access-token:");
	console.log( request.headers['x-access-token'] );
	
	console.log("req.param token:");
	console.log( request.param('token') );
	
	console.log("request.cookies:");
	console.log( request.cookies );
	*/
	
	if( !request.headers.authorization ){
		return response.status(403).send({ message: 'No tiene autorizacion.' });
	}
	
	const token = request.headers.authorization.split(" ")[1];
	const payload = jwt.decode(token, config.TOKEN_SECRET);
	
	if( payload.exp < moment().uni() ){
		response.status(401).send( { message : "El Token ha expirado." } );
	}
	
	request.user = payload.sub;
	
	next();
	
	//response.status(401).send( { message : "El Token ha expirado." } );
	
	//next()
	
	// check header or url parameters or post parameters for token
	/*var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, app.get('superSecret'), function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}*/
	

}

//module.exports = isAuth;
