var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Sistema = require('../models/sistemaOperativo');

router.delete('/sistemasOperativos',(requisito,respuesta,siguiente)=>{
    respuesta.status(405).json({Aviso:"Necesitas especificar el 'id' del Sistema Operrativo que deseas eliminar "})
});

router.delete('/sistemasOperativos/:idSO',(requisito,respuesta,siguiente)=>{
    Sistema.findOneAndDelete({_id:requisito.params.idSO},(error,informacion)=>{
        if (informacion==null) respuesta.status(404).json({Error:"No existe el 'id' que deseas eliminar"});
        //if (error) respuesta.status(404).json({Advertencia:"No exite el 'id' que buscas"});
        else respuesta.status(200).json(informacion);
        //else respuesta.status(200).json({Exito:"Se ha eliminado el S.O. de forma eficaz"});
    });
    
});

module.exports = router;