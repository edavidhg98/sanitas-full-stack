const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entidadUvrSchema = new Schema({
  itemListaPersonalMedico: { type: Number },  
  fechaInicioConvenio: { type: Date },  
  fecFinConvenio: { type: Date },  
  valor: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  itemListaEstadoEntidadUvr: { type: Number },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
entidadUvrSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('EntidadUvr', entidadUvrSchema);
