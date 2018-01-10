	
module.exports = function ( app ){
	
	app.get("/index", function(request,response){
		 
		 response.render('index' , { title: 'El titulo es Hello World' } );
		 //response.render('index.jade'  );
		 
		 
	 });
	 
}
