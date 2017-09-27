const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const auditoriaSolicitudSchema = new Schema({
  idAdmision: { type: Number },  
  numeroSolicitud: { type: String },  
  idMedico: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
auditoriaSolicitudSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('AuditoriaSolicitud', auditoriaSolicitudSchema);
