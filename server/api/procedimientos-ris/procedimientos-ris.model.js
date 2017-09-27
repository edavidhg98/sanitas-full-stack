const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const procedimientosRisSchema = new Schema({
  idSucursal: { type: Number },  
  rownum: { type: Number },  
  itemListaIdEstado: { type: Number },  
  qpqdQpExamkey: { type: String },  
  qpqdQpExsdkey: { type: String },  
  petAotomaticaSiEsUrgente: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  nombreExamen: { type: String },  
  observaciones: { type: String },  
  codigoRis: { type: String },  
  petAutomatica: { type: String },  
  activo: { type: Boolean },  
  codigoHis: { type: String },  
  exKey: { type: Number },  
  exService: { type: Number },  

  /** Foreign Fields */
  
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
procedimientosRisSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ProcedimientosRis', procedimientosRisSchema);
