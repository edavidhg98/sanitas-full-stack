const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consultorioSchema = new Schema({
  itemListaTipoConsultorio: { type: Number },  
  consultorio: { type: String },  
  descripcion: { type: String },  
  turno: { type: Number },  
  dirIp: { type: String },  
  conUrgencia: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  itemListaEstadoConsultorio: { type: Number },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
consultorioSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
consultorioSchema.virtual('trazabilidadAdmisions', {
  ref: 'TrazabilidadAdmision',
  localField: '_id',
  foreignField: 'idConsultorio'
});
consultorioSchema.virtual('triages', {
  ref: 'Triage',
  localField: '_id',
  foreignField: 'idConsultorio'
});

module.exports = mongoose.model('Consultorio', consultorioSchema);
