const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seccionSchema = new Schema({
  seccion: { type: String },  
  idCentroCosto: { type: Number },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  manejaCenso: { type: String },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
seccionSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
seccionSchema.virtual('camas', {
  ref: 'Cama',
  localField: '_id',
  foreignField: 'idSeccion'
});

module.exports = mongoose.model('Seccion', seccionSchema);
