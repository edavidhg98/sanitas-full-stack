const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const auditoriaEstadoAdmisionSchema = new Schema({
  idAdmision: { type: Number },  
  itemListaEstadoAnterior: { type: Number },  
  itemListaEstadoNuevo: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('AuditoriaEstadoAdmision', auditoriaEstadoAdmisionSchema);
