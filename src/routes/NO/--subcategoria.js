
/*
 * GET subcategoria listing.
 */

var http = require("http");
var url = require("url");



var self = module.exports={

    getAll : function( request, response){

		//Recupera variable de conexion global, de app.js
		var connection = request.app.get('connection');
		let querySelect = "SELECT * FROM subcategoria WHERE id_subcategoria != 0 ";

		connection.query( querySelect , function(err, rows, fields){

			if (err) throw err;
		
			//console.log( rows.length );
			if( rows.length > 0 ){
				response.render('subcategoria' , { message:"Se han encontrado Subcategoria en BD." , data:rows } );
			}else{
				response.render('subcategoria' , { message:"No se han encontrado Subcategoria." } );
			}
			//response.render('subcategoria',{message:"Categorias - Node.js",data:rows});
			
		});
			
    },
    showAddForm : function( request , response ){
	    response.render( 'addSubcategoriaForm', { message: " Loading Form for Add. " }  );
	}

}



/*

////////////////////////////////////////////////////////////////////////
//
//Name: getAll
//Description: Get All subcategoria of table  "subcategoria"
//
////////////////////////////////////////////////////////////////////////
exports.getAll = function(request, response){

    //Recupera variable de conexion global, de app.js
    var connection = request.app.get('connection');
    let querySelect = "SELECT * FROM subcategoria WHERE id_subcategoria != 0 ";

    connection.query( querySelect , function(err, rows, fields){

        if (err) throw err;
    
        //console.log( rows.length );
        if( rows.length > 0 ){
            response.render('subcategoria' , { message:"Se han encontrado Subcategoria en BD." , data:rows } );
        }else{
            response.render('subcategoria' , { message:"No se han encontrado Subcategoria." } );
        }
        //response.render('subcategoria',{message:"Categorias - Node.js",data:rows});
        
    });
    //connection.end();
};




////////////////////////////////////////////////////////////////////////
//
//Name: deleteId
//Description: Delete the register by id
//
////////////////////////////////////////////////////////////////////////
exports.deleteId = function(request , response){
     
    //Recupera variable de conexion global, de app.js
    var connection = request.app.get('connection');        
    var id = request.params.id;
    var queryDelete = "DELETE FROM subcategoria  WHERE id_subcategoria = ? ";
    
    //connection.query("DELETE FROM subcategoria  WHERE id_subcategoria = ? ",[id], function( err, rows )
    connection.query( queryDelete , [id] , function( err, rows )
    {
        if( err ){
            console.log("Error deleting register of table subcategoria : %s ",err );
        }
            
        response.redirect('/subcategoria');
        
   });
     
};



////////////////////////////////////////////////////////////////////////
//
//Name: editForm
//Description: Open view for edit Form
//
////////////////////////////////////////////////////////////////////////
exports.editForm = function(request, response){
    
    //Recupera variable de conexion global, de app.js
    var connection = request.app.get('connection');
    
    var id = request.params.id;
    var queryEdit = " SELECT * FROM subcategoria WHERE id_subcategoria = ? "; 
    var query = connection.query( queryEdit , [id] , function(err,rows)
    {
        if(err)
            console.log("Error Selecting : %s ",err );
            
        console.log( rows.length );
        let numberRows = rows.length;
        if( numberRows > 0 ){
            response.render( 'editFormSubcategoria' , { message: "Se han encontrado subcategorias" , data:rows } );
        }else{
            response.render( 'editFormSubcategoria' , { message: "No se han encontrado Subcategorias." , data:rows } );
        }
        
    });
        
};


////////////////////////////////////////////////////////////////////////
//
//Name: editSave
//Description: Save info of the form edit
//
////////////////////////////////////////////////////////////////////////
exports.editSave = function( request , response ){
    
    //Recupera variable de conexion global, de app.js
    var connection = request.app.get('connection');
    
    var id = request.params.id;
    
    var input = JSON.parse(JSON.stringify( request.body ));
    var data = {        
        des_subcategoria   : input.descripcion,
        vigencia_subcategoria   : input.vigencia 
    };
    
    var queryEditSave = "UPDATE subcategoria set ? WHERE id_subcategoria = ? ";     
    connection.query( queryEditSave , [data , id], function(err, rows)
    {
        if (err)
            console.log("Error Updating : %s ",err );
         
        response.redirect('/subcategoria');
    });
    
};











////////////////////////////////////////////////////////////////////////
//
//Name: showAddForm
//Description: Open view for add Form
//
////////////////////////////////////////////////////////////////////////
exports.showAddForm = function( request , response ){
    response.render( 'addSubcategoriaForm', { message: " Loading Form for Add. " }  );
};



exports.getMaxId = function(request , response){
     
    //Recupera variable de conexion global, de app.js
    var connection = request.app.get('connection');        
    
    
    var queryMaxId = "SELECT MAX(id_subcategoria) AS MAXID FROM subcategoria";
    var query = connection.query( queryMaxId  , function( err, results, fields )
    {
        if( err ){
            console.log("Error deleting register of table subcategoria : %s ",err );
        }
        
        var maxId = 0;
        maxId = results[0].MAXID;
        
        console.log("******************");
        console.log( maxId );
        console.log("******************");
        
        if( maxId != 0 ){
            maxId = maxId + 1;
        }else{
            maxId = 0;
        }
    
        console.log("ID A INSERTAR: ");
        console.log( maxId );
        response.redirect('/subcategoria');
    });
    
    
     
};


exports.addSave = function( request , response ){
    
    //Recupera variable de conexion global, de app.js
    var connection = request.app.get('connection');
    
    var input = JSON.parse( JSON.stringify( request.body ) );
    var vigencia = 1;
    console.log("ANTES");
    //var a = this.getMaxId();
    console.log(input.descripcion);
    console.log(input.categoria);
    console.log("DESPUES");
    
    
    
    
    
    
    
    
    
    var data = {
        id_subcategoria       : 7,
        id_categoria          : input.categoria,
        des_subcategoria      : input.descripcion,
        vigencia_subcategoria : vigencia
    }
    
    
    
    
    //response.render('subcategoria',{message:"AAA"});
    
};



*/

