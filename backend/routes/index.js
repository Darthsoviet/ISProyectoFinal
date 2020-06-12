var express = require('express');
var router = express.Router();

const Sistema = require('../models/sistemaOperativo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Inicia Patch - Nieto

router.get('/patch/:id', async (req, res, next) => {
  const { id } = req.params;
  const sistema = Sistema.findById(id);

  // En esta sección del código se renderiza la página que contenga el formulario de actulización del documento
  /*res.render('AQUI VA NOMBRE VIEW'){
    sistema
  }*/
});

router.get('/patch/', (req, res, next) => {
  res.status(405).json({Aviso:"Error.Necesitas especificar el 'id' del Sistema Operativo que deseas modificar "})
});

router.post('/update/:id', async (req, res, next) => {
  const { id } = req.params;
  await Sistema.updateOne({ _id: id }, req.body, (err, info) => {
    if (err) res.status(404).json({ Aviso: "Error. No se ha podido modificar el documento" });
    else {
      if (info == null) res.status(404).json({ Aviso: "Error. No existe el 'id' que deseas modificar" });
      else res.status(200).json({ Aviso: "Se ha modificado el S.O. de forma eficaz" });
    }
  });
  res.redirect('/');
});

// Fin patch - Nieto




module.exports = router;
