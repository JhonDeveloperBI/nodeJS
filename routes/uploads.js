const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen } = require('../controllers/upload');
const { validarArchivoSubir } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');
const { coleccionesPermitidas } = require('../helpers');

const router = Router();

router.post( '/', validarArchivoSubir, cargarArchivo );

router.put('/:coleccion/:id', [
    validarArchivoSubir,
    check('id','El id debe de ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','productos'] ) ), //coleccion recibida en el endpoint
    validarCampos
], actualizarImagen ) //actualizarImagenCloudinary
// ], actualizarImagen )



module.exports = router;