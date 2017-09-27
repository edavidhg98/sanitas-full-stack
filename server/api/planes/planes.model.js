const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planesSchema = new Schema({
  codCompania: { type: Number },  
  codPlan: { type: Number },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
planesSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('Planes', planesSchema);
