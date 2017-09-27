const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sustitutosSchema = new Schema({
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idPrestador: { type: Schema.Types.ObjectId },
  idProducto: { type: Schema.Types.ObjectId },
  idProducto1: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
sustitutosSchema.virtual('prestador', {
  ref: 'Prestador',
  localField: 'idPrestador',
  foreignField: '_id',
  justOne: true
});
sustitutosSchema.virtual('producto', {
  ref: 'Producto',
  localField: 'idProducto',
  foreignField: '_id',
  justOne: true
});
sustitutosSchema.virtual('producto1', {
  ref: 'Producto',
  localField: 'idProducto',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('Sustitutos', sustitutosSchema);
