const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const valeElectronicoSchema = new Schema({
  servicio: { type: String },  
  codigoError: { type: String },  
  descripcionError: { type: String },  
  itemListaEstado: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  pin: { type: String },  
  idAdmision: { type: Number },  
  contrato: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('ValeElectronico', valeElectronicoSchema);
