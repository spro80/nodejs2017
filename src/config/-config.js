//Get Parameters Of Configuration BD
var ConfigBD = require("./configBD.js");
var BD = new ConfigBD("develop"); 
var configBD = BD.getConfigBD();

var mysql = require('mysql');

var connection = mysql.createConnection({
        
    host     : configBD.host,
    user     : configBD.user,
    password : configBD.password,
    database : configBD.database
        
});


connection.connect( function(err){
    
    if(!err) {
        console.log("Database is connected ... !!");    
    }else {
        console.log("Error connecting database ... !!");    
    }
    
});


module.exports = connection;
