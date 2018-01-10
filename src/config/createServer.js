var http = require('http');
//var app = express();




module.exports = aaa = function() {
  let a = http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});
	
  return a;
};


//module.exports = express;
//module.exports = a;
