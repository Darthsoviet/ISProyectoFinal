var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var SistemaOperativo = require('../models/sistemaOperativo');

//obtener todos
router.get('/so', function(req, res, next) {
  SistemaOperativo.find({},function(err,data){
    res.json(data);
  });
});

//obtener uno por id
router.get('/so/:id',(req,res,next)=>{
	SistemaOperativo.findOne({
		'id':req.params.id
	},(err,data)=>{
		if(data == null){
			res.status(404).json({mensaje:"No existe"});
		}else{
			res.status(200).json(data);
		}
	});
});


module.exports = router;
