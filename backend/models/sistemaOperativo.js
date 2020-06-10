var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sistemaOperativoSchema = Schema({
  id: Number,
  nombre: String,
  arquitectura: String,
  versionKernel: String,
  licencia: String,
  multiusuario: Boolean,
  multitareas: Boolean,
});

module.exports = mongoose.model('SistemaOperativo', sistemaOperativoSchema);
