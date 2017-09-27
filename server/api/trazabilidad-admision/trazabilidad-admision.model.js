const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trazabilidadAdmisionSchema = new Schema({
  idAdmision: { type: Number },  
  itemListaDestinoListaEspera: { type: Number },  
  horaIngreso: { type: Number },  
  numAdm: { type: Number },  
  fechaIngreso: { type: Date },  
  loginEgreso: { type: String },  
  ingresoconcita: { type: String },  
  itemListaViaIngreso: { type: Number },  
  minutoIngreso: { type: Number },  
  consecutivoFur: { type: Number },  
  idMedicoEgreso: { type: Number },  
  loginCreacion: { type: String },  
  itemListaDestinoFinal: { type: Number },  
  codigoCita: { type: String },  
  diasEstancia: { type: Number },  
  leyProteccionDatos: { type: String },  
  horaEgreso: { type: Number },  
  consultaProgramada: { type: String },  
  idMedicoTratante: { type: Number },  
  flagInconsistencia: { type: String },  
  fechaEgreso: { type: Date },  
  anoAdm: { type: Number },  
  idMedicoHospitaliza: { type: Number },  
  login: { type: String },  
  itemListaEstadoAdmision: { type: Number },  
  fechaRegistro: { type: Date },  
  consecutivoAtencion: { type: Number },  
  observaciones: { type: String },  
  conPriVez: { type: String },  
  itemListaFlagFacturado: { type: Number },  
  minutoEgreso: { type: Number },  
  ipRegistro: { type: String },  
  idEspecialidad: { type: Number },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId },
  idTipoAdmision: { type: Schema.Types.ObjectId },
  idConsultorio: { type: Schema.Types.ObjectId },
  idMotivo: { type: Schema.Types.ObjectId },
  idMotivo1: { type: Schema.Types.ObjectId },
  idMotivo2: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
trazabilidadAdmisionSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
trazabilidadAdmisionSchema.virtual('tipoAdmision', {
  ref: 'TipoAdmision',
  localField: 'idTipoAdmision',
  foreignField: '_id',
  justOne: true
});
trazabilidadAdmisionSchema.virtual('consultorio', {
  ref: 'Consultorio',
  localField: 'idConsultorio',
  foreignField: '_id',
  justOne: true
});
trazabilidadAdmisionSchema.virtual('motivo', {
  ref: 'Motivo',
  localField: 'idMotivo',
  foreignField: '_id',
  justOne: true
});
trazabilidadAdmisionSchema.virtual('motivo1', {
  ref: 'Motivo',
  localField: 'idMotivo',
  foreignField: '_id',
  justOne: true
});
trazabilidadAdmisionSchema.virtual('motivo2', {
  ref: 'Motivo',
  localField: 'idMotivo',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
trazabilidadAdmisionSchema.virtual('trazabilidadAdmisionListaEsperaHistoriaClinicas', {
  ref: 'TrazabilidadAdmisionListaEsperaHistoriaClinica',
  localField: '_id',
  foreignField: 'idTrazabilidadAdmision'
});
trazabilidadAdmisionSchema.virtual('trazabilidadAdmisionCargoss', {
  ref: 'TrazabilidadAdmisionCargos',
  localField: '_id',
  foreignField: 'idTrazabilidadAdmision'
});

module.exports = mongoose.model('TrazabilidadAdmision', trazabilidadAdmisionSchema);
