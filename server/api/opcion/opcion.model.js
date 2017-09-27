const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const opcionSchema = new Schema({
  codigo: { type: Number },  
  idModulo: { type: Number },  
  descripcion: { type: String },  
  idDependencia: { type: Number },  
  nombreForma: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  nombrePagina: { type: String },  
  nombrePantalla: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Opcion', opcionSchema);
