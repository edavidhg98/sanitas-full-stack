const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trazabilidadAdmisionListaEsperaHistoriaClinicaSchema = new Schema({
  idListaEsperaHistoriaClinica: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idTrazabilidadAdmision: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
trazabilidadAdmisionListaEsperaHistoriaClinicaSchema.virtual('trazabilidadAdmision', {
  ref: 'TrazabilidadAdmision',
  localField: 'idTrazabilidadAdmision',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('TrazabilidadAdmisionListaEsperaHistoriaClinica', trazabilidadAdmisionListaEsperaHistoriaClinicaSchema);
