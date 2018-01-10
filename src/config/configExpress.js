var express = require('express');
var app = express();
//app.set('port', 3000);


//all environments
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('view engine', 'jade');
app.set('port', process.env.PORT || 4300);


app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static('public'));

//app.set('views', path.join(__dirname, 'views'));
app.set('views', __dirname + '/../../src/views');


app.use(express.cookieParser('secret'));//necesario para utilizar sesiones
app.use(express.session({cookie: {maxAge: 900000}}));//tiempo de expiración de la sesión

//app.set('superSecret', config.secret); // secret variable
app.set('superSecret', 'SECRETOOOOOOOO'); // secret variable


/*app.use(express.static(__dirname + '../public'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));
*/
//var connection  = require('express-myconnection'); 
//var mysql = require('mysql');


if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}






//module.exports = express;
module.exports = app;
