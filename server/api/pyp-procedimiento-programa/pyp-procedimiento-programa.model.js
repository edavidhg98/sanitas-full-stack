const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pypProcedimientoProgramaSchema = new Schema({
  idAdmision: { type: Number },  
  edadini: { type: Number },  
  edadfin: { type: Number },  
  uniMedEdad: { type: String },  
  itemListaSexo: { type: Number },  
  frecuencia: { type: Number },  
  cantidad: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idMotivo: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId },
  idPypProgramas: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
pypProcedimientoProgramaSchema.virtual('motivo', {
  ref: 'Motivo',
  localField: 'idMotivo',
  foreignField: '_id',
  justOne: true
});
pypProcedimientoProgramaSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});
pypProcedimientoProgramaSchema.virtual('pypProgramas', {
  ref: 'PypProgramas',
  localField: 'idPypProgramas',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('PypProcedimientoPrograma', pypProcedimientoProgramaSchema);
