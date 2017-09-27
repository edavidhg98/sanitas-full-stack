const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoAfiliadoSchema = new Schema({
  tipAfiliad: { type: String },  
  descripcion: { type: String },  
  manCopago: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('TipoAfiliado', tipoAfiliadoSchema);
