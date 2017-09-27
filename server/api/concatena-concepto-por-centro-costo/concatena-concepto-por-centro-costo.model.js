const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const concatenaConceptoPorCentroCostoSchema = new Schema({
  idPrestador: { type: Number },  
  idCentroCosto: { type: Number },  
  idConcepto: { type: Number },  
  itemListaEstadoConCptoCentroCosto: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
concatenaConceptoPorCentroCostoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ConcatenaConceptoPorCentroCosto', concatenaConceptoPorCentroCostoSchema);
