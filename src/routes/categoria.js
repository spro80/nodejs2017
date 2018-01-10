
/*
 * GET categorias listing.
 */

var http = require("http");
var url = require("url");



////////////////////////////////////////////////////////////////////////
//
//Name: list
//Description: Get All category of table  "categoria"
//
////////////////////////////////////////////////////////////////////////
exports.list = function(request, response){

	//Recupera variable de conexion global, de app.js
	var connection = request.app.get('connection');
	let querySelect = "SELECT * FROM categoria WHERE id_categoria != 0 ";
	
	connection.query( querySelect , function(err, rows, fields){
		
		if (err) throw err;
		
		console.log( rows.length );
		let numberRows = rows.length;
		if( numberRows > 0 ){
			console.log( "numberRows > 0" );
			response.render('categoria/categoriaList' , { message:"Se han encontrado Categorias en BD." , data:rows } );
		}else{
			console.log( "numberRows <= 0" );
			response.render('categoria/categoriaList' , { message:"No se han encontrado Categorias." } );
		}
		  
		//response.render('categoria',{message:"Categorias - Node.js",data:rows});
		
	});
	
	//connection.end();
	
};




////////////////////////////////////////////////////////////////////////
//
//Name: deleteCategoria
//Description: Delete the row by id
//
////////////////////////////////////////////////////////////////////////
exports.deleteCategoria = function(request , response){
     
    //Recupera variable de conexion global, de app.js
    var connection = request.app.get('connection');        
    var id = request.params.id;    
    console.log( id );    
    connection.query("DELETE FROM categoria  WHERE id_categoria = ? ",[id], function(err, rows)
    {            
        if( err ){
            console.log("Error deleting table category : %s ",err );
            console.log( err );    
            
        }
            
        response.redirect('/categoria');
        
    });
     
};



exports.add = function(req, res){
  res.render('add_customer',{page_title:"Add Customers - Node.js"});
};



exports.save = function(req,res){
    
    //Recupera variable de conexion global, de app.js
	var connection = req.app.get('connection');
	
    var input = JSON.parse(JSON.stringify(req.body));
        
        var data = {
            
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone 
        
        };
        
        var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/customers');
          
        });    
    
};


exports.edit = function(req, res){
    
    //Recupera variable de conexion global, de app.js
	var connection = req.app.get('connection');
	
    var id = req.params.id;
       
        var query = connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_customer',{page_title:"Edit Customers - Node.js",data:rows});
                
           
         });
    
};



exports.save_edit = function(req,res){
    
    //Recupera variable de conexion global, de app.js
	var connection = req.app.get('connection');
	
	    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
        
        var data = {
            
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone 
        
        };
        
        connection.query("UPDATE customer set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/customers');
          
        });
    
    
};









