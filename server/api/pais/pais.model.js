const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paisSchema = new Schema({
  nombrePais: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  codigo: { type: String },  
  gentilicio: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Pais', paisSchema);
