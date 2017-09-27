const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carnetSchema = new Schema({
  campo: { type: String },  
  longitud: { type: Number },  
  orden: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Carnet', carnetSchema);
