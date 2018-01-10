
function UTILITIES(){
    console.log("en constructor de UTILITIES.");
}


UTILITIES.prototype.mensaje1 = function(){
    let mensaje = "Ingresando en mensaje 1...";
    console.log(mensaje);
    return mensaje;
}

UTILITIES.prototype.mensaje2 = function(){
    let mensaje = "Ingresando en mensaje 2...";
    console.log(mensaje);
    return mensaje;
}

UTILITIES.prototype.mensaje3 = function(){
    let mensaje = "Ingresando en mensaje 3...";
    console.log(mensaje);
    return mensaje;
}

module.exports = UTILITIES;


