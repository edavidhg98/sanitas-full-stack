const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homologacionServiciosAgfaSchema = new Schema({
  codigoSophia: { type: String },  
  codigoGrabacionAgfa: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  itemListaEstadoHomologaServicioAgfa: { type: Number },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
homologacionServiciosAgfaSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
homologacionServiciosAgfaSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('HomologacionServiciosAgfa', homologacionServiciosAgfaSchema);
