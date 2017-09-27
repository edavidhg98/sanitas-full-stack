const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const admisionObservacionesSchema = new Schema({
  idAdmision: { type: Number },  
  fechaRegistro: { type: Date },  
  horaDefinicion: { type: Number },  
  fechaIngreso: { type: Date },  
  horaIngreso: { type: Number },  
  minutoIngreso: { type: Number },  
  fechaDefinicion: { type: Date },  
  observaciones: { type: String },  
  minutoDefinicion: { type: Number },  
  fechaEgreso: { type: Date },  
  horaEgreso: { type: Number },  
  minutoEgreso: { type: Number },  
  destino: { type: Number },  
  loginRegistro: { type: String },  

  /** Foreign Fields */
  
  idCama: { type: Schema.Types.ObjectId },
  idMotivo: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
admisionObservacionesSchema.virtual('cama', {
  ref: 'Cama',
  localField: 'idCama',
  foreignField: '_id',
  justOne: true
});
admisionObservacionesSchema.virtual('motivo', {
  ref: 'Motivo',
  localField: 'idMotivo',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('AdmisionObservaciones', admisionObservacionesSchema);
