const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const triageSchema = new Schema({
  idPaciente: { type: Number },  
  especialidad: { type: String },  
  escDolor: { type: String },  
  fup: { type: Date },  
  descripcionMotivoConsulta: { type: String },  
  partos: { type: Number },  
  idAdmision: { type: Number },  
  clasificacionCalculada: { type: String },  
  abortos: { type: Number },  
  gestacion: { type: String },  
  minutoIngreso: { type: Number },  
  muertos: { type: Number },  
  fechaRegistro: { type: Date },  
  fechaIngreso: { type: Date },  
  observaciones: { type: String },  
  estadoAlarma: { type: String },  
  horaIngreso: { type: Number },  
  fur: { type: Date },  
  loginRegistro: { type: String },  
  alerta: { type: String },  
  tiempoaprox: { type: Number },  
  encabezadoCuestionario: { type: Number },  
  remitidoa: { type: String },  
  cesarias: { type: Number },  
  vivos: { type: Number },  
  clasificacionManual: { type: String },  
  itemListaEstadoTriage: { type: Number },  

  /** Foreign Fields */
  
  idConsultorio: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId },
  idMotivo: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
triageSchema.virtual('consultorio', {
  ref: 'Consultorio',
  localField: 'idConsultorio',
  foreignField: '_id',
  justOne: true
});
triageSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
triageSchema.virtual('motivo', {
  ref: 'Motivo',
  localField: 'idMotivo',
  foreignField: '_id',
  justOne: true
});
triageSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('Triage', triageSchema);
