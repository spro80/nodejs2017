
var express = require("express"); 
var app = express();
var mysql = require('mysql');
var connection = require('../config/config.js');


//creamos un objeto para ir almacenando todo lo que necesitemos
var categoriaModel = {};
 
//get All Subcategoria
categoriaModel.getAllCategoria = function( callback ){
	
	if (connection){
		connection.query(' SELECT * FROM categoria WHERE id_categoria != 0 ORDER BY id_categoria ASC  ', function(error, rows){
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
		});
	}
	
}

/*
//get rows by id Subcategoria
subcategoriaModel.editFormSubcategoria = function( id, callback ){
	
	if (connection){
		connection.query(' SELECT * FROM subcategoria WHERE id_subcategoria = ?  ', [id] , function(error, rows){
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
		});
	}
	
}


//delete by id Subcategoria
subcategoriaModel.deleteSubcategoria = function( id, callback ){
	
	if (connection){
		connection.query(' DELETE FROM subcategoria  WHERE id_subcategoria = ?  ', [id] , function(error, rows){
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
		});
	}
	
}


//update Subcategoria
subcategoriaModel.editSubcategoria = function( id, request, callback ){
	
	var id = request.params.id;
	var input = JSON.parse(JSON.stringify( request.body ));

	var data = {
		id_categoria          : input.categoria,
		des_subcategoria      : input.descripcion,
		vigencia_subcategoria : input.vigencia 
	};

	if (connection){
		
		connection.query(' UPDATE subcategoria set ? WHERE id_subcategoria = ?  ', [data , id] , function(error, rows){
		
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
			
		});
	}
	
}


//insert Subcategoria
subcategoriaModel.insertSubcategoria = function( id, request, callback ){
	
	var id = request.params.id;
	var input = JSON.parse(JSON.stringify( request.body ));

	var data = {
		id_categoria          : input.categoria,
		des_subcategoria      : input.descripcion,
		vigencia_subcategoria : input.vigencia 
	};
	
	if (connection){
		
		var queryInsert = " INSERT INTO subcategoria ";
		queryInsert     = queryInsert + "( SELECT MAX(id_subcategoria)+1  ,  '"+data.id_categoria+"' , '"+data.des_subcategoria+"' , '"+data.vigencia_subcategoria+"'     FROM subcategoria ) ";
		
		connection.query( queryInsert , [data , id] , function(error, rows){
		
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
			
		});
	}
	
}
*/
module.exports = categoriaModel;
