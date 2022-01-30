const { Router } = require('express');
const { check } = require('express-validator');
const { crearCategoria } = require('../controllers/categorias');
const { validarJWT, validarCampos } = require('../middlewares');

const router = Router();


/**
 * {{ url}}/api/categorias
 */
//obtener todas las categorias
router.get('/',(req,res) =>{
   res.status(200).json('Todo Ok') 
});

//obtener categoria por id
router.get('/:id',(req,res) =>{
    res.status(200).json('Todo Ok') 
 });

 //crear Categoria - privado - cualquier persona con un token valido
 router.post('/',[
   validarJWT,
   check('nombre','El nombre es obligatorio'),
   validarCampos
],crearCategoria);

 //actualizar por id - privado - cualquier persona con un token valido
 router.put('/:id',(req,res) =>{
    res.status(200).json('Todo Ok') 
 });
 

 //Borrar categoria solo Admin
 router.delete('/:id',(req,res) =>{
    res.status(200).json('cambiar estado por categoria') 
 });

module.exports = router;