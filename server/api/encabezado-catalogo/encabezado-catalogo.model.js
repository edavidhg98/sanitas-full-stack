const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const encabezadoCatalogoSchema = new Schema({
  idEncabezado: { type: Number },  
  descripcion: { type: String },  
  itemListaEstado: { type: Number },  
  observacion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  fechaModificacion: { type: Date },  
  loginModificacion: { type: String },  
  activo: { type: Boolean },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
encabezadoCatalogoSchema.virtual('sucursalEntidads', {
  ref: 'SucursalEntidad',
  localField: '_id',
  foreignField: 'idEncabezadoCatalogo'
});

module.exports = mongoose.model('EncabezadoCatalogo', encabezadoCatalogoSchema);
