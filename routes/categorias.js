const { Router } = require('express');
const { check } = require('express-validator');
const { existeCategoria } = require('../helpers/db-validators');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');

const { crearCategoria, 
        obtenerCategorias, 
        obtenerCategoria, 
        actualizarCategoria, 
        borrarCategoria 
                              } = require('../controllers/categorias');


const router = Router();


/**
 * {{ url}}/api/categorias
 */
//obtener todas las categorias
router.get('/',obtenerCategorias);

//obtener categoria por id
router.get('/:id',[
   check('id','No es un id de Mongo valido').isMongoId(),
   check('id').custom( existeCategoria), 
   validarCampos
],obtenerCategoria);

 //crear Categoria - privado - cualquier persona con un token valido
 router.post('/',[
   validarJWT,
   check('nombre','El nombre es obligatorio').not().isEmpty(),
   validarCampos
],crearCategoria);

 //actualizar por id - privado - cualquier persona con un token valido
 router.put('/:id',[
    validarJWT,
   check('id','No es un id de Mongo valido').isMongoId(),
   check('id').custom( existeCategoria),
   check('nombre','El nombre es obligatorio').not().isEmpty(),
   validarCampos
 ],actualizarCategoria);
 

 //Borrar categoria solo Admin
 router.delete('/:id',[
   validarJWT,
   check('id','No es un id de Mongo valido').isMongoId(),
   check('id').custom( existeCategoria),
   esAdminRole,  
   validarCampos
 ],borrarCategoria);

module.exports = router;