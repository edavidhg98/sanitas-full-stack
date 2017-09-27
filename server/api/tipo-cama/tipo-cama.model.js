const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoCamaSchema = new Schema({
  tipCama: { type: String },  
  itemListaTipoEstancia: { type: Number },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
tipoCamaSchema.virtual('camas', {
  ref: 'Cama',
  localField: '_id',
  foreignField: 'idTipoCama'
});

module.exports = mongoose.model('TipoCama', tipoCamaSchema);
