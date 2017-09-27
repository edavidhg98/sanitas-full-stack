const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entidadSchema = new Schema({
  entidad: { type: String },  
  manPaqNoQuirur: { type: String },  
  fechaConvenio: { type: Date },  
  numCortesMes: { type: Number },  
  tiempoCubOdontologico: { type: Number },  
  observaciones: { type: String },  
  manWebNuevo: { type: String },  
  direccion: { type: String },  
  topLiqCirugia: { type: Number },  
  valorMaximoLiquidacion: { type: Number },  
  loginRegistro: { type: String },  
  montoxproce: { type: String },  
  manConvMed: { type: String },  
  manejaPorcentajeIncremento: { type: Number },  
  responsable: { type: String },  
  manprogcronicos: { type: String },  
  pedAutoriza: { type: String },  
  manejaCorteAnual: { type: String },  
  manTopes: { type: String },  
  manNuevaAfiliacion: { type: String },  
  itemListaUnidadMedidaUrgencia: { type: Number },  
  codBarrDigCtrl: { type: String },  
  itemListaUnidadMedidaExterna: { type: Number },  
  codBarrasCarnet: { type: String },  
  nroMedFor: { type: Number },  
  bdEstadoExt: { type: String },  
  itemListaUnidadMedidaOdontologia: { type: Number },  
  manTopPor: { type: String },  
  caduForMedicame: { type: Number },  
  manejaCopago: { type: String },  
  maxentregasformulacronicos: { type: Number },  
  manejaProteccionDatos: { type: String },  
  planobh: { type: String },  
  conSinConv: { type: String },  
  tiempoCubVez: { type: Number },  
  caduForProced: { type: Number },  
  numDoc: { type: String },  
  confirmacionManual: { type: String },  
  manejaMedFamiliar: { type: String },  
  email: { type: String },  
  vlrTopPor: { type: Number },  
  fax: { type: String },  
  fechaRegistro: { type: Date },  
  cargos: { type: String },  
  tiempoObserva: { type: Number },  
  verEstadoPac: { type: String },  
  itemListaUnidadMedidaPrimeraVez: { type: Number },  
  itemListaUnidadMedidaObservacion: { type: Number },  
  tiempoCubUrg: { type: Number },  
  telefono: { type: String },  
  dirIpEntidad: { type: String },  
  itemListaTipoUsuario: { type: Number },  
  valorMinimoLiquidacion: { type: Number },  
  manejaRecaudo: { type: String },  
  manejaCorte: { type: String },  
  noCargos: { type: Number },  
  caduForProcedqx: { type: Number },  
  convenioInter: { type: String },  
  codBarrasDoc: { type: String },  
  pedAutMedicame: { type: String },  
  manejaCapitacion: { type: String },  
  nivValPrimeravez: { type: String },  
  entidadOsi: { type: String },  
  itemListaTipoDocumento: { type: Number },  
  itemListaTipoEntidad: { type: Number },  
  manCapitacionodo: { type: String },  
  tiempoCubExt: { type: Number },  
  numDiascalend: { type: Number },  
  manCita: { type: String },  
  codInterno: { type: String },  
  descripcion: { type: String },  

  /** Foreign Fields */
  
  idCiudad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
entidadSchema.virtual('ciudad', {
  ref: 'Ciudad',
  localField: 'idCiudad',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
entidadSchema.virtual('anticipos', {
  ref: 'Anticipo',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('auditoriaContratos', {
  ref: 'AuditoriaContrato',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('camaPlans', {
  ref: 'CamaPlan',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('cargoAutomaticos', {
  ref: 'CargoAutomatico',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('cargosPendientess', {
  ref: 'CargosPendientes',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('citaRetrasos', {
  ref: 'CitaRetraso',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('detalleCargosPendientess', {
  ref: 'DetalleCargosPendientes',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('entidadUvrs', {
  ref: 'EntidadUvr',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('epsRecobrables', {
  ref: 'EpsRecobrable',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('excepcionRegargos', {
  ref: 'ExcepcionRegargo',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('homologacionServiciosAgfas', {
  ref: 'HomologacionServiciosAgfa',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('pacienteInconsistenciass', {
  ref: 'PacienteInconsistencias',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('procedimientoEntidads', {
  ref: 'ProcedimientoEntidad',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('recalculoAutomaticos', {
  ref: 'RecalculoAutomatico',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('sucursals', {
  ref: 'Sucursal',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('sucursalEntidads', {
  ref: 'SucursalEntidad',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('tipoCirugias', {
  ref: 'TipoCirugia',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('tipoPlans', {
  ref: 'TipoPlan',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('entidadAdmisions', {
  ref: 'EntidadAdmision',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('excepcionProductos', {
  ref: 'ExcepcionProducto',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('grupoEtareos', {
  ref: 'GrupoEtareo',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('homologacionEntidads', {
  ref: 'HomologacionEntidad',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('homologacionEntidad1s', {
  ref: 'HomologacionEntidad',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('medicamentoAltoCostos', {
  ref: 'MedicamentoAltoCosto',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('planess', {
  ref: 'Planes',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('recargoAutomaticos', {
  ref: 'RecargoAutomatico',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('tiposDocumentoEntidads', {
  ref: 'TiposDocumentoEntidad',
  localField: '_id',
  foreignField: 'idEntidad'
});
entidadSchema.virtual('triages', {
  ref: 'Triage',
  localField: '_id',
  foreignField: 'idEntidad'
});

module.exports = mongoose.model('Entidad', entidadSchema);
