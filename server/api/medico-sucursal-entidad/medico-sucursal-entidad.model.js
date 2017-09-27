const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicoSucursalEntidadSchema = new Schema({
  idSucursal: { type: Number },  
  idMedico: { type: Number },  
  idEspecialidad: { type: Number },  
  idEntidad: { type: Number },  
  idItemListaMedicoFamiliar: { type: Number },  
  idItemListaFormulaCronicos: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  idItemListaMedicoCitasweb: { type: Number },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('MedicoSucursalEntidad', medicoSucursalEntidadSchema);
