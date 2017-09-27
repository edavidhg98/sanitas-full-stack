const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productoSchema = new Schema({
  codCorto: { type: String },  
  descripcion: { type: String },  
  itemListaFlagGenerico: { type: Number },  
  codCums: { type: String },  
  loginRegistro: { type: String },  
  codBarras: { type: String },  
  nivelMedicam: { type: String },  
  descripcionPa: { type: String },  
  codPos: { type: String },  
  contenido: { type: Number },  
  idConcepto: { type: Number },  
  idPresentacionProducto: { type: Number },  
  idConceptoNoPos: { type: Number },  
  itemListaFormaFarmaceutica: { type: Number },  
  desGenerico: { type: String },  
  fechaRegistro: { type: Date },  
  codInteligente: { type: String },  
  codHijo: { type: String },  
  itemListaMedicamentoControlado: { type: Number },  
  itemListaEstado: { type: Number },  
  itemListaMedicamentoMater: { type: Number },  
  desCorta: { type: String },  
  itemListaReutilizable: { type: Number },  
  observaciones: { type: String },  
  concentracion: { type: String },  
  itemListaFlagPos: { type: Number },  
  codAlea: { type: String },  
  itemListaModoDespacho: { type: Number },  

  /** Foreign Fields */
  
  idUnidadMedidaPedido: { type: Schema.Types.ObjectId },
  idUnidadMedidaPedido1: { type: Schema.Types.ObjectId },
  idUnidadMedidaPedido2: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
productoSchema.virtual('unidadMedidaPedido', {
  ref: 'UnidadMedidaPedido',
  localField: 'idUnidadMedidaPedido',
  foreignField: '_id',
  justOne: true
});
productoSchema.virtual('unidadMedidaPedido1', {
  ref: 'UnidadMedidaPedido',
  localField: 'idUnidadMedidaPedido',
  foreignField: '_id',
  justOne: true
});
productoSchema.virtual('unidadMedidaPedido2', {
  ref: 'UnidadMedidaPedido',
  localField: 'idUnidadMedidaPedido',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
productoSchema.virtual('medicamentoAltoCostos', {
  ref: 'MedicamentoAltoCosto',
  localField: '_id',
  foreignField: 'idProducto'
});
productoSchema.virtual('sustitutoss', {
  ref: 'Sustitutos',
  localField: '_id',
  foreignField: 'idProducto'
});
productoSchema.virtual('sustitutos1s', {
  ref: 'Sustitutos',
  localField: '_id',
  foreignField: 'idProducto'
});
productoSchema.virtual('excepcionProductos', {
  ref: 'ExcepcionProducto',
  localField: '_id',
  foreignField: 'idProducto'
});

module.exports = mongoose.model('Producto', productoSchema);
