const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prestadorCentroCostoUnicoSchema = new Schema({
  centroCosto: { type: String },  
  itemListaTipoCentroCostoUnico: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idPrestador: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
prestadorCentroCostoUnicoSchema.virtual('prestador', {
  ref: 'Prestador',
  localField: 'idPrestador',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('PrestadorCentroCostoUnico', prestadorCentroCostoUnicoSchema);
