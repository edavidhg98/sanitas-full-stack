const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aliasTipoDocumentoSchema = new Schema({
  itemListaTipoDocumento: { type: Number },  
  aliasBukeala: { type: Number },  
  aliasContabilidad: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  aliasCe: { type: String },  
  aliasbh: { type: String },  
  jerarquia: { type: Number },  
  aliasDispen: { type: String },  
  aliasValidador: { type: String },  
  nuevo: { type: String },  
  aliasPines: { type: String },  
  aliasCliente: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('AliasTipoDocumento', aliasTipoDocumentoSchema);
