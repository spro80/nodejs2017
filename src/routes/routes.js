//var express = require('express');
//var router = express.Router();

//var express = require('express');
//var router = express.Router();

//console.log(app);

//var subcategoriaRoutes = require('./subcategoriaRoutes')(app);



//var subcategoriaCtrl = require('./subcategoriaController');
//var subcategoria = require('./subcategoria');
//var index = require('./index');

//router.route('/').get(index.index);
//router.route('/subcategoria').get(subcategoria.getAll);
//router.route('/subcategoria').get(subcategoriaCtrl.getAll);
//router.route('/movie').post(movieCtrl.postMovie);
//router.route('/movies').get(movieCtrl.getMovies);

/*
router.route('/').get( function (req, res) {
  res.send('Hello from A!')
})*/

/*
router.get('/', function(req, res, next){
    res.send('Hello from A!');
  });*/

  
/*router.get('http://localhost/api/', function(req, res){
    res.render('add_campaign');
});


module.exports = router;
*/



module.exports = function ( app ){
	//console.log(app);
	
	var indexRoutes = require('./indexRoutes')(app);
	//var menuRoutes = require('./menuRoutes')(app);
	var loginRoutes = require('./loginRoutes')(app);
	var loginTokenRoutes = require('./loginTokenRoutes')(app);
	var categoriaRoutes = require('./categoriaRoutes')(app);
	var subcategoriaRoutes = require('./subcategoriaRoutes')(app);
	var productoRoutes = require('./productoRoutes')(app);
	
	//var privateRoutes = require('./privateRoutes')(app);
	

	
	
	//var loginRoutes = require('./indexRoutes')(app);
	//var loginRoutes = require('./loginRoutes')(app);
	
	
}
