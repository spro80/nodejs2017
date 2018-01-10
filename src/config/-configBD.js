


function ConfigBD( entorno ){
    this.entorno = entorno;
}


ConfigBD.prototype.getConfigBD = function( ){

    console.log( "Entorno: "+this.entorno );
    
    var configBD = new Object();

    if( this.entorno == "develop" ){
		
		configBD.host = "localhost";
		configBD.user = "spro80";
		configBD.password = "808080";
		configBD.database = "carritoresponsive";
		
    }else if( this.entorno == "maqueta" ){
		
		configBD.host = "localhost";
		configBD.user = "spro80";
		configBD.password = "808080";
		configBD.database = "carritoresponsive";
	
	}else if( this.entorno == "produccion" ){
		
		configBD.host = "localhost";
		configBD.user = "spro80";
		configBD.password = "808080";
		configBD.database = "carritoresponsive";
	}
	
	return configBD;
	
}

module.exports = ConfigBD;

