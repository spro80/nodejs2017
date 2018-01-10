
var express = require("express"); 
var app = express();
var mysql = require('mysql');
var connection = require('../config/config.js');


//creamos un objeto para ir almacenando todo lo que necesitemos
var productoModel = {};
 
//get All Producto
productoModel.getAllProducto = function( callback ){
	
	if (connection){
		connection.query(' SELECT * FROM producto WHERE id_producto != 0 ORDER BY id_producto ASC  ', function(error, rows){
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
		});
	}
	
}


//get All Producto
productoModel.getAllProductoInnerJoin = function( callback ){
	
	
	if (connection){
		connection.query(' SELECT * FROM producto as PRO INNER JOIN tipo_producto as TIP ON PRO.id_tipo_producto = TIP.id_tipo_producto INNER JOIN tipo_marca as TIM ON PRO.id_tipo_marca = TIM.id_tipo_marca WHERE PRO.id_producto != 0 ORDER BY PRO.id_producto ASC  ', function(error, rows){
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

module.exports = productoModel;
