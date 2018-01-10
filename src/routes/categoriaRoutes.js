//var UTILITIES = require("../lib/utilities/utilities.js");

const categoriaModel = require("../models/categoriaModels.js");

module.exports = function ( app ){
	
	 app.get("/categoria", function(request,response){
		 
		 categoriaModel.getAllCategoria( function(error, data){
			if(error){
				console.log("Error al invocar a getAllSubcategoria.");
			}else{
				if( data.length > 0 ){
					response.render('categoria/categoriaList' , { message:"Se han encontrado Categoria en BD." , data:data } );
				}else{
					response.render('categoria/categoriaList' , { message:"No se han encontrado Categoria." } );
				}
			}
		 });
		 
	 });
	 
	/* 
	app.get("/subcategoria/addForm", function( request, response ){
		 response.render( 'subcategoria/addFormSubcategoria', { message: " Loading Form for Add. " }  );
	});
	
	app.get("/subcategoria/editForm/:id", function( request, response ){
		
		var id = request.params.id;
		subcategoriaModel.editFormSubcategoria( id, function(error, data){
			
			if( error ){
				throw error;
			}else{
				console.log(data);
				if( data.length > 0 ){
					//console.log("Se han encontrado "+data.length+" registros.");
					response.render( 'subcategoria/editFormSubcategoria' , { message: "Se han encontrado subcategorias" , data:data } );
				}else{
					//console.log("NO se han encontrado registros.");
					response.render( 'subcategoria/editFormSubcategoria' , { message: "No se han encontrado Subcategorias." , data:data } );
				}
			}
		}); 
	});
	
	app.get("/subcategoria/deleteId/:id", function( request, response ){
		
		var id = request.params.id;
		subcategoriaModel.deleteSubcategoria( id, function(error, data){
			
			if(error){
				throw error;
			}else{
				response.redirect('/subcategoria');
			}
		});
	});
	
	app.post("/subcategoria/editSave/:id", function( request, response ){
		
		var id = request.params.id;
		
		subcategoriaModel.editSubcategoria( id, request, function(error, data){
			
			if(error){
				throw error;
			}else{
				response.redirect('/subcategoria');
			}
		});
	});
	
	app.post("/subcategoria/addSave", function( request, response ){
		
		var id = request.params.id;
		subcategoriaModel.insertSubcategoria( id, request, function(error, data){
			
			if(error){
				throw error;
			}else{
				response.redirect('/subcategoria');
			}
			
		});
	});
	*/
}
