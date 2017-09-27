const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoEntidadLaboratorioSchema = new Schema({
  codigoEntidadLaboratorio: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('TipoEntidadLaboratorio', tipoEntidadLaboratorioSchema);
