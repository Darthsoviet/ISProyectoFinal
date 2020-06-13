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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// carga las rutas estaticas de react

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.use('/api/v1',require('./routes/sistemasOperativos'));

app.use('/api/v1/get',require('./routes/metGet'));

app.use('/api/v1/delete',require('./routes/sistemaOperativoDelete'));

app.use('/api/v1/get',require('./routes/sistemaOperativoMatch'));

app.use('/api/v1/post', require('./routes/sistemaOperativoPost'));


module.exports = app;
