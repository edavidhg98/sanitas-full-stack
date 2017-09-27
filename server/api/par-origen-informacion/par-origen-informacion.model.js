const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parOrigenInformacionSchema = new Schema({
  codigo: { type: String },  
  descripcion: { type: String },  
  tabla: { type: String },  
  filtro: { type: String },  
  orden: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  identificador: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('ParOrigenInformacion', parOrigenInformacionSchema);
