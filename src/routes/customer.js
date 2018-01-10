
/*
 * GET users listing.
 */


exports.list = function(req, res){

	//Recupera variable de conexion global, de app.js
	var connection = req.app.get('connection');

	connection.query('SELECT * from customer', function(err, rows, fields) {
	  if (err) throw err;
	  res.render('customers',{page_title:"Customers - Node.js",data:rows});
	});
	
	//connection.end();

  
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



exports.delete_customer = function(req,res){
     
    //Recupera variable de conexion global, de app.js
	var connection = req.app.get('connection');
	     
     var id = req.params.id;
        
        connection.query("DELETE FROM customer WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/customers');
             
        });
     
};





