const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const localidadSchema = new Schema({
  codigo: { type: String },  
  nombreLocalidad: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idCiudad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
localidadSchema.virtual('ciudad', {
  ref: 'Ciudad',
  localField: 'idCiudad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('Localidad', localidadSchema);
