const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const excepcionProductoSchema = new Schema({
  itemListaEstadoExcepcionProducto: { type: Number },  
  particular: { type: String },  
  observaciones: { type: String },  
  loginRegistro: { type: String },  
  fechaRegistro: { type: Date },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId },
  idPrestador: { type: Schema.Types.ObjectId },
  idProducto: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
excepcionProductoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
excepcionProductoSchema.virtual('prestador', {
  ref: 'Prestador',
  localField: 'idPrestador',
  foreignField: '_id',
  justOne: true
});
excepcionProductoSchema.virtual('producto', {
  ref: 'Producto',
  localField: 'idProducto',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ExcepcionProducto', excepcionProductoSchema);
