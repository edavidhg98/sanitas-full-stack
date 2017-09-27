const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const censoTrasladoSchema = new Schema({
  idAdmision: { type: Number },  
  fecIngreso: { type: Date },  
  horIngreso: { type: Number },  
  minIngreso: { type: Number },  
  entidad: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idCama: { type: Schema.Types.ObjectId },
  idCama1: { type: Schema.Types.ObjectId },
  idMotivo: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
censoTrasladoSchema.virtual('cama', {
  ref: 'Cama',
  localField: 'idCama',
  foreignField: '_id',
  justOne: true
});
censoTrasladoSchema.virtual('cama1', {
  ref: 'Cama',
  localField: 'idCama',
  foreignField: '_id',
  justOne: true
});
censoTrasladoSchema.virtual('motivo', {
  ref: 'Motivo',
  localField: 'idMotivo',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('CensoTraslado', censoTrasladoSchema);
