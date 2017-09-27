const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const procedimientoSchema = new Schema({
  procedim: { type: String },  
  porCopago: { type: Number },  
  factores: { type: String },  
  osi: { type: String },  
  aliasCups: { type: String },  
  fechaRegistro: { type: Date },  
  codSispro: { type: String },  
  tieAdecuacion: { type: Number },  
  manCopago: { type: String },  
  biopsia: { type: String },  
  injertos: { type: String },  
  codigoOsi: { type: String },  
  tieDuracion: { type: Number },  
  aliasIss: { type: String },  
  itemListaSexo: { type: Number },  
  uvr: { type: Number },  
  observaciones: { type: String },  
  itemListaTipoBilateralidad: { type: Number },  
  desSispro: { type: String },  
  autPaciente: { type: String },  
  ordenahc: { type: String },  
  edadIni: { type: Number },  
  idEspecialidadInterconsulta: { type: Number },  
  loginRegistro: { type: String },  
  descripcion: { type: String },  
  edadFin: { type: Number },  
  finalidad: { type: String },  
  categoria: { type: String },  
  patologia: { type: String },  
  forConsent: { type: Number },  
  tieLimpieza: { type: String },  
  alias: { type: String },  
  bilateral: { type: String },  
  clase: { type: String },  
  flagPos: { type: String },  
  obsConsent: { type: String },  
  obsSis: { type: String },  
  nivProced: { type: String },  
  itemListaTipoProcedimiento: { type: Number },  

  /** Foreign Fields */
  
  idSubGrupoProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
procedimientoSchema.virtual('subGrupoProcedimiento', {
  ref: 'SubGrupoProcedimiento',
  localField: 'idSubGrupoProcedimiento',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
procedimientoSchema.virtual('anticipos', {
  ref: 'Anticipo',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('auditoriaSolicituds', {
  ref: 'AuditoriaSolicitud',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('autorizacionBhs', {
  ref: 'AutorizacionBh',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('camas', {
  ref: 'Cama',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('cama1s', {
  ref: 'Cama',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('cargoAutomaticos', {
  ref: 'CargoAutomatico',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('consultaExternaPyps', {
  ref: 'ConsultaExternaPyp',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('detalleCargosPendientess', {
  ref: 'DetalleCargosPendientes',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('encabezadoResultados', {
  ref: 'EncabezadoResultado',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('excepcionRegargos', {
  ref: 'ExcepcionRegargo',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('procedimientoConvenioCapitados', {
  ref: 'ProcedimientoConvenioCapitado',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('procedimientoEntidads', {
  ref: 'ProcedimientoEntidad',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('tipoAnestesias', {
  ref: 'TipoAnestesia',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('procedimientoCentroCostos', {
  ref: 'ProcedimientoCentroCosto',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('procedimientoNivels', {
  ref: 'ProcedimientoNivel',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('procedimientoNivel1s', {
  ref: 'ProcedimientoNivel',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('procedimientosRiss', {
  ref: 'ProcedimientosRis',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('pypProcedimientoProgramas', {
  ref: 'PypProcedimientoPrograma',
  localField: '_id',
  foreignField: 'idProcedimiento'
});
procedimientoSchema.virtual('procedimientoFinalidads', {
  ref: 'ProcedimientoFinalidad',
  localField: '_id',
  foreignField: 'idProcedimiento'
});

module.exports = mongoose.model('Procedimiento', procedimientoSchema);
