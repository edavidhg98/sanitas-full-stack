const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parDependenciaCampoSchema = new Schema({
  idParCampoPrincipal: { type: Number },  
  idParCampoDependiente: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('ParDependenciaCampo', parDependenciaCampoSchema);
