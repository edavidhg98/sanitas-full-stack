const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const institucionSchema = new Schema({
  codigoInstitucion: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Institucion', institucionSchema);
