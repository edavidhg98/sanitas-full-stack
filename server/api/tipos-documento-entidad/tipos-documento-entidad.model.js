const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tiposDocumentoEntidadSchema = new Schema({
  idTipoAdmision: { type: Number },  
  itemListaTipoAfiliado: { type: Number },  
  documento: { type: String },  
  pideNumeroDocumento: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId },
  idTipoPlan: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
tiposDocumentoEntidadSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
tiposDocumentoEntidadSchema.virtual('tipoPlan', {
  ref: 'TipoPlan',
  localField: 'idTipoPlan',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('TiposDocumentoEntidad', tiposDocumentoEntidadSchema);
