const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const anticipoSchema = new Schema({
  valorAnticipo: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  estadoItemLista: { type: Number },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
anticipoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
anticipoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
anticipoSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('Anticipo', anticipoSchema);
