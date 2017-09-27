const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoNovedadSchema = new Schema({
  codigoTipoNovedad: { type: String },  
  descripcion: { type: String },  
  idConcepto: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('TipoNovedad', tipoNovedadSchema);
