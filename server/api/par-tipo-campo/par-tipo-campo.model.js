const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parTipoCampoSchema = new Schema({
  descripcionTipo: { type: String },  
  estadoTipoCampo: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('ParTipoCampo', parTipoCampoSchema);
