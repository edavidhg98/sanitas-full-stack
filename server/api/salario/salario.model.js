const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarioSchema = new Schema({
  anno: { type: Number },  
  salarioMinimoLegal: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Salario', salarioSchema);
