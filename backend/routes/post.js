var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Sistema = require('../models/sistemaOperativo');

router.post('/update', (req, res, next)=>{
  var sisOpe = Sistema({
    id: req.body.id,
    nombre: req.body.nombre,
    arquitectura: req.body.arquitectura,
    versionKernel: req.body.versionKernel,
    licencia: req.body.licencia,
    multiusuario: req.body.multiusuario,
    multitareas: req.body.multitareas
  });
  console.log(req.body);
  sisOpe.save((err, data) =>{

    if (err){
      res.send(err);
      console.log(err);
    }else {
      res.send(data);
    }
  });
});

module.exports = router;
