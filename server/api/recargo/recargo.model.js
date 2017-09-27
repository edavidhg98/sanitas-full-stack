const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recargoSchema = new Schema({
  recargo: { type: String },  
  descripcion: { type: String },  
  porcentaje: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  itemListaEstadoRecargo: { type: Number },  

  /** Foreign Fields */
  
  idPrestador: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
recargoSchema.virtual('prestador', {
  ref: 'Prestador',
  localField: 'idPrestador',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('Recargo', recargoSchema);
