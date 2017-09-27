const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tiempoRecargoSchema = new Schema({
  codigo: { type: String },  
  descripcion: { type: String },  
  horaDesde: { type: Number },  
  minutoDesde: { type: Number },  
  horaFinal: { type: Number },  
  minutoFinal: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  itemListaEstadoMttoRecAuto: { type: Number },  

  /** Foreign Fields */
  
  idSucursalEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
tiempoRecargoSchema.virtual('sucursalEntidad', {
  ref: 'SucursalEntidad',
  localField: 'idSucursalEntidad',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('TiempoRecargo', tiempoRecargoSchema);
