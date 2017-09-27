const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calendarioSchema = new Schema({
  fecha: { type: Date },  
  nombreDia: { type: String },  
  festivo: { type: Boolean },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  pruebaRango: { type: Number },  
  activo: { type: Boolean },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Calendario', calendarioSchema);
