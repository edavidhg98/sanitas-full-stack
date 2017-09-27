const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consumoSoatOtraIpsSchema = new Schema({
  idAdmision: { type: Number },  
  idEntidad: { type: Number },  
  poliza: { type: String },  
  idPaciente: { type: Number },  
  fechaAtencion: { type: Date },  
  nombreIps: { type: String },  
  monto: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  observacionesSoporte: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('ConsumoSoatOtraIps', consumoSoatOtraIpsSchema);
