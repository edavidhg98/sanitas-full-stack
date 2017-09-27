const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const motivoSchema = new Schema({
  motivo: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idTipoMotivo: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
motivoSchema.virtual('tipoMotivo', {
  ref: 'TipoMotivo',
  localField: 'idTipoMotivo',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
motivoSchema.virtual('admisionObservacioness', {
  ref: 'AdmisionObservaciones',
  localField: '_id',
  foreignField: 'idMotivo'
});
motivoSchema.virtual('censoTraslados', {
  ref: 'CensoTraslado',
  localField: '_id',
  foreignField: 'idMotivo'
});
motivoSchema.virtual('detalleCargosPendientess', {
  ref: 'DetalleCargosPendientes',
  localField: '_id',
  foreignField: 'idMotivo'
});
motivoSchema.virtual('trazabilidadAdmisions', {
  ref: 'TrazabilidadAdmision',
  localField: '_id',
  foreignField: 'idMotivo'
});
motivoSchema.virtual('trazabilidadAdmision1s', {
  ref: 'TrazabilidadAdmision',
  localField: '_id',
  foreignField: 'idMotivo'
});
motivoSchema.virtual('trazabilidadAdmision2s', {
  ref: 'TrazabilidadAdmision',
  localField: '_id',
  foreignField: 'idMotivo'
});
motivoSchema.virtual('triages', {
  ref: 'Triage',
  localField: '_id',
  foreignField: 'idMotivo'
});
motivoSchema.virtual('subconceptos', {
  ref: 'Subconcepto',
  localField: '_id',
  foreignField: 'idMotivo'
});
motivoSchema.virtual('pypProcedimientoProgramas', {
  ref: 'PypProcedimientoPrograma',
  localField: '_id',
  foreignField: 'idMotivo'
});

module.exports = mongoose.model('Motivo', motivoSchema);
