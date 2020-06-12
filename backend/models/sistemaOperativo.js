const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SistemaOperativoSchema = new Schema({
  nombre: String,
  arquitectura: String,
  versionKernel: String,
  licencia: String,
  multiusuario: Boolean,
  multitareas: Boolean,
});

module.exports = mongoose.model('Sistema', SistemaOperativoSchema);
