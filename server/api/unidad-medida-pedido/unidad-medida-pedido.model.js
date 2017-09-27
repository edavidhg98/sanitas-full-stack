const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unidadMedidaPedidoSchema = new Schema({
  unidadMedidaPedido: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  aliasUnidadMedidaPedido: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
unidadMedidaPedidoSchema.virtual('productos', {
  ref: 'Producto',
  localField: '_id',
  foreignField: 'idUnidadMedidaPedido'
});
unidadMedidaPedidoSchema.virtual('producto1s', {
  ref: 'Producto',
  localField: '_id',
  foreignField: 'idUnidadMedidaPedido'
});
unidadMedidaPedidoSchema.virtual('producto2s', {
  ref: 'Producto',
  localField: '_id',
  foreignField: 'idUnidadMedidaPedido'
});

module.exports = mongoose.model('UnidadMedidaPedido', unidadMedidaPedidoSchema);
