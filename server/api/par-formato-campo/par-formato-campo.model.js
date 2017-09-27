const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parFormatoCampoSchema = new Schema({
  longitudTexto: { type: Number },  
  formatoFecha: { type: String },  
  rangoMinimo: { type: Number },  
  rangoMaximo: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  expresionRegular: { type: String },  
  esDecimal: { type: String },  
  esNegativo: { type: String },  
  descripcion: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('ParFormatoCampo', parFormatoCampoSchema);
