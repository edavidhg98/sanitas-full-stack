const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parFormularioSchema = new Schema({
  nombre: { type: String },  
  titulo: { type: String },  
  nombreTabla: { type: String },  
  estadoFormulario: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('ParFormulario', parFormularioSchema);
