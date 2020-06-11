var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Sistema = require('../models/sistemaOperativo');

router.get('/sistemasOperativos/:match',(req,res)=>{
    Sistema.find({
        "$match" : {
            "nombre" : req.params.match
        }
    },(error , dato ) => {
        res.status(200).json(dato)
    })
});



module.exports = router;