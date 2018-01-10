
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'El titulo es Hello World' });
};




/*
exports.login = function(req, res){

	let login = "OK";
	
	
	
	if( login == "OK" ){
		res.render('menu' );
	}
	

}*/
