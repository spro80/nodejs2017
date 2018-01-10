
app.get('/', routes.index);
app.get('/login', routes.index);
app.post('/menu', login.validateLogin);
app.get('/volverAlMenuPrincipal', menu.menuPrincipal);

app.get('/categoria', categoria.list);
//app.post('/login/:usuario', login.validateLogin);
app.get('/categoria/deleteCategoria/:id', categoria.deleteCategoria);

app.get( '/subcategoria' , subcategoria.getAll );
app.get( '/subcategoria/deleteId/:id', subcategoria.deleteId);
app.get( '/subcategoria/editForm/:id', subcategoria.editForm );
app.post( '/subcategoria/editSave/:id', subcategoria.editSave );
app.get( '/subcategoria/addForm' , subcategoria.showAddForm );
app.post('/subcategoria/addSave', subcategoria.addSave);

//app.get( '/menu' , subcategoria.getAll );

app.get('/customer', customer.list);
app.get('/customer/add', customer.add);
app.post('/customer/add', customer.save);
app.get('/customer/delete/:id', customer.delete_customer);
app.get('/customer/edit/:id', customer.edit);
app.post('/customer/edit/:id',customer.save_edit);
