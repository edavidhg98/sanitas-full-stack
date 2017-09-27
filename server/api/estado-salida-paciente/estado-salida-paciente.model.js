const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const estadoSalidaPacienteSchema = new Schema({
  idAdmision: { type: Number },  
  itemListaEstadoSalidaPaciente: { type: Number },  
  itemListaTipoHcRegistra: { type: Number },  
  obsSalida: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('EstadoSalidaPaciente', estadoSalidaPacienteSchema);
