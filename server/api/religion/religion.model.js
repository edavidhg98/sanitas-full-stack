const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const religionSchema = new Schema({
  religion: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  orden: { type: Number },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('Religion', religionSchema);
