var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var SistemaOperativo = require('../models/sistemaOperativo');

//obtener toda la coleccion
router.get('/so', function(req, res, next) {
  SistemaOperativo.find({},function(err,data){
    res.json(data);
  });
});




module.exports = router;
