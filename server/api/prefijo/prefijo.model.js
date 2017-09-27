const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prefijoSchema = new Schema({
  prefijo: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  piePrefijo: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Prefijo', prefijoSchema);
