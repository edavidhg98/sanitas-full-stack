const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoPlanSchema = new Schema({
  tipPlan: { type: String },  
  descripcion: { type: String },  
  valModerado: { type: Number },  
  valCopago: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
tipoPlanSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
tipoPlanSchema.virtual('camaPlans', {
  ref: 'CamaPlan',
  localField: '_id',
  foreignField: 'idTipoPlan'
});
tipoPlanSchema.virtual('tiposDocumentoEntidads', {
  ref: 'TiposDocumentoEntidad',
  localField: '_id',
  foreignField: 'idTipoPlan'
});

module.exports = mongoose.model('TipoPlan', tipoPlanSchema);
