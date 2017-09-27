const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const auditoriaContratoSchema = new Schema({
  idAdmision: { type: Number },  
  carnet: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
auditoriaContratoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('AuditoriaContrato', auditoriaContratoSchema);
