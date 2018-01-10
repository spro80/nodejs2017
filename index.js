
/**
 * Module dependencies.
 */
 
 //https://www.genbetadev.com/frameworks/introduccion-a-la-programacion-asincrona-con-nodejs
 //Middelware: Funciones que se ejecutan cada vez que se recibe una peticion.
//Modulo body parser, es para entender las peticiones POST
//Modulo: morgan, se utiliza para mostrar los mensajes por consola.
//Callbacks: Cada vez que el servidor recibe una nueva petición, Node.js llama a la función que le hemos pasado como parámetro, a este tipo de funciones se les llama callbacks.
//A dicho callback se le pasan dos parámetros, request y response. Sus nombres son autodescriptivos, el primero de ellos es un objeto que contiene todos los datos relacionados con la petición y el segundo objeto es utilizado para responder al navegador. Cuando hemos acabado de responder al navegador tenemos que ejecutar response.end().

////////////////////////////////////////
//////////Require node_modules//////////
////////////////////////////////////////
//var express = require('express');
//var routes = require('./src/routes');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
//var mysql = require('mysql');

//var service = require('./src/config/service');


////////////////////////////////////////
////////Require internal modules////////
////////////////////////////////////////
var connection = require("./src/config/config.js");
var app = require("./src/config/configExpress.js");
//var app = express();//se agrego en configExpress.js

//var rutasPrueba = require("./src/config/rutasPrueba.js")(app);
require('./src/routes/routes')(app);






////////////////////////////////////////
///////////////Load Route///////////////
////////////////////////////////////////
var login = require('./src/routes/login');
var menu = require('./src/routes/menu');
var customer = require('./src/routes/customer');
var categoria = require('./src/routes/categoria');
var subcategoria = require('./src/routes/subcategoria');
//var subcategoriaRoutes = require('./src/routes/subcategoriaRoutes')(app);



////////////////////////////////////////
///////Load Variable Environment////////
////////////////////////////////////////
//var ConfigEntorno = require('./src/config/envVariables.js');
var ConfigEntorno = require('./src/config/environmentConfig.js');
let ConfigEntornoAmbiente = ConfigEntorno.EnvironmentConfig();
console.log( ConfigEntornoAmbiente.PORT );
console.log( ConfigEntornoAmbiente.SERVERURL );







// development only
/*if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}*/




app.configure(function() {
  app.set('connection', connection);
  //app.set('app', app);
});



/*
//Routes
app.get('/', routes.index);
app.get('/login', routes.index);
app.post('/menu', login.validateLogin);
app.get('/volverAlMenuPrincipal', menu.menuPrincipal);

app.get('/categoria', categoria.list);
//app.post('/login/:usuario', login.validateLogin);
app.get('/categoria/deleteCategoria/:id', categoria.deleteCategoria);


//app.get( '/subcategoria' , subcategoria.getAll );
//app.get( '/subcategoria/deleteId/:id', subcategoria.deleteId);
//app.get( '/subcategoria/editForm/:id', subcategoria.editForm );
//app.post( '/subcategoria/editSave/:id', subcategoria.editSave );
//app.get( '/subcategoria/addForm' , subcategoria.showAddForm );
//app.post('/subcategoria/addSave', subcategoria.addSave);

//app.get( '/menu' , subcategoria.getAll );

app.get('/customer', customer.list);
app.get('/customer/add', customer.add);
app.post('/customer/add', customer.save);
app.get('/customer/delete/:id', customer.delete_customer);
app.get('/customer/edit/:id', customer.edit);
app.post('/customer/edit/:id',customer.save_edit);
app.use(app.router);

//module.exports = app;
//var routes = require('./routes');
//app.use('/api', routes);
//app.use('/', routes);

*/



http.createServer(app).listen( ConfigEntornoAmbiente.PORT , function(){
  console.log('Express Server Listening ON Port ' + ConfigEntornoAmbiente.PORT );
});


/*
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});*/
