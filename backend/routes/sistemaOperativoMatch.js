var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Sistema = require('../models/sistemaOperativo');
router.get('/sistemasOperativos/nombre/:match',(req,res)=>{

    Sistema.find({"nombre":{"$regex":req.params.match}},( err,dato ) => {
            if(err){
                res.status(400)
            }
            res.status(200).json(dato)
        })
    


    })
module.exports = router;