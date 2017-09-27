const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prestadorSchema = new Schema({
  codPreSgs: { type: String },  
  manPines: { type: String },  
  consecutivoNn: { type: Number },  
  manConAutMenedad: { type: String },  
  itemListaTipoDocumento: { type: Number },  
  observaciones: { type: String },  
  tipDocdefec: { type: String },  
  conAnticipo: { type: Number },  
  manAnticipoManual: { type: String },  
  tagDocumento: { type: String },  
  manVolantes: { type: String },  
  manConLocMenedad: { type: String },  
  codInterno: { type: String },  
  manRips: { type: String },  
  proceanalitica: { type: String },  
  moneda: { type: String },  
  auditoria: { type: String },  
  manInterContab: { type: String },  
  director: { type: String },  
  manHisCli: { type: String },  
  concconcepcc: { type: String },  
  telefono: { type: String },  
  imagen: { type: String },  
  direccion: { type: String },  
  itemListaUnidadMedidaTiempo: { type: Number },  
  fax: { type: String },  
  numDoc: { type: String },  
  descripcion: { type: String },  
  consecutivoMenorEdad: { type: Number },  
  codProgIfco: { type: Number },  
  maxintentosPines: { type: Number },  
  manConLocNn: { type: String },  
  fechaRegistro: { type: Date },  
  tieConUrg: { type: Number },  
  codOrigen: { type: String },  
  comportamiento: { type: Number },  
  controlaversion: { type: String },  
  loginRegistro: { type: String },  

  /** Foreign Fields */
  
  idCiudad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
prestadorSchema.virtual('ciudad', {
  ref: 'Ciudad',
  localField: 'idCiudad',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
prestadorSchema.virtual('centroCostoValidos', {
  ref: 'CentroCostoValido',
  localField: '_id',
  foreignField: 'idPrestador'
});
prestadorSchema.virtual('medicamentoAltoCostos', {
  ref: 'MedicamentoAltoCosto',
  localField: '_id',
  foreignField: 'idPrestador'
});
prestadorSchema.virtual('sucursals', {
  ref: 'Sucursal',
  localField: '_id',
  foreignField: 'idPrestador'
});
prestadorSchema.virtual('sustitutoss', {
  ref: 'Sustitutos',
  localField: '_id',
  foreignField: 'idPrestador'
});
prestadorSchema.virtual('procedimientoCentroCostos', {
  ref: 'ProcedimientoCentroCosto',
  localField: '_id',
  foreignField: 'idPrestador'
});
prestadorSchema.virtual('excepcionProductos', {
  ref: 'ExcepcionProducto',
  localField: '_id',
  foreignField: 'idPrestador'
});
prestadorSchema.virtual('prestadorCentroCostoUnicos', {
  ref: 'PrestadorCentroCostoUnico',
  localField: '_id',
  foreignField: 'idPrestador'
});
prestadorSchema.virtual('recargos', {
  ref: 'Recargo',
  localField: '_id',
  foreignField: 'idPrestador'
});

module.exports = mongoose.model('Prestador', prestadorSchema);
