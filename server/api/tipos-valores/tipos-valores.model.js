const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tiposValoresSchema = new Schema({
  idPrestador: { type: Number },  
  codigo: { type: Number },  
  descripcion: { type: String },  
  cantidad: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  idItemListaEstadocyf: { type: Number },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('TiposValores', tiposValoresSchema);
