const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const auditoriaSchema = new Schema({
  fichero: { type: String },  
  tipAcceso: { type: String },  
  idPaciente: { type: Number },  
  loginRegistro: { type: String },  
  fechaRegistro: { type: Date },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Auditoria', auditoriaSchema);
