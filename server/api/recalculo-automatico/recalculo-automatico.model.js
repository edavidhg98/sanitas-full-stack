const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recalculoAutomaticoSchema = new Schema({
  codigoInteligente: { type: String },  
  porcentaje: { type: Number },  
  valor: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  idPrestador: { type: Number },  
  itemListaEstadoRecalculo: { type: Number },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
recalculoAutomaticoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
recalculoAutomaticoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('RecalculoAutomatico', recalculoAutomaticoSchema);
