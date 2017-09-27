const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const autorizacionBhSchema = new Schema({
  idAdmision: { type: Number },  
  numeroAutorizacion: { type: String },  
  codigoInternoEntidad: { type: String },  
  codigoPlan: { type: String },  
  codigoContrato: { type: String },  
  codigoFamilia: { type: String },  
  codigoUsuario: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  procedimientoServicio: { type: String },  

  /** Foreign Fields */
  
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
autorizacionBhSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('AutorizacionBh', autorizacionBhSchema);
