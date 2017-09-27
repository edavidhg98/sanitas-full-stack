const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pacienteInconsistenciasSchema = new Schema({
  numDoc: { type: String },  
  numDocExterno: { type: String },  
  tipDoc: { type: String },  
  nom1Externo: { type: String },  
  nombre: { type: String },  
  nombreExterno: { type: String },  
  sexoExterno: { type: String },  
  fecNacExterno: { type: Date },  
  tipoFecnac: { type: String },  
  tipDocExterno: { type: String },  
  contrato: { type: String },  
  appInterna: { type: String },  
  appExterna: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  tipoTipdoc: { type: String },  
  nom1: { type: String },  
  tipoApel2: { type: String },  
  nom2Externo: { type: String },  
  apel2: { type: String },  
  nom2: { type: String },  
  observaciones: { type: String },  
  apel1Externo: { type: String },  
  apel2Externo: { type: String },  
  numInfo: { type: Number },  
  idSucursal: { type: Number },  
  fecNac: { type: Date },  
  sexo: { type: String },  
  tipoNumdoc: { type: String },  
  tipoNom1: { type: String },  
  apel1: { type: String },  
  tipoApel1: { type: String },  
  tipoInconsistencia: { type: String },  
  tipoNom: { type: String },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
pacienteInconsistenciasSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('PacienteInconsistencias', pacienteInconsistenciasSchema);
