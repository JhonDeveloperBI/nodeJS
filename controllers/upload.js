const { response } = require("express");
const { subirArchivo } = require("../helpers");

const cargarArchivo = async (req, res =response) =>{
 
    try {
        
        // txt, md
        // const nombre = await subirArchivo( req.files, ['txt','md'], 'textos' ); //this part
        const nombre = await subirArchivo( req.files, undefined, 'imgs' );
        res.status(200).json({ 
            nombre 
        })

    } catch (msg) {
        //bad request
        res.status(400).json({
             msg 
        });
    }

}

module.exports ={
    cargarArchivo
}