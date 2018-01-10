
const menuModel = require("../models/menuModels.js");

module.exports = function ( app ){

	app.post("/menu", function(request,response){
		 
		 var input = JSON.parse( JSON.stringify( request.body ) );
		 let user = input.user;
		 let password = input.password;
		 
		 //console.log("USER-------->");
		 //console.log(user);
		 
		 menuModel.login( user, password, function(error, data){
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
	 
	
	app.get("/volverAlMenuPrincipal", function(request,response){
		response.render('menu', { message:"Bienvenido al Sistema" } );
	}); 
	
	

	 

}


