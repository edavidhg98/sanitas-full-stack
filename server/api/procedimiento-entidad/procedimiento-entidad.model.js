const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const procedimientoEntidadSchema = new Schema({
  autoriza: { type: String },  
  autorizaConsultaexterna: { type: String },  
  loginRegistro: { type: String },  
  autorizaCirugia: { type: String },  
  autorizaProcedimientos: { type: String },  
  autorizaUrgencias: { type: String },  
  idPrestador: { type: Number },  
  itemListaEstadoProcxent: { type: Number },  
  fechaRegistro: { type: Date },  
  flagUvr: { type: String },  
  aplicaValorUvr: { type: String },  
  flagEgresa: { type: String },  
  itemListaAutorizaProcxent: { type: Number },  
  observaciones: { type: String },  
  autorizaHospitalizacion: { type: String },  
  atributoBh: { type: Number },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
procedimientoEntidadSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
procedimientoEntidadSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ProcedimientoEntidad', procedimientoEntidadSchema);
