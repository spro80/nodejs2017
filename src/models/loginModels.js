
var express = require("express"); 
var app = express();
var mysql = require('mysql');
var connection = require('../config/config.js');


//creamos un objeto para ir almacenando todo lo que necesitemos
var menuModel = {};
 
//obtenemos todos los usuarios
menuModel.login = function( user, password, /*request, */callback ){
	
	//console.log("en models");
	//console.log(user);
	
	
	//var id = request.params.id;
	//var input = JSON.parse(JSON.stringify( request.body ));
	
	/*var data = {
		id_usuario          : user//input.user 
	};*/
	
	var queryLogin = " SELECT * from usuario where id_usuario = ? AND password_usuario = ?";
	
	
	console.log("queryLogin:"+queryLogin);
	//console.log(user);
	if (connection){
		connection.query( queryLogin , [user, password], function(error, rows){
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
		});
	}
	
}

module.exports = menuModel;
