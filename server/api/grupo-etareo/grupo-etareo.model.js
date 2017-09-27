const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grupoEtareoSchema = new Schema({
  codigo: { type: String },  
  descripcion: { type: String },  
  edadDesde: { type: Number },  
  edadHasta: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
grupoEtareoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
grupoEtareoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('GrupoEtareo', grupoEtareoSchema);
