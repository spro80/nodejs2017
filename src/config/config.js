//Get Parameters Of Configuration BD
//var ConfigBD = require("./configBD.js");
//var BD = new ConfigBD("develop"); 
//var configBD = BD.getConfigBD();

//Require
var mysql = require('mysql');

//Read environment variables.
var ConfigEntorno = require('./environmentConfig.js');
let ConfigEntornoAmbiente = ConfigEntorno.EnvironmentConfig();
//console.log( ConfigEntornoAmbiente.PORT );
//console.log( ConfigEntornoAmbiente.SERVERURL );



var connection = mysql.createConnection({
        
    host     : ConfigEntornoAmbiente.BD_HOST, //"localhost",//configBD.host,
    user     : ConfigEntornoAmbiente.BD_USER, //"spro80",//configBD.user,
    password : ConfigEntornoAmbiente.BD_PASS,//"808080",//configBD.password,
    database : ConfigEntornoAmbiente.BD_DATABASE//"carritoresponsive"//configBD.database
    
});


connection.connect( function(err){
    
    if(!err) {
        console.log("[config.js] Database is connected ... !!");    
    }else {
        console.log("[config.js] Error connecting database ... !!");    
    }
    
});

module.exports = connection;
