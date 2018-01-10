var UTILITIES = require("../lib/utilities/utilities.js");



////////////////////////////////////////////////////////////////////////
//
//Name: getAll
//Description: Get All subcategoria of table "subcategoria"
//
////////////////////////////////////////////////////////////////////////
exports.getAll = function(request, response){

    var insUtilities = new UTILITIES();
    console.log("************************");
    insUtilities.mensaje1();
    console.log("************************");
    
    //Recupera variable de conexion global, de app.js
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
    connection.query( queryDelete , [id] , function( err, rows )
    {
        if( err ){
            console.log("[subcategoria.js] Error deleting register of table subcategoria : %s ",err );
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
    var query = connection.query( queryEdit , [id] , function( err , rows)
    {
        if(err)
            console.log("[subcategoria.js] Error In Select : %s ",err );
        
        if( rows.length > 0 ){
            response.render( 'subcategoria/editFormSubcategoria' , { message: "Se han encontrado subcategorias" , data:rows } );
        }else{
            response.render( 'subcategoria/editFormSubcategoria' , { message: "No se han encontrado Subcategorias." , data:rows } );
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
        id_categoria          : input.categoria,
        des_subcategoria      : input.descripcion,
        vigencia_subcategoria : input.vigencia 
    };
    
    var queryUpdate = "UPDATE subcategoria set ? WHERE id_subcategoria = ? ";
    connection.query( queryUpdate , [data , id] , function(err, rows)
    {
        if (err)
            console.log("[subcategoria.js] Error Updating table : %s ",err );
         
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
    response.render( 'subcategoria/addFormSubcategoria', { message: " Loading Form for Add. " }  );
};



////////////////////////////////////////////////////////////////////////
//
//Name: addSave
//Description: Insert data of the Form.
//
////////////////////////////////////////////////////////////////////////
exports.addSave = function( request , response ){
    
    //Recupera variable de conexion global, de app.js
    var connection = request.app.get('connection');
    
    var input = JSON.parse( JSON.stringify( request.body ) );
    var vigencia = 1;
    
    var data = {
        id_categoria          : input.categoria,
        des_subcategoria      : input.descripcion,
        vigencia_subcategoria : vigencia
    }

    var queryInsert = " INSERT INTO subcategoria ";
    queryInsert     = queryInsert + "( SELECT MAX(id_subcategoria)+1  ,  '"+data.id_categoria+"' , '"+data.des_subcategoria+"' , '"+data.vigencia_subcategoria+"'     FROM subcategoria ) ";
    var query = connection.query( queryInsert , data , function(err, rows)
    {
        if (err)
            console.log("[subcategoria.js] Error inserting in table : %s ",err );
         
        response.redirect('/subcategoria');
    });        
    
    /*
    mysql> INSERT INTO subcategoria  (SELECT MAX(id_subcategoria)+1, 2, 'aaa', 1 FROM subcategoria ) ;
    Query OK, 1 row affected (0.06 sec)
    Records: 1  Duplicates: 0  Warnings: 0
    */
};



/*
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
*/
