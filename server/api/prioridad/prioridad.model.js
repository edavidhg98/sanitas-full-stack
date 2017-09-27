const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prioridadSchema = new Schema({
  descripcion: { type: String },  
  valPriorida: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  prioridad: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
prioridadSchema.virtual('cargosPendientess', {
  ref: 'CargosPendientes',
  localField: '_id',
  foreignField: 'idPrioridad'
});
prioridadSchema.virtual('pedidoss', {
  ref: 'Pedidos',
  localField: '_id',
  foreignField: 'idPrioridad'
});

module.exports = mongoose.model('Prioridad', prioridadSchema);
