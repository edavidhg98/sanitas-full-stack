const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sucursalSchema = new Schema({
  codSucur: { type: String },  
  conFormulacion: { type: Number },  
  manCarAutCe: { type: String },  
  manWscitas: { type: String },  
  conAutRem: { type: Number },  
  manCamPla: { type: String },  
  conForProc: { type: Number },  
  email: { type: String },  
  numDoc: { type: String },  
  manConvemed: { type: String },  
  agfaMerge: { type: String },  
  modFecAdm: { type: String },  
  conRips: { type: Number },  
  difhorservidor: { type: Number },  
  nivInstituc: { type: Number },  
  conCita: { type: Number },  
  consecutivoNn: { type: Number },  
  direccion: { type: String },  
  flagCenso: { type: Boolean },  
  incPedIntefaceAct: { type: String },  
  ordenarGenerico: { type: String },  
  pideCtc: { type: String },  
  manCitaesp: { type: String },  
  tieEspOb: { type: Number },  
  descripcion: { type: String },  
  pedidoManual: { type: String },  
  conCertifisoat: { type: Number },  
  agfaMediweb: { type: String },  
  telefono: { type: String },  
  pedIntefaceAct: { type: String },  
  manRecAut: { type: String },  
  itemListaUnidadMedidaTiempoObservacion: { type: Number },  
  devIntefaceAct: { type: String },  
  sucursalOsi: { type: String },  
  manRedondeo: { type: String },  
  manPrecargos: { type: String },  
  codGrabacionCt: { type: String },  
  anulPedIntefaceAct: { type: String },  
  fechaRegistro: { type: Date },  
  director: { type: String },  
  numConsult: { type: Number },  
  codigorips: { type: String },  
  horMedioDia: { type: Number },  
  manInventario: { type: String },  
  vlrRedondeo: { type: Number },  
  manTriage: { type: String },  
  manEstadoPac: { type: String },  
  conCtacobro: { type: Number },  
  salMinLeg: { type: Number },  
  conCertifihos: { type: Number },  
  conAutoriza: { type: Number },  
  consecutivoMenorEdad: { type: Number },  
  anulSinvalidar: { type: String },  
  manUniAtePri: { type: String },  
  manProtocolos: { type: String },  
  conDietas: { type: Number },  
  agfa: { type: String },  
  manConsAut: { type: String },  
  itemListaTipoDocumento: { type: Number },  
  bloqPedidos: { type: String },  
  fax: { type: String },  
  phd: { type: String },  
  manEnfermeria: { type: String },  
  emailCtc: { type: String },  
  loginRegistro: { type: String },  
  conProgciru: { type: Number },  
  manDigiturno: { type: String },  
  manCarAutUrg: { type: String },  
  codInterno: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idCiudad: { type: Schema.Types.ObjectId },
  idPrestador: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
sucursalSchema.virtual('ciudad', {
  ref: 'Ciudad',
  localField: 'idCiudad',
  foreignField: '_id',
  justOne: true
});
sucursalSchema.virtual('prestador', {
  ref: 'Prestador',
  localField: 'idPrestador',
  foreignField: '_id',
  justOne: true
});
sucursalSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
sucursalSchema.virtual('anticipos', {
  ref: 'Anticipo',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('camas', {
  ref: 'Cama',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('cargoAutomaticos', {
  ref: 'CargoAutomatico',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('cargosPendientess', {
  ref: 'CargosPendientes',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('censoHistoricos', {
  ref: 'CensoHistorico',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('concatenaConceptoPorCentroCostos', {
  ref: 'ConcatenaConceptoPorCentroCosto',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('encabezadoResultados', {
  ref: 'EncabezadoResultado',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('entidadAdmisions', {
  ref: 'EntidadAdmision',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('excepcionRegargos', {
  ref: 'ExcepcionRegargo',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('homologacionServiciosAgfas', {
  ref: 'HomologacionServiciosAgfa',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('loginSucursals', {
  ref: 'LoginSucursal',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('medicamentoAltoCostos', {
  ref: 'MedicamentoAltoCosto',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('medicoGrupoProcedimientos', {
  ref: 'MedicoGrupoProcedimiento',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('numeroSecuencias', {
  ref: 'NumeroSecuencia',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('procedimientoCentroCostos', {
  ref: 'ProcedimientoCentroCosto',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('recalculoAutomaticos', {
  ref: 'RecalculoAutomatico',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('salass', {
  ref: 'Salas',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('sucursalEntidads', {
  ref: 'SucursalEntidad',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('trazabilidadAdmisions', {
  ref: 'TrazabilidadAdmision',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('zonaHorariaVeranos', {
  ref: 'ZonaHorariaVerano',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('censoServicios', {
  ref: 'CensoServicio',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('citaRetrasos', {
  ref: 'CitaRetraso',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('consultorios', {
  ref: 'Consultorio',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('grupoEtareos', {
  ref: 'GrupoEtareo',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('logins', {
  ref: 'Login',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('pedidoss', {
  ref: 'Pedidos',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('procedimientoNivels', {
  ref: 'ProcedimientoNivel',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('seccions', {
  ref: 'Seccion',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('triages', {
  ref: 'Triage',
  localField: '_id',
  foreignField: 'idSucursal'
});
sucursalSchema.virtual('zonaHorarias', {
  ref: 'ZonaHoraria',
  localField: '_id',
  foreignField: 'idSucursal'
});

module.exports = mongoose.model('Sucursal', sucursalSchema);
