


exports.validateLogin = function(request, response){
	
	var user = request.body.user;
	var password = request.body.password;
	
	console.log("*********************");
	console.log("user:");
	console.log( user );
	console.log("password:");
	console.log( password );
	console.log("*********************");
	//user = "aaa";
	
	if( user.trim()!="" /*&& password.trim()!=""*/ ){
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
	
	
	
	
	/*
	let login = "OK";
	
	if( user == "spro80" && password == "808080" ){
		response.render('menu');
		
	}else{
		response.render('index');
	}*/
	

}
