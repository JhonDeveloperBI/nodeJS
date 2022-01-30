const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

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
 router.post('/',(req,res) =>{
    res.status(200).json('Todo Ok') 
 });

 //actualizar por id - privado - cualquier persona con un token valido
 router.put('/:id',(req,res) =>{
    res.status(200).json('Todo Ok') 
 });
 

 //Borrar categoria solo Admin
 router.delete('/:id',(req,res) =>{
    res.status(200).json('cambiar estado por categoria') 
 });

module.exports = router;