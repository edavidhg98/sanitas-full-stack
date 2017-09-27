const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const procedimientoNivelSchema = new Schema({
  fechaInicial: { type: Date },  
  fechaFinal: { type: Date },  
  nivel: { type: String },  
  idCentroCosto: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idProcedimiento: { type: Schema.Types.ObjectId },
  idProcedimiento1: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
procedimientoNivelSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});
procedimientoNivelSchema.virtual('procedimiento1', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});
procedimientoNivelSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ProcedimientoNivel', procedimientoNivelSchema);
