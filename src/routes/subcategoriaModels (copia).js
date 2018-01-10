
var express = require("express"); 
var app = express();
var mysql = require('mysql');
var connection = require('../config/config.js');



module.exports = {

	"getAllSubcategoria" : function(  ){
		
		//var connection = app.get('connection');
		//connection.connect();
		connection.query('SELECT * FROM subcategoria WHERE id_subcategoria != 0 ', function(err, rows, fields) {
		  if (!err){
			console.log('The solution is: ', rows);
			//return rows;
		  }else{
			console.log('Error while performing Query.');
		  }
		});

		connection.end();


		/*//Recupera variable de conexion global, de app.js
		var connection = request.app.get('connection');
		let querySelect = "SELECT * FROM subcategoria WHERE id_subcategoria != 0 ";
		
		connection.query( querySelect , function(err, rows, fields){
			if (err) throw err;
			
			//console.log( rows.length );
			if( rows.length > 0 ){
				response.render('subcategoria/subcategoriaList' , { message:"Se han encontrado Subcategoria en BD." , data:rows } );
			}else{
				response.render('subcategoria/subcategoriaList' , { message:"No se han encontrado Subcategoria." } );
			}
			
		});*/
		
		return "En metodo getAllSubcategoria";
		//return rows;
	},
	"deleteSubcategoria" : function(){
		return "En metodo deleteSubcategoria";
	},
	"addSubcategoria" : function(){
		return "En metodo addSubcategoria";
	},
	"editSubcategoria" : function(){
		return "En metodo editSubcategoria";
	}

}

/*function getAllSubcategoria(){
	
	let json = {
		"message": "all subcategory",
		"status": 0
	}
	
	return json;
}

module.exports = getAllSubcategoria();
*/
