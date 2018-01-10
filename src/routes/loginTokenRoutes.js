
var express = require('express');

const loginTokenModel = require("../models/loginTokenModels.js");
var service = require('../config/service');


var auth = require('../middelware/auth.js');

//var auth = require('../config/middleware.js');


module.exports = function ( app ){

	app.post("/loginToken", function(request,response){
		//console.log("LOGIN TOKEN.....");
		 var input = JSON.parse( JSON.stringify( request.body ) );
		 let user = input.user;
		 let password = input.password;
		 
		 //console.log("USER-------->");
		 //console.log(user);
		 
		 loginTokenModel.login( user, password, function(error, data){
			if( error ){
				console.log("Error al invocar a getAllSubcategoria.");
				throw( error );
			}else{
				console.log("data.length:"+data.length);
				//response.render('menu' , { message:"Bienvenido al Sistema" , data:data } );
				
				if( data.length > 0 ){
					//request.session.rut = "14515778";
					//request.session.nombre = "MATIAS";
					console.log("mayor que 0")
					//response.render('subcategoria/subcategoriaList' , { message:"Se han encontrado Subcategoria en BD." , data:data } );
					//response.render('CREAR TOKENNNNNN' , { message:"Bienvenido al Sistema" , data:data } );
					
					//request.headers.authorization = "AAA";
					//request.header("Access-Control-Allow-Headers", "Authorization");
					//response.setHeader("Access-Control-Allow-Headers", "Authorization");
					
					// return the information including token as JSON
					 /*response.json({
						 success: true,
						 message: 'Enjoy your token!',
						 token: service.createToken(user)
					 });*/
					 
					 //response.status(200).send({ auth: true, token: token });
					 
					 //return response.status(200).send( { token: service.createToken(user) } );
					 response.status(200).send( { token: service.createToken(user) } );
					
					
				}else{
					console.log("menor que 0")
					response.render('index' , { message:"Bienvenido al Sistema" } );
				}
			}
		 });
		 //console.log("LOGON");
		 
	 });
	 
	
	app.get("/loginToken", function(request,response){
		console.log("LOGIN TOKEN GET");
		response.render('obtenerTOKEN' , { message:"Bienvenido al Sistema" } );
	});
	
	/*app.get("/private", middleware.ensureAuthenticated,function(request,response){
		console.log("LOGIN TOKEN GET");
		console.log(request.user);
		//response.render('obtenerTOKEN' , { message:"Bienvenido al Sistema" } );
		var token = request.headers.authorization.split(" ")[1];
		console.log("token:");
		console.log(token);
		response.json({ message: 'Estás autenticado correctamente y tu _id es:'+request.user });
	});*/
	
	
	//app.get("/private", auth.ensureAuthenticated() , function(request, response){
	//app.get("/private", auth.isAuth() , function(request, response){
	//app.get("/private", [express.bodyParser(), auth.isAuth()] , function(request, response){
	//app.get('/something', [express.bodyParser(), jwtauth], function(req, res){
	app.get("/private", [express.bodyParser(), auth] , function(request, response){
	
	
	
		response.status(200).send( { mensaje : "Si tienes acceso." });
		
	})
	 

}

