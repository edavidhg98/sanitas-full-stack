const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entidadAdmisionSchema = new Schema({
  idTipoAdmision: { type: Number },  
  itemListaAbreAdmision: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  manAnticipo: { type: String },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
entidadAdmisionSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
entidadAdmisionSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('EntidadAdmision', entidadAdmisionSchema);
