const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monedaSchema = new Schema({
  moneda: { type: String },  
  abreviaturaPaisMoneda: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
monedaSchema.virtual('sucursalEntidads', {
  ref: 'SucursalEntidad',
  localField: '_id',
  foreignField: 'idMoneda'
});

module.exports = mongoose.model('Moneda', monedaSchema);
