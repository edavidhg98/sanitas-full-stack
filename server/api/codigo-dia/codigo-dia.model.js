const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const codigoDiaSchema = new Schema({
  fechaDia: { type: Date },  
  codigo: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('CodigoDia', codigoDiaSchema);
