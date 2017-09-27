const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homologacionEntidadSchema = new Schema({
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  estado: { type: Boolean },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId },
  idEntidad1: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
homologacionEntidadSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
homologacionEntidadSchema.virtual('entidad1', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('HomologacionEntidad', homologacionEntidadSchema);
