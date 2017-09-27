const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const porcentajeMedicoSchema = new Schema({
  codigoPorcentaje: { type: String },  
  descripcion: { type: String },  
  porcentaje: { type: Number },  
  observaciones: { type: String },  
  loginRegistro: { type: String },  
  fechaRegistro: { type: Date },  
  loginModificacion: { type: String },  
  fechaModificacion: { type: Date },  
  itemListaEstadoPorcentajeMedico: { type: Number },  
  idPrestador: { type: Number },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('PorcentajeMedico', porcentajeMedicoSchema);
