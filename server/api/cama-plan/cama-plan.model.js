const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const camaPlanSchema = new Schema({
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idCama: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId },
  idTipoPlan: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
camaPlanSchema.virtual('cama', {
  ref: 'Cama',
  localField: 'idCama',
  foreignField: '_id',
  justOne: true
});
camaPlanSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
camaPlanSchema.virtual('tipoPlan', {
  ref: 'TipoPlan',
  localField: 'idTipoPlan',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('CamaPlan', camaPlanSchema);
