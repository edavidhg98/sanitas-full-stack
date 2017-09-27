const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ocupacionSchema = new Schema({
  codigoOcupacion: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  itemListaEstadoOcupacion: { type: Number },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Ocupacion', ocupacionSchema);
