const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoCirugiaSchema = new Schema({
  tipoCirugia: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  itemListaEstadoCirugia: { type: Number },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
tipoCirugiaSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('TipoCirugia', tipoCirugiaSchema);
