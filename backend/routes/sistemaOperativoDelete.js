var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Sistema = require('../models/sistemaOperativo');

//Configuración global del DELETE
router.delete('/sistemasOperativos',(requisito,respuesta,siguiente)=>{
    respuesta.status(405).json({Aviso:"Necesitas especificar el 'id' del Sistema Operrativo que deseas eliminar "})
});

//Configuración DELETE de un solo elemento con su _id
router.delete('/sistemasOperativos/individual/:idSO',(requisito,respuesta,siguiente)=>{
    Sistema.findOneAndDelete({_id:requisito.params.idSO},(error,informacion)=>{
        if (informacion==null) respuesta.status(404).json({Error:"No existe el 'id' que deseas eliminar"});
        else respuesta.status(200).json(informacion);
    });
});

//Configuración DELETE de multiples _id con lista interna 
/*router.delete('/sistemasOperativos/multiple',(requisito,respuesta,siguiente)=>{
    Sistema.deleteMany(
        {
          _id: {
            $in: [
                "5ee405fdbfbaf4a9481410ef",
                "5ee40604bfbaf4a9481410f0",
                "5ee40943549fcd42d8c0ceee"
            ]
          }
        }
        
        ,(error,informacion)=>{
            if (error) respuesta.status(404).json({Error:"No se pudieron eliminar los s.o"});
            else respuesta.status(200).json(informacion);
        });
});*/ 

//Configuración DELETE de multiples _id con lista externa
router.delete('/sistemasOperativos/multiple',(requisito,respuesta,siguiente)=>{
    Sistema.deleteMany(
        {
          _id: {
            $in: 
                requisito.body.lista
          }
        }
        ,(error,informacion)=>{
            if (error) respuesta.status(404).json({Error:"No se pudieron eliminar los s.o"});
            else respuesta.status(200).json(informacion);
        });
});

module.exports = router;