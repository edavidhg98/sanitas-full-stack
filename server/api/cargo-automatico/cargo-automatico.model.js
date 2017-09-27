const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cargoAutomaticoSchema = new Schema({
  codigoInteligente: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  itemListaEstadoCargo: { type: Number },  
  idPrestador: { type: Number },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
cargoAutomaticoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
cargoAutomaticoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
cargoAutomaticoSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('CargoAutomatico', cargoAutomaticoSchema);
