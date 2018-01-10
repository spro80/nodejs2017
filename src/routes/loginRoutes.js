
const loginModel = require("../models/loginModels.js");

module.exports = function ( app ){

	app.post("/login", function(request,response){
		 
		 var input = JSON.parse( JSON.stringify( request.body ) );
		 let user = input.user;
		 let password = input.password;
		 
		 console.log("USER-------->");
		 console.log(user);
		 
		 console.log("password-------->");
		 console.log(password);
		 
		 loginModel.login( user, password, function(error, data){
			 
			if( error ){
				console.log("Error al invocar a getAllSubcategoria.");
				throw( error );
			}else{
				console.log("data.length:"+data.length);
				//response.render('menu' , { message:"Bienvenido al Sistema" , data:data } );
				
				if( data.length > 0 ){
					request.session.rut = "14515778";
					request.session.nombre = "MATIAS";
					
					console.log("mayor que 0")
					console.log("data.length:"+data.length);
					//response.render('subcategoria/subcategoriaList' , { message:"Se han encontrado Subcategoria en BD." , data:data } );
					response.render('menu' , { message:"Bienvenido al Sistema" , data:data } );
				}else{
					console.log("menor que 0")
					response.render('index' , { message:"Bienvenido al Sistema" } );
				}
			}
		 });
		 //console.log("LOGON");
		 
	 });
	 
	
	app.get("/menuPrincipal", function(request,response){
		response.render('menu', { message:"Bienvenido al Sistema" } );
	}); 
	
	

	 

}

//exports.validateLogin = function(request, response){
	/*
	var user = request.body.user;
	var password = request.body.password;
	
	console.log("*********************");
	console.log("user:");
	console.log( user );
	console.log("password:");
	console.log( password );
	console.log("*********************");
	//user = "aaa";
	
	//&& password.trim()!=""
	if( user.trim()!=""  ){
		//Recupera variable de conexion global, de app.js
		var connection = request.app.get('connection');
		//var querySQL = "SELECT * from usuario where id_usuario= '"+ user +" AND password_usuario="+password ;
		var querySQL = "SELECT * from usuario where id_usuario= '"+ user + "' ";
		console.log( querySQL );
		
		connection.query( querySQL , function( err, rows, fields ) {
			
			if (err) throw err;
			
			console.log( rows.length );
			let numberRows = rows.length;
			if( numberRows > 0 ){
				console.log( "numberRows > 0" );
				response.render('menu' , { message:"Bienvenido al Sistema" , data:rows } );
			}else{
				console.log( "numberRows <= 0" );
				response.render('ZZ' , { message:"No se ha podido acceder al Sistema. Intente Nuevamente." } );
			}
			
		});
		
	}else{
		console.log( "Debe ingresar datos en Usuario y Password." );
		response.render('VACIO' , { message:"Debe ingresar datos en Usuario y Password." } );
	}
}*/
