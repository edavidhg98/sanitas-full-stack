const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subGrupoProcedimientoSchema = new Schema({
  subProced: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idGrupoProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
subGrupoProcedimientoSchema.virtual('grupoProcedimiento', {
  ref: 'GrupoProcedimiento',
  localField: 'idGrupoProcedimiento',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
subGrupoProcedimientoSchema.virtual('medicoGrupoProcedimientos', {
  ref: 'MedicoGrupoProcedimiento',
  localField: '_id',
  foreignField: 'idSubGrupoProcedimiento'
});
subGrupoProcedimientoSchema.virtual('procedimientos', {
  ref: 'Procedimiento',
  localField: '_id',
  foreignField: 'idSubGrupoProcedimiento'
});

module.exports = mongoose.model('SubGrupoProcedimiento', subGrupoProcedimientoSchema);
