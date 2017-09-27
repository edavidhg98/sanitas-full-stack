const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recargoAutomaticoSchema = new Schema({
  idSucursal: { type: Number },  
  codigoInteligente: { type: String },  
  porcentaje: { type: Number },  
  valor: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  activo: { type: Boolean },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
recargoAutomaticoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('RecargoAutomatico', recargoAutomaticoSchema);
