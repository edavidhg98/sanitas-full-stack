const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sucursalEntidadSchema = new Schema({
  porcentajeMinAnticipo: { type: Number },  
  manejaPenalizaInasistencia: { type: String },  
  cantidadHorasObservacion: { type: Number },  
  observaciones: { type: String },  
  cantidadMinutosObservacion: { type: Number },  
  itemListaTipoUsuario: { type: Number },  
  manejaPaqueteUrgencia: { type: String },  
  usaAfirma: { type: String },  
  idItemListaEstadocyfCatalogo: { type: Number },  
  manejaDecimales: { type: String },  
  manejaPenalizaCancelacion: { type: String },  
  idItemListaEstadocyf: { type: Number },  
  minejaTiempoCancelaCita: { type: Number },  
  manejaPyp: { type: String },  
  email: { type: String },  
  horaGeneraReporte: { type: Number },  
  loginRegistro: { type: String },  
  manejaRedondeo: { type: String },  
  verificaEstadoPac: { type: String },  
  fechaRegistro: { type: Date },  
  verificaFoto: { type: String },  
  porcentajeAdicionalAnticipo: { type: Number },  
  itemListaTipoVale: { type: Number },  
  itemListaTipoManejoHoraObs: { type: Number },  
  restringeAdmision: { type: String },  
  valorRedondeo: { type: Number },  

  /** Foreign Fields */
  
  idEncabezadoCatalogo: { type: Schema.Types.ObjectId },
  idMoneda: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
sucursalEntidadSchema.virtual('encabezadoCatalogo', {
  ref: 'EncabezadoCatalogo',
  localField: 'idEncabezadoCatalogo',
  foreignField: '_id',
  justOne: true
});
sucursalEntidadSchema.virtual('moneda', {
  ref: 'Moneda',
  localField: 'idMoneda',
  foreignField: '_id',
  justOne: true
});
sucursalEntidadSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
sucursalEntidadSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
sucursalEntidadSchema.virtual('nivelCargos', {
  ref: 'NivelCargo',
  localField: '_id',
  foreignField: 'idSucursalEntidad'
});
sucursalEntidadSchema.virtual('procedimientoConvenioCapitados', {
  ref: 'ProcedimientoConvenioCapitado',
  localField: '_id',
  foreignField: 'idSucursalEntidad'
});
sucursalEntidadSchema.virtual('tiempoRecargos', {
  ref: 'TiempoRecargo',
  localField: '_id',
  foreignField: 'idSucursalEntidad'
});
sucursalEntidadSchema.virtual('tarifaVacunacions', {
  ref: 'TarifaVacunacion',
  localField: '_id',
  foreignField: 'idSucursalEntidad'
});

module.exports = mongoose.model('SucursalEntidad', sucursalEntidadSchema);
