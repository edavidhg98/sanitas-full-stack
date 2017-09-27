const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicamentoAltoCostoSchema = new Schema({
  itemListaTipoAltoCosto: { type: Number },  
  itemListaEstadoMedAltoCosto: { type: Number },  
  observaciones: { type: String },  
  loginRegistro: { type: String },  
  fechaRegistro: { type: Date },  
  loginModificacion: { type: String },  
  fechaModificacion: { type: Date },  

  /** Foreign Fields */
  
  idPrestador: { type: Schema.Types.ObjectId },
  idProducto: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
medicamentoAltoCostoSchema.virtual('prestador', {
  ref: 'Prestador',
  localField: 'idPrestador',
  foreignField: '_id',
  justOne: true
});
medicamentoAltoCostoSchema.virtual('producto', {
  ref: 'Producto',
  localField: 'idProducto',
  foreignField: '_id',
  justOne: true
});
medicamentoAltoCostoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
medicamentoAltoCostoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('MedicamentoAltoCosto', medicamentoAltoCostoSchema);
