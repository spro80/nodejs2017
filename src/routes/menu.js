
/*
 * GET home page.
 */

exports.menuPrincipal = function( request , response ){
  response.render('menu', { message: 'Cargando Menu...' });
};
