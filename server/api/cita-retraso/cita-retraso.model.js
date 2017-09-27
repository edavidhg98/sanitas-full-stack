const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citaRetrasoSchema = new Schema({
  idEspecialidad: { type: Number },  
  excepcionRetraso: { type: String },  
  minPenalizacionRetraso: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idEntidad: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
citaRetrasoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
citaRetrasoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('CitaRetraso', citaRetrasoSchema);
