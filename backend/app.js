var express = require('express');
var path = require('path');
var logger = require('morgan');
let cors = require("cors")
require("dotenv").config();
const moongose= require("mongoose")

const URL = process.env.MONGO ||  
console.log();

moongose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true} ).then(()=>{
      console.log("conectado a la base de datos");
      
   }).catch((e)=>{
      console.log(e)

   })
var app = express();
app.use(cors)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// carga las rutas estaticas de react

app.use(express.static(path.join(__dirname, 'public')));






module.exports = app;
