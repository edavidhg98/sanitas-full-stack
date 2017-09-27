const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const camaSchema = new Schema({
  cama: { type: String },  
  itemListaEstadoCama: { type: Number },  
  descripcion: { type: String },  
  numExt: { type: Number },  
  fecPosEgr: { type: Date },  
  horPosEgr: { type: Number },  
  minPosEgr: { type: Number },  
  carHab: { type: String },  
  fecRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idFotoEstadoCama: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId },
  idProcedimiento1: { type: Schema.Types.ObjectId },
  idSeccion: { type: Schema.Types.ObjectId },
  idTipoCama: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
camaSchema.virtual('fotoEstadoCama', {
  ref: 'FotoEstadoCama',
  localField: 'idFotoEstadoCama',
  foreignField: '_id',
  justOne: true
});
camaSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
camaSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});
camaSchema.virtual('procedimiento1', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});
camaSchema.virtual('seccion', {
  ref: 'Seccion',
  localField: 'idSeccion',
  foreignField: '_id',
  justOne: true
});
camaSchema.virtual('tipoCama', {
  ref: 'TipoCama',
  localField: 'idTipoCama',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
camaSchema.virtual('admisionObservacioness', {
  ref: 'AdmisionObservaciones',
  localField: '_id',
  foreignField: 'idCama'
});
camaSchema.virtual('censoHistoricos', {
  ref: 'CensoHistorico',
  localField: '_id',
  foreignField: 'idCama'
});
camaSchema.virtual('censoTraslados', {
  ref: 'CensoTraslado',
  localField: '_id',
  foreignField: 'idCama'
});
camaSchema.virtual('censoTraslado1s', {
  ref: 'CensoTraslado',
  localField: '_id',
  foreignField: 'idCama'
});
camaSchema.virtual('camaPlans', {
  ref: 'CamaPlan',
  localField: '_id',
  foreignField: 'idCama'
});

module.exports = mongoose.model('Cama', camaSchema);
