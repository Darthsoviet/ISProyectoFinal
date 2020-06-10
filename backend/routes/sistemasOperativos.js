var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var SistemaOperativo = require('../models/sistemaOperativo');


router.delete('/sistemasOperativos',(requisito,respuesta,siguiente)=>{
    respuesta.status(405).json({Aviso:"Necesitas especificar el 'id' del Sistema Operrativo que deseas eliminar "})
});

router.delete('/sistemasOperativos/:id',(requisito,respuesta,siguiente)=>{
    SistemaOperativo.findOneAndDelete({id:requisito.params.id},(error,informacion)=>{
        if (error) respuesta.status(404).json({Aviso:"No hemos encontrado el Sistema Operativo requerido"});
        else respuesta.status(200).json({Exito:"Hemos logrado eliminar el S.O. de la lista"});
    });
});

module.exports = router;
