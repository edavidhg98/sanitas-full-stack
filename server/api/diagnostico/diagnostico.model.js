const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const diagnosticoSchema = new Schema({
  diagnost: { type: String },  
  edaFin: { type: Number },  
  descripcion: { type: String },  
  loginRegistro: { type: String },  
  edaIni: { type: Number },  
  itemListaEstadoDiagnostico: { type: Number },  
  itemListaClasificacion: { type: Number },  
  cie10Rips: { type: String },  
  itemListaGenero: { type: Number },  
  indicetexto: { type: Number },  
  mortal: { type: Boolean },  
  fechaRegistro: { type: Date },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Diagnostico', diagnosticoSchema);
