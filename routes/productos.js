const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerProducto, 
        obtenerProductos, 
        crearProducto, 
        borrarProducto, 
        actualizarProducto } = require('../controllers/productos');

const { existeProductoPorId } = require('../helpers/db-validators');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');




const router = Router();


/**
 * {{ url}}/api/productos
 */
//obtener todas las categorias
router.get('/',obtenerProductos);

//obtener categoria por id
router.get('/:id',[
   check('id','No es un id de Mongo valido').isMongoId(),
   check('id').custom( existeProductoPorId), 
   validarCampos
],obtenerProducto);

 //crear Categoria - privado - cualquier persona con un token valido
 router.post('/',[
   validarJWT,
   check('nombre','El nombre es obligatorio').not().isEmpty(),
   check('categoria','No es un id de Mongo').isMongoId(),
   validarCampos
],crearProducto);

 //actualizar por id - privado - cualquier persona con un token valido
 router.put('/:id',[
    validarJWT,
   check('id','No es un id de Mongo valido').isMongoId(),
  // check('categoria','No es un id de Mongo valido').isMongoId(),
   check('id').custom( existeProductoPorId),
   validarCampos
 ], actualizarProducto);
 

 //Borrar categoria solo Admin
 router.delete('/:id',[
   validarJWT,
   check('id','No es un id de Mongo valido').isMongoId(),
   check('id').custom( existeProductoPorId),
   esAdminRole,  
   validarCampos
 ],borrarProducto);

module.exports = router;