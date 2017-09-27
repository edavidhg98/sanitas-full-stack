const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const procedimientoCentroCostoSchema = new Schema({
  idCentroCosto: { type: Number },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  tiempoDuracion: { type: Number },  
  idConcepto: { type: Number },  
  fechaRegistro: { type: Date },  
  tiempoAdecuacion: { type: Number },  
  tiempoLimpieza: { type: String },  
  manejaHcresultado: { type: String },  
  honorariosR: { type: String },  
  itemListaTiempoLimpieza: { type: Number },  
  itemListaTipoEncabezado: { type: Number },  

  /** Foreign Fields */
  
  idPrestador: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
procedimientoCentroCostoSchema.virtual('prestador', {
  ref: 'Prestador',
  localField: 'idPrestador',
  foreignField: '_id',
  justOne: true
});
procedimientoCentroCostoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
procedimientoCentroCostoSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ProcedimientoCentroCosto', procedimientoCentroCostoSchema);
