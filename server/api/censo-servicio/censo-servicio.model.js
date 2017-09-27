const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const censoServicioSchema = new Schema({
  idAdmision: { type: Number },  
  codigoError: { type: Number },  
  mensajeError: { type: String },  
  fechaRegistro: { type: Date },  
  itemListaEstadoRegistro: { type: Number },  
  idTrazabilidadAdmision: { type: Number },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
censoServicioSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('CensoServicio', censoServicioSchema);
